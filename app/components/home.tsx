"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import AnimatedCursor from "./AnimatedCursor";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#0B1120] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#1E293B] to-[#334155] opacity-80" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#60A5FA]/20 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#818CF8]/20 rounded-full blur-[128px]"
        />
      </div>
      <AnimatedCursor />

      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-6 gap-12 max-w-7xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-72 h-72 md:w-[28rem] md:h-[28rem] relative mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full -z-10 blur-3xl opacity-30" />
          <Image
            src="/projects/home.jpg"
            alt="Rohit Jaiswar"
            width={448}
            height={448}
            className="rounded-full object-cover border-4 border-white/20 shadow-lg"
            priority
          />
        </motion.div>

        <div className="md:ml-16 text-center md:text-left max-w-xl mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Hi, I'm <span className="text-emerald-400">Rohit Jaiswar</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-emerald-300 font-semibold">
              Full Stack Developer & Creative Technologist
            </h3>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              I specialize in building scalable, user-focused web applications
              using modern technologies like React, Node.js, and cloud solutions.
              Let's work together to transform your vision into reality.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 flex-wrap justify-center md:justify-start mt-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 text-lg font-semibold bg-emerald-500 text-black rounded-full shadow-lg 
                           hover:scale-105 transition-transform hover:bg-emerald-600"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-lg font-semibold border-2 border-white text-white rounded-full 
                           hover:scale-105 transition-transform hover:bg-white/10"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center md:justify-start gap-4"
          >
            {["React", "Next.js", "TypeScript", "Node.js", "AWS", "Java", "SQL", "Python"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white 
                             text-sm md:text-base font-medium hover:bg-white/20 transition-colors"
                >
                  {skill}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

    </main>
  );
}