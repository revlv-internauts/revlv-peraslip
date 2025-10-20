import { Calendar, Inbox, Settings, LayoutDashboard, UsersRound, BanknoteArrowUp, UserRound } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import { NavDashboard } from "./nav-dashboard"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { NavHome } from "./nav-home"

const data = {
  // Menu Items
  navDashboard: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard
    }
  ],
  navMain: [
    {
      title: "Employees",
      url: "/employees",
      icon: UsersRound,
      items: [
        {
          title: "View",
          url: "/employees",
        },
      ],
    },
    {
      title: "Payrolls",
      url: "/payrolls",
      icon: BanknoteArrowUp,
      items: [
        {
          title: "View",
          url: "/payrolls",
        },
      ],
    },
    {
      title: "Users",
      url: "/users",
      icon: UserRound,
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
        <NavDashboard items={data.navDashboard} />
        <NavMain items={data.navMain}/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}