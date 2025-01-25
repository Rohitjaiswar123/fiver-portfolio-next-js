'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools & Platforms', items: ['Git', 'AWS', 'Docker', 'Vercel'] },
  ]

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using modern technologies.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client projects using React and Node.js.'
    }
  ]

  return (
    <section ref={sectionRef} id="about" className="relative py-20 overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-800 to-emerald-800/40">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]
                      bg-gradient-to-br from-zinc-300/5 via-emerald-400/5 to-transparent
                      transform rotate-45 translate-x-[-50%] translate-y-[-50%]
                      motion-safe:animate-spotlight pointer-events-none"
          style={{
            backgroundSize: '200% 200%',
            mixBlendMode: 'soft-light'
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg transform rotate-6 scale-105 opacity-20"></div>
              <Image
                src="/projects/about1.webp"
                alt="Rohit Jaiswar"
                width={500}
                height={500}
                className="rounded-lg relative z-10"
                priority

                loading="eager"
                quality={100}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ 
              duration: 14.8,
              delay: 0.4,
              type: "spring", 
              bounce: 0.3,
              damping: 20
            }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Hi, I'm Rohit Jaiswar
            </h3>
            <p className="text-gray-100 leading-relaxed">
              A passionate Full Stack Developer with over 5 years of experience in building 
              digital solutions. I specialize in creating responsive and scalable web applications 
              using modern technologies. My approach combines technical expertise with creative 
              problem-solving to deliver exceptional user experiences.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Technical Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skills.map((skillGroup) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <h5 className="font-medium text-emerald-400">{skillGroup.category}</h5>
                    <ul className="space-y-1">
                      {skillGroup.items.map((item) => (
                        <li key={item} className="text-gray-100">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Experience</h4>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-l-2 border-emerald-500 pl-4"
                  >
                    <h5 className="font-medium text-white">{exp.title}</h5>
                    <p className="text-emerald-400">{exp.company}</p>
                    <p className="text-sm text-gray-300">{exp.period}</p>
                    <p className="text-gray-100 mt-1">{exp.description}</p>
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