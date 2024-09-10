"use client";

import { MapContainer, TileLayer, Polygon, Polyline } from "react-leaflet";
import { LatLngTuple } from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";
import { convertMultiPolygonToLatLngTuples, convertMultiLineStringToLatLngTuples } from "./utils/multipolygon";

const MapLeaflet = () => {

  return (
    <MapContainer center={[-21.327773, -56.694734]} zoom={10} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapLeaflet;
