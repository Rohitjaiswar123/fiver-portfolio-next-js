'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/yourprofile'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/yourprofile'
    },
    {
      name: 'Upwork',
      icon: <SiUpwork className="w-6 h-6" />,
      url: 'https://upwork.com/yourprofile'
    },
    {
        name: 'GitLab',
        icon: <FaGitlab className="w-6 h-6" />,
        url: 'https://gitlab.com/yourprofile'
      }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 4.8, type: "spring", bounce: 0.3, damping: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full shadow-glow"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 4.8, delay: 0.2, type: "spring", bounce: 0.3, damping: 20 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-0.5 block w-full rounded-lg bg-gray-700/50 border-gray-600 text-white
                           focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                           shadow-sm transition-all duration-200 hover:bg-gray-700/70
                           py-2"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-0.5 block w-full rounded-lg bg-gray-700/50 border-gray-600 text-white
                           focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                           shadow-sm transition-all duration-200 hover:bg-gray-700/70
                           py-2"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-0.5 block w-full rounded-lg bg-gray-700/50 border-gray-600 text-white
                           focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                           shadow-sm transition-all duration-200 hover:bg-gray-700/70
                           py-2"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 px-6 mt-6 bg-emerald-500 text-white rounded-lg font-medium
                         hover:bg-emerald-600 transition-all duration-200
                         shadow-lg hover:shadow-emerald-500/50"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 4.8, delay: 0.4, type: "spring", bounce: 0.3, damping: 20 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 4.8, delay: 0.6, type: "spring", bounce: 0.3, damping: 20 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center p-4 rounded-lg 
                             bg-gray-700/30 hover:bg-gray-700/50 
                             border border-gray-600 transition-all duration-200"
                  >
                    <span className="text-emerald-400">{social.icon}</span>
                    <span className="ml-2 text-gray-300">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 4.8, delay: 0.8, type: "spring", bounce: 0.3, damping: 20 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p>Email: rohit.s.jaiswar@gmail.com</p>
                <p>Location: Mumbai, India</p>
                <p>Available for: Freelance, Full-time opportunities</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}