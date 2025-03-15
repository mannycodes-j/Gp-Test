import type { FC } from 'react'
import { Link } from 'react-router-dom'

export const Logo: FC = () => {
  return (
    <div>
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/images/Group 1010.png"
            alt="Logo"
            className="h-5 w-5"
          />
          <span className="text-white text-2xl font-bold">Dlex</span>
        </Link>
        <hr className="mt-2" />
      </div>
    </div>
  )
}
