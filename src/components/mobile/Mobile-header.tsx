'use client'

import { Menu, Search, Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

interface MobileHeaderProps {
  username: string
  onMenuToggle: () => void
}

export const MobileHeader = ({ username, onMenuToggle }: MobileHeaderProps) => {
  return (
    <div className="flex items-center justify-between lg:hidden py-3 border-b mb-4">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>
        <img
          src="/assets/images/flag.png"
          alt="Flag"
          className="h-5 w-7 rounded-sm object-cover"
        />
        <Avatar className="h-8 w-8">
          <AvatarImage src="/assets/images/#.png" />
          <AvatarFallback>{username.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
