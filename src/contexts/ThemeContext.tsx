'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  themeTransition: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [themeTransition, setThemeTransition] = useState(false);

  // Initialize theme based on system preference or saved setting
  useEffect(() => {
    const savedTheme = localStorage.getItem('rhymy-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(systemPrefersDark);
    }
  }, []);

  // Apply theme and handle transitions
  useEffect(() => {
    // Add smooth transition for theme changes
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    // Toggle dark class
    document.documentElement.classList.toggle('dark', isDark);
    
    // Save theme to localStorage
    try {
      localStorage.setItem('rhymy-theme', isDark ? 'dark' : 'light');
    } catch (error) {
      console.error('Failed to save theme to localStorage:', error);
    }

    // Trigger transition animation
    setThemeTransition(true);
    const timeout = setTimeout(() => setThemeTransition(false), 300);

    return () => {
      clearTimeout(timeout);
      document.documentElement.style.transition = '';
    };
  }, [isDark]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only update if no user preference is saved
      const savedTheme = localStorage.getItem('rhymy-theme');
      if (!savedTheme) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, themeTransition }}>
      {children}
    </ThemeContext.Provider>
  );
};