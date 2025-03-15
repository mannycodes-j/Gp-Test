import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronUp, ChevronDown } from 'lucide-react'
import styles from '@/styles/hover.module.css'

interface UserSectionProps {
  username: string
}

export const UserSection = ({ username }: UserSectionProps) => {
  return (
    <div className={`${styles.cardHover} m-4 rounded-lg p-3 cursor-pointer`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
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
