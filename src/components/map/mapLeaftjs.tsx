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
import { init } from 'next/dist/compiled/webpack/webpack';


const client = generateClient<Schema>();

const MapLeaflet = () => {
  
  const [InitialGeometry, setInitialGeometry] = useState<Schema["InitialGeometry"]["type"][]>([]);

  const fetchInitialGeometry = async () => {
    const respon  = await client.models.InitialGeometry.list({
      filter: {
        type: {
          eq: "FeatureCollection"
        }
      }
    });
    setInitialGeometry(respon.data);
    console.log(respon)
  };

  useEffect(() => {
    fetchInitialGeometry();
  }, []);


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
