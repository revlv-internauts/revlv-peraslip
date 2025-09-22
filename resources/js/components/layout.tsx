import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { AppSidebar } from "./app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <div>
                <SidebarTrigger/>
                <main className="flex-l overflow-auto p-4">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}