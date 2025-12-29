import Sidebar from "@/components/Sidebar";
import { getSession } from "@/lib/auth-server";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {

    const session = await getSession()
    if (!session) redirect('/login')

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 overflow-x-hidden p-10">
                {children}
            </main>
        </div>
    )
}