"use client";
import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import Logo from "./Logo";

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#explore", label: "Explore" },
    { href: "#login", label: "Login" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Logo size="sm" />
            <span className="text-xl md:text-2xl font-bold text-black dark:text-white font-[Playfair+Display] tracking-tight">
              Rhymy
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative text-base font-[Inter] font-medium text-black dark:text-white transition-colors group hover:text-gray-600 dark:hover:text-gray-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-6 h-6 text-black dark:text-white"
              initial={{ rotate: 0 }}
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {isDark ? (
                <Sun className="w-full h-full" />
              ) : (
                <Moon className="w-full h-full" />
              )}
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent"
              whileHover={{ borderColor: isDark ? "#ffffff33" : "#00000033" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
