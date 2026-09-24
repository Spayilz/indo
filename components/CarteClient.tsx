"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { etapesCarte, trajetsCarte } from "@/lib/plan";

function icone(nom: string, couleur: string) {
  return L.divIcon({
    className: "marqueur-carte",
    html: `<div style="--couleur:${couleur};position:relative;"><div class="marqueur-point"></div><div class="marqueur-etiquette">${nom}</div></div>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
}

const styleTrajet: Record<string, { dashArray?: string; couleur: string }> = {
  avion: { dashArray: "2 8", couleur: "#b45309" },
  route: { couleur: "#57534b" },
  train: { dashArray: "10 6", couleur: "#1d4ed8" },
  bateau: { dashArray: "4 7", couleur: "#0e7490" },
};

/* Masque les étiquettes quand on est trop loin (elles se chevauchent),
 * et active/désactive le déplacement au doigt. */
function Reglages({ deplacable }: { deplacable: boolean }) {
  const map = useMap();
  const maj = () => {
    const c = map.getContainer();
    c.classList.toggle("zoom-loin", map.getZoom() < 7);
  };
  useMapEvents({ zoomend: maj });
  useEffect(() => {
    maj();
    if (deplacable) map.dragging.enable();
    else map.dragging.disable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deplacable]);
  return null;
}

export default function CarteClient() {
  const bounds = L.latLngBounds(etapesCarte.map((e) => e.coords));
  const [tactile, setTactile] = useState(false);
  const [deplacable, setDeplacable] = useState(true);

  useEffect(() => {
    const t = window.matchMedia("(pointer: coarse)").matches;
    setTactile(t);
    setDeplacable(!t);
  }, []);

  return (
    <div className="relative w-full h-full">
      <MapContainer
        bounds={bounds}
        boundsOptions={{ padding: [42, 42] }}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <Reglages deplacable={deplacable} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {trajetsCarte.map((t, i) => {
          const a = etapesCarte.find((e) => e.id === t.de);
          const b = etapesCarte.find((e) => e.id === t.vers);
          if (!a || !b) return null;
          const s = styleTrajet[t.mode] ?? styleTrajet.route;
          return (
            <Polyline
              key={i}
              positions={[a.coords, b.coords]}
              pathOptions={{
                color: s.couleur,
                weight: 2.5,
                opacity: 0.8,
                dashArray: s.dashArray,
                lineCap: "round",
              }}
            />
          );
        })}
        {etapesCarte.map((e, i) => (
          <Marker
            key={i}
            position={e.coords}
            icon={icone(e.nom, e.couleur ?? "#b45309")}
          />
        ))}
      </MapContainer>
      {tactile && (
        <button
          type="button"
          onClick={() => setDeplacable((d) => !d)}
          className="absolute top-2 right-2 z-[500] min-h-[40px] px-3 rounded-full bg-[var(--carte)] border border-[var(--ligne)] text-[13px] font-semibold shadow"
        >
          {deplacable ? "🔒 Figer la carte" : "✋ Déplacer la carte"}
        </button>
      )}
    </div>
  );
}
