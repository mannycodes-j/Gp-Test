import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronRight } from 'lucide-react'

interface ProfileHeaderProps {
  name: string
  role: string
  avatarUrl?: string
  badgeCount?: number
}

export const ProfileHeader = ({
  name,
  role,
  avatarUrl,
  badgeCount,
}: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-end">
      <div className="relative">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarUrl || '/placeholder.svg'} />
          <AvatarFallback>HP</AvatarFallback>
        </Avatar>
        {badgeCount && (
          <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
            {badgeCount}
          </div>
        )}
      </div>
      <h2 className="mt-2 text-lg font-semibold text-gray-900">{name}</h2>
      <p className="text-sm text-gray-500">{role}</p>

      <div className="mt-4 flex items-center gap-2 text-sm">
        <div>
          <p className="font-medium text-gray-900">Get - 10% sell price</p>
          <p className="text-gray-500">for "spanish A2" course</p>
        </div>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  )
}
