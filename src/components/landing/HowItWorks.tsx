"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Send, DollarSign } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: PenTool,
    title: "Write",
    description:
      "Craft your stories, poems, and thoughts in our distraction-free editor, designed to spark creativity.",
  },
  {
    number: 2,
    icon: Send,
    title: "Publish",
    description:
      "Share your work instantly with a global audience eager to embrace authentic storytelling.",
  },
  {
    number: 3,
    icon: DollarSign,
    title: "Earn",
    description:
      "Grow your readership and monetize your passion with our transparent revenue model.",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const stepVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants: any = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotate: 10, transition: { duration: 0.3 } },
    active: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: { duration: 1, repeat: Infinity },
    },
  };

  return (
    <section id="how-it-works" className="py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 font-[Playfair+Display] tracking-tight">
            Your Creative Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-[Inter] font-light">
            Three seamless steps to transform your ideas into stories that
            inspire the world.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated SVG Timeline */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M100,150 Q500,50 900,150"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-300 dark:text-gray-700"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            {steps.map((_, index) => (
              <motion.circle
                key={index}
                cx={100 + index * 400}
                cy="150"
                r="8"
                fill="currentColor"
                className="text-black dark:text-white"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: activeStep === index ? 1.3 : 1,
                  opacity: 1,
                }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                viewport={{ once: true }}
              />
            ))}
          </svg>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="text-center group relative p-6 hover:bg-gray-50 dark:hover:bg-gray-950 rounded-lg transition-all duration-300"
                onMouseEnter={() => setActiveStep(index)}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-full text-2xl font-bold mb-6 font-[Inter]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {step.number}
                </motion.div>

                <motion.div
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                  animate={activeStep === index ? "active" : "rest"}
                  className="mb-6 p-6 rounded-full bg-black/30 w-fit mx-auto"
                >
                  <step.icon className="w-12 h-12 mx-auto text-black dark:text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-4 font-[Playfair+Display]">
                  {step.title}
                </h3>
                <motion.p
                  className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-[Inter] font-light max-w-xs mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.6 }}
                >
                  {step.description}
                </motion.p>
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
      </div>
    </section>
  );
}
