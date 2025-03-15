  import { Check } from 'lucide-react'
  import { Card, CardContent } from '@/components/ui/card'
  import styles from '@/styles/hover.module.css'
  import { motion } from 'framer-motion'

  interface StatusCardProps {
    title: string
    subtitle: string
    timeAgo: string
    variant: 'yellow' | 'blue'
    mark: 'red' | 'blue'
    markIcon: 'red' | 'blue'
  }

  export const StatusCard = ({
    title,
    subtitle,
    timeAgo,
    variant,
    mark,
    markIcon,
  }: StatusCardProps) => {
  
    const cardColorClass =
      variant === 'yellow' ? styles.yellowCard : styles.blueCard
    const hoverClass =
      variant === 'yellow' ? styles.yellowCardHover : styles.blueCardHover
      const markColorClass =
        mark === 'red' ? styles.redMarkCircle : styles.blueMarkCircle
    const markColorIcon = markIcon === 'red' ? styles.redMark : styles.blueMark
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Card
          className={`border-none shadow-none ${cardColorClass} ${styles.cardHover} ${hoverClass}`}
        >
          <CardContent className="md:mx-4">
            <div className="flex flex-col p-[-20px] justify-between">
              <div className="flex flex-col">
                <motion.div
                className={`h-2 w-2 rounded-full ${markColorClass}`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  repeatType: 'reverse',
                }}
              >
                  <Check className={` ${markColorIcon}  `} />
                </motion.div>

                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900">{title}</h3>
                </div>
                <p className="mt-1 text-[10px] text-gray-600">{subtitle}</p>
              </div>
              
              <div className="md:pt-12">
                <span className="text-xs text-black">{timeAgo}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  export default StatusCard
