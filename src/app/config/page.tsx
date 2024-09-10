import { Sidebar } from "@/components/sidebar/sidebar";


export default function Config() {
    return (
        <div className="flex flex-row">
        <Sidebar />
        <div className="bg-white-700 mx-auto w-screen z-0">
            <h1>PAGE Config</h1>
        </div>
    </div>
    )
}
