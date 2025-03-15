import { Progress } from '@/components/ui/progress'
import type { ReactNode } from 'react'

interface ProgressSectionProps {
  title: string
  progress: number
  icon: ReactNode
  subtitle: string
}

export const ProgressSection = ({
  title,
  progress,
  icon,
  subtitle,
}: ProgressSectionProps) => {
  return (
    <div className="mb-6 flex items-start gap-4 last:mb-0">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
        {icon}
      </div>
      <div className="flex-1">
        <div className="mb-1 flex items-center justify-between">
          <div>
            <span className="font-medium text-gray-900">{title}</span>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
          <span className="text-sm font-medium text-blue-600">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  )
}
