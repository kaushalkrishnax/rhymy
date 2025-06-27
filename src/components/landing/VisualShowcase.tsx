"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";

const poemLines = [
  "The sun rises slowly over the city,",
  "painting shadows on my coffee cup.",
  "Another day begins with quiet promises",
  "whispered to the morning light.",
];

export function VisualShowcase() {
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let currentText = "";

    const type = () => {
      if (currentLine < poemLines.length) {
        if (currentChar <= poemLines[currentLine].length) {
          currentText =
            poemLines.slice(0, currentLine).join("\n") +
            "\n" +
            poemLines[currentLine].slice(0, currentChar);
          setTypingText(currentText);
          currentChar++;
          setTimeout(type, 50);
        } else {
          currentLine++;
          currentChar = 0;
          setTimeout(type, 200);
        }
      }
    };

    type();
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const actionVariants: any = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <section id="showcase" className="py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 font-[Playfair+Display] tracking-tight">
            Your Words, Beautifully Presented
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-[Inter] font-light">
            Experience Rhymy&apos;s minimalist interface, where your writing
            shines in a distraction-free sanctuary.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative"
        >
          <motion.div
            className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-10 rounded-xl"
            transition={{ duration: 0.3 }}
          />
          <div className="group bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 relative">
            {/* Subtle paper texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect x=%220%22 y=%220%22 width=%2260%22 height=%2260%22 fill=%22none%22/%3E%3Cg opacity=%220.05%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%221%22 fill=%22%23999%22/%3E%3Ccircle cx=%2215%22 cy=%2215%22 r=%221.5%22 fill=%22%23999%22/%3E%3Ccircle cx=%2245%22 cy=%2245%22 r=%221%22 fill=%22%23999%22/%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect x=%220%22 y=%220%22 width=%2260%22 height=%2260%22 fill=%22none%22/%3E%3Cg opacity=%220.05%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%221%22 fill=%22%23666%22/%3E%3Ccircle cx=%2215%22 cy=%2215%22 r=%221.5%22 fill=%22%23666%22/%3E%3Ccircle cx=%2245%22 cy=%2245%22 r=%221%22 fill=%22%23666%22/%3E%3C/g%3E%3C/svg%3E')]"></div>

            {/* Post Header */}
            <div className="flex items-center space-x-4 mb-8">
              <motion.div
                className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="text-lg font-semibold text-black dark:text-white">
                  M
                </span>
              </motion.div>
              <div>
                <div className="font-semibold text-base text-black dark:text-white font-[Inter]">
                  @maya_writes
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-[Inter] font-light">
                  2 hours ago
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 font-[Playfair+Display]">
                Morning Reflections
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["#poetry", "#morning", "#reflections"].map((tag, index) => (
                  <motion.span
                    key={index}
                    className="text-xs bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full font-[Inter] font-light"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.div
                className="text-gray-700 dark:text-gray-200 leading-relaxed space-y-4 font-[Inter] font-light text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <pre className="whitespace-pre-wrap font-[Inter]">
                  {typingText}
                </pre>
              </motion.div>
            </div>

            {/* Post Actions */}
            <div className="flex items-center space-x-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <motion.div
                className="flex items-center space-x-2 text-gray-500 hover:text-red-500 cursor-pointer transition-colors"
                variants={actionVariants}
                initial="rest"
                whileHover="hover"
              >
                <Heart className="w-6 h-6" />
                <span className="text-sm font-[Inter]">42</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors"
                variants={actionVariants}
                initial="rest"
                whileHover="hover"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-sm font-[Inter]">8</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-gray-500 hover:text-green-500 cursor-pointer transition-colors"
                variants={actionVariants}
                initial="rest"
                whileHover="hover"
              >
                <Bookmark className="w-6 h-6" />
                <span className="text-sm font-[Inter]">Save</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-gray-500 hover:text-purple-500 cursor-pointer transition-colors"
                variants={actionVariants}
                initial="rest"
                whileHover="hover"
              >
                <Share2 className="w-6 h-6" />
                <span className="text-sm font-[Inter]">Share</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
