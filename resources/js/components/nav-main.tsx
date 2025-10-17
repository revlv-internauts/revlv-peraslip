import { Link } from "@inertiajs/react"
import { LayoutDashboard, UserRound, UsersRound, BanknoteArrowUp } from "lucide-react"
import { LucideIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

export function NavMain() {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/dashboard" className="w-full">
                <SidebarMenuButton className="w-full justify-start">
                  <LayoutDashboard />
                  Dashboard
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/users" className="w-full">
                <SidebarMenuButton className="w-full justify-start">
                  <UserRound />
                  Users
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/employees" className="w-full">
                <SidebarMenuButton className="w-full justify-start">
                  <UsersRound />
                  Employees
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/payrolls" className="w-full">
                <SidebarMenuButton className="w-full justify-start">
                  <BanknoteArrowUp />
                  Payrolls
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    )
}
