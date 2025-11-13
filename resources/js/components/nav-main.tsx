import { Link } from "@inertiajs/react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { type MainNavItems } from "@/types"

export function NavMain({ items = [] }: { items: MainNavItems[] }) {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item: any) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title} asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    )
}
