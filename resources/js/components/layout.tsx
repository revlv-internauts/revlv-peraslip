import { SidebarInset, SidebarProvider, SidebarTrigger, Sidebar } from "./ui/sidebar"
import { AppSidebar } from "./app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <div>
                <SidebarTrigger/>
                <header>
                    <p>Revlv PeraSlip</p>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <p>&copy; 2025 Revlv PeraSlip</p>
                </footer>
            </div>
        </SidebarProvider>
    )
}