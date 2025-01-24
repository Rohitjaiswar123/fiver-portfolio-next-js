'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>('all')

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory management.',
      image: '/projects/ecommerce.jpg',
      tech: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/example/project'
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered response suggestions.',
      image: '/projects/chat.jpg',
      tech: ['Python', 'AWS', 'TensorFlow', 'MongoDB'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/example/project'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with dark theme and smooth animations.',
      image: '/projects/portfolio.jpg',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Java'],
      demo: 'https://demo.example.com',
      github: 'https://github.com/example/project'
    }
  ]
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.tech))
  )

  const filteredProjects = selectedTech === 'all'
    ? projects
    : projects.filter(project => project.tech.includes(selectedTech))

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-r from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedTech('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedTech === 'all'
                ? 'bg-emerald-500 text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            All
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedTech === tech
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
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
                      className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full"
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
                    className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
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
