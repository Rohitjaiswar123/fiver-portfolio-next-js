'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [time, setTime] = useState('')
  const [temperature, setTemperature] = useState<number | null>(null)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)



    // Time update
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' , second: '2-digit' }))
    }, 1000)

    // Temperature fetch
    const fetchTemperature = async () => {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=19.0760&lon=72.8777&appid=${process.env.WEATHER_API_KEY}&units=metric`)
        const data = await res.json()
        setTemperature(data.main.temp)
      } catch (error) {
        console.log('Weather fetch error:', error)
      }
    }    
    fetchTemperature()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <motion.div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white font-bold text-xl">
              RJ
            </div>
          </motion.div>

          {/* Centered Time and Temperature */}
          {isClient && (
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 text-base  sm:text-lg rounded-lg border border-gray-700  text-white"
              >
                {time}
              </motion.div>
              {temperature && (
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 text-base sm:text-lg rounded-lg border border-gray-700 text-white  whitespace-nowrap"
                >
                  {Math.round(temperature)}°C Mumbai
                </motion.div>
              )}
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center text-xl space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link text-white hover:text-gray-900 relative group z-50 transition-colors duration-300"
                >
                  <span className="relative z-50 mix-blend-normal">{item.name}</span>
                  <span className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/90 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}