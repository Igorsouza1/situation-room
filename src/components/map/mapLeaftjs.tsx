"use client";

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";


const client = generateClient<Schema>();


const MapLeaflet = () => {
  const [initialGeometry, setInitialGeometry] = useState<Schema["InitialGeometry"]["type"][]>([]);
  
  const fetchInitialGeometry = async () => {
    try{
      const client = generateClient<Schema>();
        console.log(client)
        const { data: items, errors } = await client.models.InitialGeometry.list({
          filter:{
            name: { eq: "Bacia do Rio da Prata" }
          },
        });
        console.log(errors)
        setInitialGeometry(items);
        console.log(items);
      }catch(error){
      console.error(error);
    }
   
  };

  useEffect(() => {
    fetchInitialGeometry();
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
