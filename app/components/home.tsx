'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from './navbar';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-emerald-800/40 to-green-500 animate-gradient-x opacity-80" />
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px]" />
      <Navbar />

      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[85vh] px-4 gap-12 max-w-7xl mx-auto pt-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-64 h-64 md:w-96 md:h-96 relative mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full -z-10 blur-2xl opacity-20" />
          <Image
            src="/projects/home.jpg"
            alt="Rohit Jaiswar"
            width={384}
            height={384}
            className="rounded-full object-cover border-4 border-white/10"
            priority
          />
        </motion.div>

        <div className="md:ml-12 text-center md:text-left max-w-xl mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Rohit Jaiswar
            </h2>
            <h3 className="text-xl md:text-2xl text-emerald-400 font-semibold">
              Full Stack Developer
            </h3>
            <p className="text-lg text-gray-100">
              Passionate developer with expertise in building scalable web applications. 
              Specializing in React, Node.js, and cloud solutions. Let's transform your 
              ideas into exceptional digital experiences.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap justify-center md:justify-start"
            >
              <a 
                href="#projects" 
                className="px-8 py-3 bg-white text-black rounded-full 
                         hover:scale-105 transition-transform inline-block
                         hover:bg-opacity-90"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-white text-white rounded-full 
                         hover:scale-105 transition-transform inline-block
                         hover:bg-white/10"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center md:justify-start gap-4"
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', "Java ", "SQL" ,"Python"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm
                         text-white hover:bg-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
