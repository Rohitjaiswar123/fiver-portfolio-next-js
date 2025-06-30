'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { FaReact, FaNodeJs,  FaAws, FaDocker } from 'react-icons/fa'
import { SiTailwindcss, SiPostgresql, SiMongodb } from 'react-icons/si'

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const skills = [
    { icon: <FaReact size={20} className="text-emerald-500" />, name: 'React', level: 90 },
    { icon: <FaNodeJs size={20} className="text-green-500" />, name: 'Node.js', level: 85 },
    { icon: <SiTailwindcss size={20} className="text-blue-500" />, name: 'Tailwind CSS', level: 80 },
    { icon: <SiMongodb size={20} className="text-green-500" />, name: 'MongoDB', level: 70 },
    { icon: <SiPostgresql size={20} className="text-blue-500" />, name: 'PostgreSQL', level: 75 },
    { icon: <FaAws size={20} className="text-yellow-500" />, name: 'AWS', level: 60 },
    { icon: <FaDocker size={20} className="text-blue-400" />, name: 'Docker', level: 65 },
  ]

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using modern technologies.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client projects using React and Node.js.',
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="relative py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-emerald-800/40 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-zinc-300/10 via-emerald-500/10 to-transparent transform rotate-45 motion-safe:animate-pulse opacity-20 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-gray-300 mt-4">Get to know me and my expertise better</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg transform rotate-6 scale-105 opacity-20"></div>
              <Image
                src="/projects/about1.webp"
                alt="Rohit Jaiswar"
                width={500}
                height={500}
                className="rounded-lg shadow-lg relative z-10"
                priority
                loading="eager"
                quality={100}
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="space-y-6 about-content"
          >
            {/* <h3 className="text-2xl font-semibold text-white">Hi, I'm Rohit Jaiswar</h3> */}
            <p className="text-gray-300 text-lg leading-relaxed">
              A passionate Full Stack Developer with over 6 months of experience in building digital solutions. I specialize in creating responsive and scalable web applications using modern technologies. My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.
            </p>

            {/* Skills Section */}
            <div className="space-y-4 skills-section">
              <h4 className="text-xl font-semibold text-white">Technical Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-4 skill-item">
                    {skill.icon}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-gray-100">{skill.name}</span>
                        {/* <span className="text-gray-300">{skill.level}%</span> */}
                      </div>
                      <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-4 experience-section">
              <h4 className="text-xl font-semibold text-white">Experience</h4>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-l-2 border-emerald-500 pl-4 experience-item"
                  >
                    <h5 className="font-medium text-white">{exp.title}</h5>
                    <p className="text-emerald-400">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                    <p className="text-gray-300 mt-1">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
