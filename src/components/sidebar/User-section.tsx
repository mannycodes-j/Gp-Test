import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronUp, ChevronDown } from 'lucide-react'
import styles from '@/styles/hover.module.css'

interface UserSectionProps {
  username: string
}

export const UserSection = ({ username }: UserSectionProps) => {
  return (
    <div
      className={`${styles.cardHover} m-4 rounded-lg p-3 cursor-pointer ${styles.userSection}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <div
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs text-white',
              styles.pulseAnimation
            )}
          >
            {username.charAt(0).toUpperCase()}
          </div> */}
          <Avatar className={`${styles.pulseAnimation}`}>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback
              className={`flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs text-white ${styles.pulseAnimation}`}
            >
              {username[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-white">{username}</span>
        </div>
        <div className="flex flex-col">
          <ChevronUp className="h-4 w-4 text-gray-400" />
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  )
}
