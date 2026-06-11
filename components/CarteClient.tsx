"use client";

import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
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

export default function CarteClient() {
  const bounds = L.latLngBounds(etapesCarte.map((e) => e.coords));

  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [42, 42] }}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
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
  );
}
