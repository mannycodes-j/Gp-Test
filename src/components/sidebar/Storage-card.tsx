import { Progress } from '@/components/ui/progress'
import styles from '@/styles/hover.module.css'

export const StorageCard = () => {
  return (
    <div
      className={`${styles.glassEffect} m-2 rounded-lg p-2 ${styles.storageCard}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] text-white">Storage</span>
        <button className={`text-[11px] text-white ${styles.textEffect}`}>
          Upgrade
        </button>
      </div>
      <div className="space-y-2">
        <p className="text-[10px] text-white">
          3.4 GB <span className="text-gray-400">of 15 GB</span>{' '}
        </p>
        <Progress value={22.67} className="h-1 bg-white/10" />
      </div>
    </div>
  )
}
