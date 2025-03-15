import { ChevronUp, ChevronDown } from 'lucide-react'
import styles from '@/styles/hover.module.css'

export const TeamCard = () => {
  return (
    <div className={`${styles.glassEffect} m-2 rounded-lg p-3 ${styles.teamCard}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400 text-white">
            DW
          </div>
          <div>
            <p className="text-[13px] font-medium text-white">Dlex Designs</p>
            <p className="text-xs text-gray-400">general team</p>
          </div>
        </div>
        <div className="flex flex-col">
          <ChevronUp className="h-4 w-4 text-gray-400" />
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  )
}
