"use client";

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// import { getCurrentUser, fetchAuthSession } from "aws-amplify/auth";
// import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();
console.log(client)

const MapLeaflet = () => {
  const [initialGeometry, setInitialGeometry] = useState<Schema["InitialGeometry"]["type"][]>([]);

  const fetchInitialGeometry = async () => {
    const { data: items, errors } = await client.models.InitialGeometry.list({
      filter:{
        type: { eq: "FeatureCollection" }
      }
    });
    console.log(errors)
    setInitialGeometry(items);
    console.log(items);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchInitialGeometry();
    }, 5000); // 5000 ms = 5 seconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  console.log(initialGeometry);

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
