/* Service worker du carnet — rend le site consultable sans réseau.
 *
 * Stratégie :
 *  - à l'installation (et à chaque ouverture en ligne), on récupère la page
 *    d'accueil, on en extrait tous les scripts, styles, polices et images,
 *    et on met tout en cache ;
 *  - on précharge aussi les tuiles de la carte couvrant l'Indonésie
 *    (zooms 4 à 7) pour que la carte s'affiche hors ligne ;
 *  - ensuite : page = réseau d'abord puis cache ; assets = cache d'abord.
 */

const CACHE = "indo-trip-v2";
const TUILES = "indo-trip-tuiles-v2";
const ORIGINE = self.location.origin;

// Emprise de la carte (Sumatra → Komodo) et niveaux de zoom préchargés
const EMPRISE = { latMin: -10.5, latMax: 5.5, lngMin: 95, lngMax: 122 };
const ZOOMS = [5, 6, 7];

self.addEventListener("install", (event) => {
  event.waitUntil(
    precachePage()
      .catch(() => {})
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const noms = await caches.keys();
      await Promise.all(
        noms
          .filter((n) => n !== CACHE && n !== TUILES)
          .map((n) => caches.delete(n)),
      );
      await self.clients.claim();
      precacheTuiles().catch(() => {});
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "precache") {
    event.waitUntil(
      (async () => {
        let ok = true;
        try {
          await precachePage();
          await precacheTuiles();
        } catch {
          ok = false;
        }
        const clients = await self.clients.matchAll({ type: "window" });
        clients.forEach((c) => c.postMessage(ok ? "precache-ok" : "precache-ko"));
      })(),
    );
  }
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Tuiles de carte OpenStreetMap : cache d'abord
  if (url.hostname === "tile.openstreetmap.org") {
    event.respondWith(tuile(req, url));
    return;
  }

  if (url.origin !== ORIGINE) return;

  // Navigation : réseau d'abord (pour avoir la dernière version), sinon cache
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const rep = await fetchAvecDelai(req, 4000);
          const cache = await caches.open(CACHE);
          cache.put("/", rep.clone());
          return rep;
        } catch {
          const cache = await caches.open(CACHE);
          return (await cache.match(req)) || (await cache.match("/")) || Response.error();
        }
      })(),
    );
    return;
  }

  // Assets : cache d'abord, réseau en secours (et mise en cache au passage)
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const enCache = await cache.match(req);
      if (enCache) return enCache;
      try {
        const rep = await fetch(req);
        if (rep.ok) cache.put(req, rep.clone());
        return rep;
      } catch {
        return Response.error();
      }
    })(),
  );
});

async function fetchAvecDelai(req, ms) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(req, { signal: ctrl.signal, cache: "no-store" });
  } finally {
    clearTimeout(t);
  }
}

async function precachePage() {
  const cache = await caches.open(CACHE);
  const rep = await fetch("/", { cache: "no-store" });
  if (!rep.ok) throw new Error("page");
  const html = await rep.clone().text();
  await cache.put("/", rep);

  const urls = new Set();
  for (const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const u = m[1];
    if (u.startsWith("/") && !u.startsWith("//") && u !== "/sw.js") urls.add(u.split("#")[0]);
  }

  // Polices et images référencées depuis les feuilles de style
  for (const u of [...urls].filter((u) => u.endsWith(".css"))) {
    try {
      const css = await (await fetch(u)).text();
      for (const m of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
        const f = m[1];
        if (f.startsWith("/")) urls.add(f);
      }
    } catch {}
  }

  await Promise.allSettled(
    [...urls].map(async (u) => {
      if (await cache.match(u)) return;
      const r = await fetch(u);
      if (r.ok) await cache.put(u, r);
    }),
  );

  // Nettoyage : on retire les anciens fichiers de build qui ne servent plus
  const gardes = new Set([...urls].map((u) => ORIGINE + u));
  gardes.add(ORIGINE + "/");
  for (const k of await cache.keys()) {
    if (k.url.startsWith(ORIGINE + "/_next/") && !gardes.has(k.url)) await cache.delete(k);
  }
}

function cleTuile(url) {
  return "https://tile.openstreetmap.org" + url.pathname;
}

async function tuile(req, url) {
  const cache = await caches.open(TUILES);
  const cle = cleTuile(url);
  const enCache = await cache.match(cle);
  if (enCache) return enCache;
  try {
    const rep = await fetch(req);
    if (rep.ok) cache.put(cle, rep.clone());
    return rep;
  } catch {
    return Response.error();
  }
}

function lngVersX(lng, z) {
  return Math.floor(((lng + 180) / 360) * Math.pow(2, z));
}
function latVersY(lat, z) {
  const r = (lat * Math.PI) / 180;
  return Math.floor(((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * Math.pow(2, z));
}

async function precacheTuiles() {
  const cache = await caches.open(TUILES);
  const taches = [];
  for (const z of ZOOMS) {
    const x0 = lngVersX(EMPRISE.lngMin, z), x1 = lngVersX(EMPRISE.lngMax, z);
    const y0 = latVersY(EMPRISE.latMax, z), y1 = latVersY(EMPRISE.latMin, z);
    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        const cle = `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
        taches.push(async () => {
          if (await cache.match(cle)) return;
          const rep = await fetch(cle);
          if (rep.ok) await cache.put(cle, rep);
        });
      }
    }
  }
  // Par paquets de 4, en douceur (politique d'usage des tuiles OSM)
  for (let i = 0; i < taches.length; i += 4) {
    await Promise.allSettled(taches.slice(i, i + 4).map((t) => t()));
  }
}
