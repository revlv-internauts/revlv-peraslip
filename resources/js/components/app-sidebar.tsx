import { Calendar, Inbox, Settings, LayoutDashboard, User, Banknote, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import { NavHome } from "./nav-home"
import { NavMain } from "./nav-main"
import { NavEmployeeSettings } from "./nav-employee-settings"
import { NavUser } from "./nav-user"

const data = {
  // Menu Items
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Employees",
      url: "/employees",
      icon: User
    },
    {
      title: "Payrolls",
      url: "/payrolls",
      icon: Banknote
    },
    {
      title: "Users",
      url: "/users",
      icon: Users
    },
  ],
  navEmployeeSettings: [
    {
      title: "Users",
      url: "/users",
      icon: Users,
      items: [
        {
          title: "View",
          url: "/users",
        },
      ],
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHome />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavEmployeeSettings items={data.navEmployeeSettings}/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}