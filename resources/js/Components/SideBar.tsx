import { CircleUserRound, Home, SquareUserRound, Ticket, Volleyball, Camera } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/Components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: route('dashboard'),
    icon: Home,
  },
  {
    title: "Customers",
    url: route('customers.index'),
    icon: CircleUserRound,
  },
  {
    title: "Coaches",
    url: route('coaches.index'),
    icon: SquareUserRound,
  },
  {
    title: "Subscriptions",
    url:  route('subscriptions.index'),
    icon: Ticket,
  },
  {
    title: "Workout Sessions",
    url:  route('workoutSessions.index'),
    icon: Volleyball,
  },

]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
