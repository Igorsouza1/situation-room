"use client";

import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { LatLngTuple } from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";
import { convertMultiPolygonToLatLngTuples } from "./utils/multipolygon";

interface MapProps {
    posix: LatLngTuple;
    zoom?: number;
}

const defaults = {
    zoom: 11,
};

const MapLeaflet = () => {
  const [multiPolygonCoordinates, setMultiPolygonCoordinates] = useState<LatLngTuple[][][]>([]);

  useEffect(() => {
    const fetchPolygon = async () => {
      try {
        const response = await fetch("/api/geometrias");
        if (!response.ok) {
          throw new Error("Erro ao buscar geometria");
        }
        const data = await response.json();

        // Converte o GeoJSON MultiPolygon usando a função utilitária
        const multiPolygon = convertMultiPolygonToLatLngTuples(data.coordinates);

        setMultiPolygonCoordinates(multiPolygon);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPolygon();
  }, []);

  return (
    <MapContainer center={[-15.7801, -47.9292]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {multiPolygonCoordinates.map((polygon, idx) => (
        <Polygon key={idx} positions={polygon} />
      ))}
    </MapContainer>
  );
};

export default MapLeaflet;
