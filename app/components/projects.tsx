'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef } from 'react'

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>('all')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/example/project',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered response suggestions.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tech: ['Python', 'AWS', 'TensorFlow', 'MongoDB'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/example/project',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with dark theme and smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', ],
      demo: 'https://demo.example.com',
      github: 'https://github.com/Rohitjaiswar123/fiver-portfolio-next-js',
    },
  ]

  const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.tech)))

  const filteredProjects = selectedTech === 'all'
    ? projects
    : projects.filter((project) => project.tech.includes(selectedTech))

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 bg-gradient-to-r from-black via-gray-900 to-black min-h-screen overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 via-transparent to-transparent blur-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 0.8, 0.7],
        }}
        transition={{ repeat: Infinity, duration: 8 }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400">Showcasing my best work and favorite technologies.</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedTech('all')}
            className={`px-4 py-2 rounded-full transition-transform transform ${
              selectedTech === 'all'
                ? 'bg-emerald-500 text-white shadow-lg scale-105'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            All
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full transition-transform transform ${
                selectedTech === tech
                  ? 'bg-emerald-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                type: 'spring',
                bounce: 0.4,
              }}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform transform hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-emerald-500 to-green-400 text-black rounded-full shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-transform transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-transform transform hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
