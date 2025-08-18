import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { AppSidebar } from "./app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <div>
                <main>
                    <SidebarTrigger/>
                    {children}
                </main>
                <footer>
                    <p>&copy; 2025 Revlv PeraSlip</p>
                </footer>
            </div>
        </SidebarProvider>
    )
}