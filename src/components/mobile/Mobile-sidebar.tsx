'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/sidebar/Logo'
import { TeamCard } from '@/components/sidebar/Team-card'
import { NavItem } from '@/components/sidebar/Nav-item'
import { StorageCard } from '@/components/sidebar/Storage-card'
import { UserSection } from '@/components/sidebar/User-section'


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
        className={`fixed top-0 left-0 h-full w-52 bg-[#1a3380] z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        <div className="flex items-center justify-end ">
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

        <Logo padding="p-3" />

        <TeamCard />

        <div className="flex-1 space-y-1 px-3 py-2">
          <nav className="space-y-0.5 text-[12px]">
            <NavItem
              imageSrc="/assets/images/Graph.png"
              label="Dashboard"
              href="/dashboard"
              isActive
            />
            <NavItem
              imageSrc="/assets/images/Chart.png"
              label="Overview"
              href="/overview"
            />
            <NavItem
              imageSrc="/assets/images/Chat.png"
              label="Chat"
              href="/chat"
              badge={5}
            />
            <NavItem
              imageSrc="/assets/images/User.png"
              label="Team"
              href="/team"
            />
          </nav>

          <div>
            <p className="px-3 mb-2 text-xs font-semibold text-gray-400">
              SHORTCUT
            </p>
            <nav className="space-y-0.5 text-[12px]">
              <NavItem
                imageSrc="/assets/images/Document.png"
                label="Tasks"
                href="/tasks"
              />
              <NavItem
                imageSrc="/assets/images/Danger.png"
                label="Reports"
                href="/reports"
              />
              <NavItem
                imageSrc="/assets/images/Setting.png"
                label="Settings"
                href="/settings"
              />
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
