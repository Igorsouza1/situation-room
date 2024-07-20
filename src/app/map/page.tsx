import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { Sidebar } from "@/components/sidebar/sidebar"

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
    return(
        <div className="flex flex-row">
            <Sidebar />
            <h1>Map Page, bem vindo {session?.user?.name}</h1>
        </div>
    )
}