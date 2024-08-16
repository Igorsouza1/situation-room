

import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { Sidebar } from "@/components/sidebar/sidebar"
import React, { createContext } from 'react';
import dynamic from "next/dynamic";

export default async function Map(){
    const session = await getServerSession(authOptions)
    console.log(session)

    if(!session){
        return(
            <div>
                <h1>Você não está logado</h1>
            </div>
        )
    }


    const Map = dynamic(() => import("../../components/map/mapLeaftjs"), {
        ssr: false
      });
    return(
        <div className="flex flex-row">
            <Sidebar />
            <div className="bg-white-700 mx-auto w-screen">
                <Map posix={[4.79029, -75.69003]} />
            </div>
        </div>
    )
}