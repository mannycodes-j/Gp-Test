import {
  LayoutDashboard,
  BarChart2,
  MessageCircle,
  Users,
  ListTodo,
  FileText,
  Settings,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './Nav-item'
import { TeamCard } from './Team-card'
import { StorageCard } from './Storage-card'
import { UserSection } from './User-section'

interface SidebarProps {
  username: string
}

export const Sidebar = ({ username }: SidebarProps) => {
  return (
    <div className="flex h-screen w-52 flex-col bg-[#1a3380] fixed left-0">
      <Logo />
      <TeamCard />

      <div className="flex-1 space-y-6 px-3 py-1">
        <nav className="space-y-0.5 text-[12px]">
          <NavItem
            icon={LayoutDashboard}
            label="Dashboard"
            href="/dashboard"
            isActive
          />
          <NavItem icon={BarChart2} label="Overview" href="/overview" />
          <NavItem icon={MessageCircle} label="Chat" href="/chat" badge={5} />

          <NavItem icon={Users} label="Team" href="/team" />
        </nav>

        <div>
          <p className="px-3 mb-2 text-xs font-semibold text-gray-400">
            SHORTCUT
          </p>
          <nav className="space-y-0.5 text-[12px]">
            <NavItem icon={ListTodo} label="Tasks" href="/tasks" />
            <NavItem icon={FileText} label="Reports" href="/reports" />
            <NavItem icon={Settings} label="Settings" href="/settings" />
          </nav>
        </div>
      </div>

      <div className="mt-auto">
        <StorageCard />
        <UserSection username={username} />
      </div>
    </div>
  )
}
