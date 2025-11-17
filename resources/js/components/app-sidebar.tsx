import { 
  Calendar, 
  Inbox, 
  Settings, 
  LayoutDashboard, 
  User, 
  Banknote, 
  Users, 
  SettingsIcon 
} from "lucide-react"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavHome } from "./nav-home"
import { NavMain } from "./nav-main"
import { NavConfigurations } from "./nav-configurations"
import { NavUser } from "./nav-user"
import { type ConfigNavItems, type MainNavItems } from "@/types"

const mainNavItems: MainNavItems[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Payrolls",
    url: "/payrolls",
    icon: Banknote,
  },
  {
    title: "Employees",
    url: "/employees",
    icon: User,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
]

const configNavItems: ConfigNavItems[] = [
  {
    title: 'Configurations',
    icon: SettingsIcon,
    subItems: [
      {
        title: 'Departments',
        url: '/departments',
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHome />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainNavItems} />
        <NavConfigurations items={configNavItems}/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}