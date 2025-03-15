'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { MobileHeader } from '@/components/mobile/Mobile-header'
import { MobileSidebar } from '@/components/mobile/Mobile-sidebar'
import { StatusCard } from '@/components/dashboard/Status-card'
import { GrammarCard } from '@/components/dashboard/Grammar-card'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import styles from '@/styles/hover.module.css'
import { Bell, ChevronRight } from 'lucide-react'
import { RightSidebar } from '@/components/sidebar/Right-sidebar'

interface DashboardProps {
  username: string
}

const Dashboard = ({ username = 'User' }: DashboardProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
    hover: {
      scale: 1.02,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: {
      scale: 0.98,
      transition: { type: 'spring', stiffness: 400, damping: 17 },
    },
  }

  const progressVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '75%',
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {isSidebarOpen && (
          <MobileSidebar
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            username={username}
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar username={username} />
      </div>

      {/* Main Content */}
      <motion.div
        className="p-4 lg:ml-52 lg:mr-64 lg:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MobileHeader username={username} onMenuToggle={toggleSidebar} />

        <motion.div
          className="mb-6 mt-4 lg:mb-8 lg:mt-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-xl font-semibold text-gray-900 lg:text-2xl">
            Progress Dashboard
          </h1>
        </motion.div>

        {/* Stack cards vertically on mobile */}
        <motion.div
          className="flex flex-col gap-4 lg:flex-row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Exam card - full width on mobile */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full"
          >
            <Card
              className={`w-full bg-[#28439D] shadow-lg ${styles.cardHover}`}
            >
              <CardContent className="p-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 0.5 }}
                  className="mb-2 text-sm font-normal text-white/80"
                >
                  DEADLINE 12:00
                </motion.p>
                <h2 className="mb-2 text-xl font-semibold text-white lg:text-2xl">
                  Exam - Unit 5
                </h2>
                <p className="mb-4 text-[12px] font-light text-white/80">
                  Spanish for beginners
                </p>

                <div className="flex items-center">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Avatar className="h-8 w-8 border-2 border-white/20">
                      <AvatarImage src="/assets/images/Avatar1.png" />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <Avatar className="h-8 w-8 -ml-2 border-2 border-white/20">
                      <AvatarImage src="/assets/images/Avatar2.png" />
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <Avatar className="h-8 w-8 -ml-2 border-2 border-white/20">
                      <AvatarImage src="/assets/images/Avatar3.png" />
                      <AvatarFallback>U3</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <motion.div
                    initial={{ x: -50, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5, type: 'spring' }}
                    className="flex h-8 w-8 -ml-2 items-center justify-center rounded-full bg-white text-sm text-blue-800 font-medium"
                  >
                    +99
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Status cards - stack on mobile */}
          <motion.div
            className="flex flex-col gap-4 lg:flex-row"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <StatusCard
                title="Homework"
                subtitle="For today's lesson"
                timeAgo="35 MIN AGO"
                variant="yellow"
                mark="red"
                markIcon="red"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <StatusCard
                title="Reading"
                subtitle="24 words per week"
                timeAgo="2H AGO"
                variant="blue"
                mark="blue"
                markIcon="blue"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-4 md:grid-cols-2 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {/* Group info card */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="col-span-full md:col-span-1"
          >
            <Card className={`${styles.cardHover}`}>
              <CardHeader className="flex flex-row items-center mb-[-20px] justify-between">
                <CardTitle className="text-black text-[13px] font-medium">
                  Group info
                </CardTitle>
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Bell className="h-5 w-5 text-gray-400" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-gray-600 text-[12px] font-light">
                  13 students in the group
                </p>
                <motion.div
                  className="rounded-lg bg-[#ff9365] p-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="font-medium text-white text-[13px]">
                    Group homework
                  </h3>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-[12px] text-gray-300 font-light">
                      4 students from your group <br /> online now
                    </p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <ChevronRight className="h-5 w-5 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-900">
                    Today's lesson
                  </p>
                  <p className="text-[12px] font-light text-gray-600">
                    unit 6 - Article
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Overall progress card */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="col-span-full md:col-span-1"
          >
            <Card className={`${styles.cardHover}`}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="w-full">
                  <CardTitle className="text-black text-[13px] font-medium">
                    Overall progress
                  </CardTitle>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-[15px] font-medium">
                      Germany for <br /> beginners
                    </h3>
                    <motion.img
                      src="/assets/images/germany.png"
                      alt="German Flag"
                      className="h-14 w-14 object-cover"
                      initial={{ rotate: -10, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="h-2 rounded-full bg-gray-100">
                    <motion.div
                      className="h-2 rounded-full bg-[#3855B3]"
                      variants={progressVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <motion.span
                      className="text-sm font-medium text-gray-900"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                    >
                      75%
                    </motion.span>
                  </div>
                  <hr className="mt-6" />
                </div>
                <div className="flex items-center justify-end">
                  <motion.a
                    href="#"
                    className={`flex items-center text-[13px] text-blue-600 ${styles.buttonHover}`}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    Explore more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Grammar cards - simplified for mobile */}
          <motion.div
            className="col-span-full flex flex-col md:flex-row gap-4"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full md:w-1/2"
            >
              <GrammarCard
                title="Grammar"
                subtitle="+30 grammar rules"
                image="/assets/images/pen.png"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full md:w-1/2"
            >
              <GrammarCard
                title="Dictionary"
                subtitle="+10 new words"
                image="/assets/images/support.png"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hide right sidebar on mobile */}
      <div className="hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  )
}

export default Dashboard
