

import { Sidebar } from "@/components/sidebar/sidebar"
import React from 'react';
import dynamic from "next/dynamic";

export default async function Map(){
  
    const Map = dynamic(() => import("../../components/map/mapLeaftjs"), {
        ssr: false
      });
    return(
        <div className="flex flex-row">
            <Sidebar />
            <div className="bg-white-700 mx-auto w-screen z-0">
                <Map />
            </div>
        </div>
    )
}
