
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import styles from '@/styles/hover.module.css'

interface NavItemProps {
  label: string
  href: string
  isActive?: boolean
  badge?: number
  imageSrc: string
}

export const NavItem = ({ imageSrc, label, href, isActive, badge }: NavItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        `flex items-center gap-3 rounded-lg px-3 py-2 transition-all relative overflow-hidden`,
        isActive ? 'bg-white/10 text-white' : 'text-gray-400 font-normal',
        styles.navItem
      )}
    >
      <div
        className={cn('h-4 w-4 flex items-center justify-center', styles.icon)}
      >
        <img
          src={imageSrc || '/placeholder.svg'}
          alt={label}
          className="h-8 w-8 object-contain"
        />
      </div>
      <span className={styles.label}>{label}</span>
      {badge && (
        <span
          className={cn(
            `ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white text-xs`,
            styles.badge
          )}
        >
          {badge}
        </span>
      )}
    </Link>
  )
}
