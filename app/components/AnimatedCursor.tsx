"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.6,
        stiffness: 100,
        damping: 15
      }
    },
    text: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 2,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6,
        stiffness: 100,
        damping: 15
      }
    }
  };

  useEffect(() => {
    const textElements = document.querySelectorAll("a, button, h1, h2, h3, p, span");
    
    const mouseEnter = () => setCursorVariant("text");
    const mouseLeave = () => setCursorVariant("default");

    textElements.forEach(element => {
      element.addEventListener("mouseenter", mouseEnter);
      element.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      textElements.forEach(element => {
        element.removeEventListener("mouseenter", mouseEnter);
        element.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          background: 'linear-gradient(45deg, #00ff87, #60efff)',
          boxShadow: '0 0 20px rgba(96, 239, 255, 0.3)',
        }}
        variants={variants}
        animate={cursorVariant}
      />
      
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50"
        style={{
          background: 'linear-gradient(45deg, #60efff, #00ff87)',
          boxShadow: '0 0 10px rgba(96, 239, 255, 0.5)',
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorVariant === "text" ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 200,
          damping: 10
        }}
      />
    </>
  );
}
