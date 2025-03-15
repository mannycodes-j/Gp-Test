import type { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from '@/styles/hover.module.css'
import { cn } from '@/lib/utils'

interface LogoProps {
  imgSrc?: string // Allow changing the logo image
  padding?: string // Allow dynamic padding
  customClass?: string // Allow additional custom styles
}

export const Logo: FC<LogoProps> = ({
  imgSrc = '/assets/images/Group 1010.png',
  padding = 'p-5', // Default padding
  customClass = '',
}) => {
  return (
    <div
      className={`${padding} ${customClass} ${styles.logo}`}
    >
      
        <Link to="/" className="flex items-center gap-2">
        <div
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-md bg-tranparent',
          styles.pulseAnimation
        )}
      >
          <img src={imgSrc} alt="Logo" className="h-5 w-5" />
           </div>
          <span className="text-white text-2xl font-bold">Dlex</span>
        </Link>
     

      <hr className="mt-2" />
    </div>
  )
}
