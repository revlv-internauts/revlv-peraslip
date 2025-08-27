import { Calendar, Inbox, Settings, LayoutDashboard, UsersRound, UserRound } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { NavHome } from "./nav-home"

const data = {
  // Footer
  user: {
    name: "Kyle Poblete",
    email: "kyle@mail.com",
    avatar: "avatars/luffy.jpeg",
  },
  // Header
  navHome: {
    url: '/dashboard'
  },
  // Menu Items
  navMain: [
    {
      title: "Dashboard",
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      url: "/users",
      icon: UsersRound,
    },
    {
      title: "Employees",
      url: "/employees",
      icon: UserRound,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHome items={data.navHome}/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}