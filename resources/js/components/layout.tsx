import { AppSidebar } from "./app-sidebar"
import { SidebarProvider } from "./ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
            <main>
            <SidebarProvider>
                <AppSidebar/>
                {children}
            </SidebarProvider>
            </main>
    )
}