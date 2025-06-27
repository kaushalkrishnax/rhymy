"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Hash,
  DollarSign,
  Bookmark,
  MessageCircle,
  Focus,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Publishing",
    description:
      "Unleash your thoughts instantly with our seamless, real-time publishing system, designed for effortless sharing.",
  },
  {
    icon: Hash,
    title: "Curated Tags",
    description:
      "Discover and organize content effortlessly with our intuitive, smart hashtag system tailored for writers.",
  },
  {
    icon: DollarSign,
    title: "Earn Your Worth",
    description:
      "Monetize your creativity through our transparent revenue-sharing model, rewarding your unique voice.",
  },
  {
    icon: Bookmark,
    title: "Reader Favorites",
    description:
      "Empower readers to save and revisit their favorite works with an elegant bookmarking feature.",
  },
  {
    icon: MessageCircle,
    title: "Deep Discussions",
    description:
      "Spark meaningful conversations with threaded comments, fostering a vibrant community of ideas.",
  },
  {
    icon: Focus,
    title: "Pure Focus",
    description:
      "Write and read in a distraction-free environment, crafted to highlight the beauty of your words.",
  },
];

export function Features() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const iconVariants: any = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
  };

  return (
    <section id="features" className="py-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 font-[Playfair+Display] tracking-tight">
            Crafted for Creators
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-[Inter] font-light">
            A suite of tools designed to amplify your voice and connect you with
            readers who resonate with your work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg dark:hover:shadow-gray-700/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="mb-6"
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <feature.icon className="w-14 h-14 text-black dark:text-white" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4 font-[Playfair+Display]">
                {feature.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-[Inter] font-light">
                {feature.description}
              </p>
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
