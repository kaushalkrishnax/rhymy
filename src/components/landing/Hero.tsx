import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.svg
          className="absolute top-10 left-5 w-72 h-72 opacity-10 dark:opacity-5"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M10,50 Q30,10 50,50 Q70,90 90,50"
            stroke="currentColor"
            strokeWidth="0.3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
        <motion.svg
          className="absolute bottom-10 right-5 w-56 h-56 opacity-10 dark:opacity-5"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M20,80 Q40,20 60,50 Q80,80 90,30"
            stroke="currentColor"
            strokeWidth="0.3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1.5,
            }}
          />
        </motion.svg>
      </div>

      <div className="text-center z-10 max-w-5xl mx-auto px-6">
        <motion.div variants={itemVariants} className="my-10">
          <Logo size="xl" animated={true} />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 font-[Playfair+Display] leading-tight tracking-tight"
        >
          Write. Share. Inspire.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-[Inter] font-light"
        >
          A sanctuary for your thoughts, poems, and stories. Connect with a
          community that cherishes your unique voice.
        </motion.p>

        <motion.button
          variants={itemVariants}
          className="relative px-12 py-4 text-lg font-semibold font-[Inter] text-white bg-gray-900 dark:bg-white dark:text-gray-900 border-2 border-gray-900 dark:border-white rounded-full overflow-hidden group hover:bg-transparent hover:text-gray-900 dark:hover:bg-transparent dark:hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Begin Your Journey</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-200 dark:to-gray-700 opacity-0 group-hover:opacity-30"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      </div>
    </motion.section>
  );
}
