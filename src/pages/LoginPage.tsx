'use client'

import type React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface LoginPageProps {
  onLogin?: (username: string) => void
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (username && password) {
      setIsLoading(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (onLogin) onLogin(username)
      navigate('/dashboard')
    }
  }

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

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a3380]">
      <motion.div
        className="w-full max-w-md p-10 pb-10 pt-20 pr-10 bg-white rounded-md shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-6">
            <p className="text-gray-600">
              Don't have an account yet?{' '}
              <a href="#" className="text-[#3855B3] font-bold hover:underline">
                Create an account
              </a>
            </p>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center cursor-pointer justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors mb-6"
          >
            <img
              src="/assets/images/google.png"
              alt="Google"
              className="h-5 w-5"
            />
            <span>Sign up with Google</span>
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center mb-6"
          >
            <div className="border-t border-gray-300 w-full"></div>
            <span className="bg-white px-3 text-gray-500 text-sm absolute">
              OR
            </span>
          </motion.div>

          <form onSubmit={handleSubmit}>
            <motion.div variants={itemVariants} className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[#3855B3] font-bold text-sm hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-blue-600"
                  checked={keepLoggedIn}
                  onChange={(e) => setKeepLoggedIn(e.target.checked)}
                />
                <span className="text-gray-700">Keep me logged in</span>
              </label>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#3b5bdb] text-white py-3 px-7 rounded-[3px] hover:bg-[#364fc7] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LoginPage
