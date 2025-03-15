
import { Logo } from './Logo'
import { NavItem } from './Nav-item'
import { TeamCard } from './Team-card'
import { StorageCard } from './Storage-card'
import { UserSection } from './User-section'
import { cn } from '@/lib/utils'
import styles from '@/styles/hover.module.css'

interface SidebarProps {
  username: string
}

export const Sidebar = ({ username }: SidebarProps) => {
  return (
    <div
      className={cn(
        'flex h-screen w-52 flex-col bg-[#3C38CE] fixed left-0',
        styles.sidebarContainer
      )}
    >
      <div className={styles.sidebarSection}>
        <Logo />
      </div>

      <div className={styles.sidebarSection}>
        <TeamCard />
      </div>

      <div className={cn('flex-1 space-y-6 px-3 py-1', styles.sidebarSection)}>
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

      <div className={cn('mt-auto', styles.sidebarSection)}>
        <StorageCard />
        <UserSection username={username} />
      </div>
    </div>
  )
}
