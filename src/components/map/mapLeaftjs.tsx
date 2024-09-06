"use client";

import { MapContainer, TileLayer, Polygon, Polyline } from "react-leaflet";
import { LatLngTuple } from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";
import { convertMultiPolygonToLatLngTuples, convertMultiLineStringToLatLngTuples } from "./utils/multipolygon";

const MapLeaflet = () => {
  const [bacia, setBacia] = useState<LatLngTuple[][][]>([]);
  const [leitoRio, setLeitoRio] = useState<LatLngTuple[][]>([]);
  const [banhado, setBanhado] = useState<LatLngTuple[][][]>([]);

  // useEffect(() => {
  //   const fetchGeometries = async () => {
  //     try {
  //       // const response = await fetch("/api/geometrias");
  //   //     if (!response.ok) {
  //   //       throw new Error("Erro ao buscar dados");
  //   //     }
  //   //     const data = await response.json();

  //   //     // Verifica e converte as geometrias conforme o tipo
  //   //     if (data.bacia.geometria.type === "MultiPolygon") {
  //   //       setBacia(convertMultiPolygonToLatLngTuples(data.bacia.geometria.coordinates));
  //   //     }

  //   //     if (data.leito_rio.geometria.type === "MultiLineString") {
  //   //       setLeitoRio(convertMultiLineStringToLatLngTuples(data.leito_rio.geometria.coordinates));
  //   //     }

  //   //     if (data.banhado.geometria.type === "MultiPolygon") {
  //   //       setBanhado(convertMultiPolygonToLatLngTuples(data.banhado.geometria.coordinates));
  //   //     }
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // };

  //   // fetchGeometries();
  // }, []);

  return (
    <MapContainer center={[-21.327773, -56.694734]} zoom={10} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Renderiza os MultiPolygons */}
      {bacia.map((polygon, idx) => (
        <Polygon key={`bacia-${idx}`} positions={polygon} color="blue" />
      ))}

      {banhado.map((polygon, idx) => (
        <Polygon key={`banhado-${idx}`} positions={polygon} color="yellow" />
      ))}

      {/* Renderiza o MultiLineString */}
      {leitoRio.map((line, idx) => (
        <Polyline key={`leito-rio-${idx}`} positions={line} color="green" />
      ))}
    </MapContainer>
  );
};

export default MapLeaflet;
