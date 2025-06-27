"use client";
import React from "react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  return (
    <section className="py-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 font-[Playfair+Display] tracking-tight">
              About Rhymy
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-[Inter] font-light">
              Rhymy is a haven for wordsmiths. Crafted for those who cherish
              authentic expression, we offer a sanctuary for poets,
              storytellers, and dreamers to share their craft.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-[Inter] font-light">
              Free from algorithms dictating visibility or limits stifling your
              voice, Rhymy fosters genuine connections between writers and their
              readers.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-[Inter] font-light">
              Rediscover social media, reimagined for the literary soul.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <svg className="w-96 h-96" viewBox="0 0 200 200" fill="none">
              {/* Typewriter base */}
              <motion.rect
                x="20"
                y="120"
                width="160"
                height="60"
                rx="6"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-900 dark:text-white"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Keys */}
              <motion.circle
                cx="50"
                cy="140"
                r="5"
                className="fill-gray-900 dark:fill-white"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
              />
              <motion.circle
                cx="70"
                cy="140"
                r="5"
                className="fill-gray-900 dark:fill-white"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
              />
              <motion.circle
                cx="90"
                cy="140"
                r="5"
                className="fill-gray-900 dark:fill-white"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
              />

              {/* Paper */}
              <motion.rect
                x="60"
                y="60"
                width="80"
                height="100"
                rx="3"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-900 dark:text-white"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 60, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              />

              {/* Text lines */}
              <motion.line
                x1="70"
                y1="80"
                x2="130"
                y2="80"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-500 dark:text-gray-400"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }}
              />
              <motion.line
                x1="70"
                y1="90"
                x2="120"
                y2="90"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-500 dark:text-gray-400"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1.7 }}
              />
              <motion.line
                x1="70"
                y1="100"
                x2="125"
                y2="100"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-500 dark:text-gray-400"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1.9 }}
              />

              {/* Subtle shadow for depth */}
              <motion.rect
                x="20"
                y="120"
                width="160"
                height="60"
                rx="6"
                fill="url(#shadow)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <defs>
                <linearGradient id="shadow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="gray" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="gray" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
