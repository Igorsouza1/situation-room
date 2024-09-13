import { Sidebar } from "@/components/sidebar/sidebar";

import { getCurrentUser } from "aws-amplify/auth";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../amplify/data/resource";

export default async function Config() {
    try {
        const authUser = await getCurrentUser()
        console.log("Usuario Autenticação: " ,authUser)
        // const client = generateClient<Schema>({
        //     authMode: "userPool"
        // });
        // const response = await client.models.InitialGeometry.list();
        // console.log("Response:", response);
        // console.log("InitialGeometrys:", response.data);
      } catch (error) {
        
        console.error("Error fetching InitialGeometrys:", error);
      }

    return (
        <div className="flex flex-row">
        <Sidebar />
        <div className="bg-white-700 mx-auto w-screen z-0">
            <h1>PAGE Config</h1>
        </div>
    </div>
    )
}



 