import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface NavItemProps {
  icon: LucideIcon
  label: string
  href: string
  isActive?: boolean
  badge?: number
}

export const NavItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  badge,
}: NavItemProps) => {
  return (
    <Link
      to={href} // Changed from href to to
      className={cn(
        `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-white`,
        isActive ? 'bg-white/10 text-white' : 'text-gray-200'
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
      {badge && (
        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-whitetext-xs">
          {badge}
        </span>
      )}
    </Link>
  )
}
