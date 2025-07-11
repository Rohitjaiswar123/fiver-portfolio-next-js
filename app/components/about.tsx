'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa'
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
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-400"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.373 3.438 9.938 8.188 11.625.6.113.813-.263.813-.588 0-.288-.013-1.25-.013-2.275-3.338.725-4.038-1.613-4.038-1.613-.55-1.4-1.338-1.775-1.338-1.775-1.088-.75.088-.738.088-.738 1.2.088 1.838 1.238 1.838 1.238 1.075 1.838 2.825 1.3 3.513.988.113-.775.425-1.3.775-1.6-2.663-.3-5.463-1.338-5.463-5.963 0-1.313.475-2.388 1.238-3.238-.125-.3-.538-1.513.113-3.163 0 0 1.013-.325 3.313 1.238.963-.263 2-.388 3.038-.388 1.038 0 2.075.125 3.038.388 2.3-1.563 3.313-1.238 3.313-1.238.65 1.65.238 2.863.113 3.163.763.85 1.238 1.925 1.238 3.238 0 4.638-2.8 5.663-5.463 5.963.438.375.825 1.125.825 2.275 0 1.65-.013 2.975-.013 3.375 0 .325.213.7.825.588C20.563 21.938 24 17.373 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      name: 'Next.js',
      level: 85,
    },
  ]

  const experiences = [
    // {
    //   title: 'Senior Full Stack Developer',
    //   company: 'Tech Company',
    //   period: '2022 - Present',
    //   description: 'Leading development of scalable web applications using modern technologies.',
    // },
    {
      title: 'Full Stack Developer',
      company: 'Career Man Power Service',
      period: '2024 - 2025',
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
              A passionate Full Stack Developer with over 1 year of experience in building digital solutions. I specialize in creating responsive and scalable web applications using modern technologies. My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.
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
