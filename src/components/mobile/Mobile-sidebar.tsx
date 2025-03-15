'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/sidebar/Logo'
import { TeamCard } from '@/components/sidebar/Team-card'
import { NavItem } from '@/components/sidebar/Nav-item'
import { StorageCard } from '@/components/sidebar/Storage-card'
import { UserSection } from '@/components/sidebar/User-section'
import {
  LayoutDashboard,
  BarChart2,
  MessageCircle,
  Users,
  ListTodo,
  FileText,
  Settings,
} from 'lucide-react'

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
  username: string
}

export const MobileSidebar = ({
  isOpen,
  onClose,
  username,
}: MobileSidebarProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1a3380] z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        <div className="flex items-center justify-end p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-blue-800"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <Logo />
        <TeamCard />

        <div className="flex-1 space-y-6 px-3 py-4">
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
    </>
  )
}
