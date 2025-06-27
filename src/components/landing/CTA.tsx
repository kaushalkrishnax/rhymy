"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CTA() {
  const [typingText, setTypingText] = useState("");
  const subtitle =
    "Join our community of writers and readers who believe in the power of authentic expression.";

  useEffect(() => {
    let currentChar = 0;
    const type = () => {
      if (currentChar <= subtitle.length) {
        setTypingText(subtitle.slice(0, currentChar));
        currentChar++;
        setTimeout(type, 30);
      }
    };
    type();
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const buttonVariants: any = {
    rest: { scale: 1, boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px 2px rgba(255, 255, 255, 0.3)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="cta"
      className="py-32 bg-zinc-950 dark:bg-zinc-200 relative overflow-hidden"
    >
      {/* Subtle SVG Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <circle
            cx="10"
            cy="10"
            r="2"
            fill="currentColor"
            className="text-gray-300 dark:text-gray-700"
          />
          <circle
            cx="90"
            cy="90"
            r="2"
            fill="currentColor"
            className="text-gray-300 dark:text-gray-700"
          />
          <circle
            cx="50"
            cy="50"
            r="3"
            fill="currentColor"
            className="text-gray-300 dark:text-gray-700"
          />
        </motion.g>
      </svg>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-black mb-8 font-[Playfair+Display] tracking-tight">
            Begin Your Writing Odyssey
          </h2>
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-700 mb-12 max-w-3xl mx-auto font-[Inter] font-light">
            {typingText}
            <span className="animate-pulse">|</span>
          </p>

          <motion.button
            className="relative px-12 py-4 text-lg font-semibold font-[Inter] text-black dark:text-white bg-white dark:bg-black rounded-full border-2 border-white dark:border-black overflow-hidden group"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10">Join Now</span>
            <motion.div
              className="absolute inset-0 bg-gray-200 dark:bg-gray-800 opacity-0 group-hover:opacity-30"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-transparent group-hover:border-white dark:group-hover:border-black"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
