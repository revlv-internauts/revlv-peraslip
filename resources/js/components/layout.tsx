import { AppSidebar } from "./app-sidebar"
import { SidebarProvider } from "./ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main>
                {children}
            </main>
        </SidebarProvider>
    )
}