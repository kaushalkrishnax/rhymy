import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="py-16 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Logo size="sm" />
              <span className="text-xl font-bold text-black dark:text-white">
                Rhymy
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8 mb-8"
          >
            <a
              href="#"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy
            </a>
            <motion.a
              href="#"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-zinc-500 dark:text-zinc-500"
          >
            © 2024 Rhymy. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
