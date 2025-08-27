import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { AppSidebar } from "./app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <div>
                <SidebarTrigger/>
                <main>
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}