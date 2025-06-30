"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if screen is small (568px or less)
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth > 568);
    };

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Initial check
    checkScreenSize();

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", checkScreenSize);
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
      backgroundColor: "rgba(17, 24, 39, 0.7)",
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
    // Enhanced selector to catch all interactive elements including about page elements
    const textElements = document.querySelectorAll(`
      a, 
      button, 
      h1, h2, h3, h4, h5, 
      p, 
      span, 
      .skill-item,
      .experience-item,
      [role="button"],
      input,
      textarea,
      .interactive-element,
      nav a,
      .nav-link,
      .dropdown-item,
      .mobile-menu a,
      .about-content *,
      .skills-section *,
      .experience-section *
    `);
    
    const mouseEnter = () => setCursorVariant("text");
    const mouseLeave = () => setCursorVariant("default");

    textElements.forEach(element => {
      element.addEventListener("mouseenter", mouseEnter);
      element.addEventListener("mouseleave", mouseLeave);
    });

    // Mutation Observer to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              if (node.matches('a, button, h1, h2, h3, h4, h5, p, span, .skill-item, .experience-item, [role="button"], input, textarea, .interactive-element, nav a, .nav-link, .dropdown-item, .mobile-menu a, .about-content *, .skills-section *, .experience-section *')) {
                node.addEventListener("mouseenter", mouseEnter);
                node.addEventListener("mouseleave", mouseLeave);
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      textElements.forEach(element => {
        element.removeEventListener("mouseenter", mouseEnter);
        element.removeEventListener("mouseleave", mouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  // Don't render cursor on small screens
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference animated-cursor"
        style={{
          background: 'linear-gradient(45deg, #00ff87, #60efff)',
          boxShadow: '0 0 20px rgba(96, 239, 255, 0.3)',
        }}
        variants={variants}
        animate={cursorVariant}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] animated-cursor"
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
