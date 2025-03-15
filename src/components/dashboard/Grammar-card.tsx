import type React from 'react'
import { ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import styles from '@/styles/hover.module.css'
import { motion } from 'framer-motion'

interface GrammarCardProps {
  title: string
  subtitle: string
  icon?: React.ReactNode
  image: string // Add image prop
}

export const GrammarCard = ({
  title,
  subtitle,
  image,
}: GrammarCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Card className={styles.cardHover1}>
        <div className="flex items-center justify-between md:gap-44 md:px-4">
          <div className="flex items-center gap-5">
            <div className="rounded-[50%] bg-white shadow-lg p-3">
              <motion.img
                src={image} // Use the dynamic image prop
                alt={title}
                className="h-6 w-6 object-cover"
              />
            </div>

            <div>
              <h3 className="font-medium text-black text-[13px]">{title}</h3>
              <p className="text-[12px] text-gray-600 font-light">{subtitle}</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </Card>
    </motion.div>
  )
}

export default GrammarCard
