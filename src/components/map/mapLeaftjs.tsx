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
  useEffect(() => {
    // Mover a definição de `fetchInitialGeometry` para dentro do `useEffect`
    async function fetchInitialGeometry() {
      try {
        
        console.log("Client: ", client)
        console.log("Client.models: ", client.models)
        console.log("Client.models.InitialGeometry: ", client.models.InitialGeometry)
        const response = await client.models.InitialGeometry.list({
          filter: {
            type: {
              eq: "FeatureCollection"
            }
          }
        });
        console.log(response);
        console.log(response.errors)
      } catch (error) {
        console.error("Error fetching initial geometries:", error);
      }
    }
  
    // Chamar a função `fetchInitialGeometry`
    fetchInitialGeometry();
  }, []); // Adicione dependências se necessário


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
