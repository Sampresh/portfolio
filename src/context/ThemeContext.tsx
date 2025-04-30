'use client';

import { createContext, useContext, useState, useEffect } from 'react';

/**
 * Theme type definition
 * Can be either 'light' or 'dark'
 */
type Theme = 'light' | 'dark';

/**
 * ThemeContext type definition
 * Contains the current theme and a function to toggle between themes
 */
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

/**
 * Create a new context for theme management
 * Default value is undefined as it will be provided by ThemeProvider
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider Component
 * Wraps the application to provide theme context to all child components
 * 
 * @param children - React nodes that will have access to the theme context
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme state with saved theme or default to 'dark'
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  /**
   * Effect to sync theme with document class
   * Runs when theme changes
   */
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  /**
   * Function to toggle between light and dark themes
   * Updates state, localStorage, and document class
   */
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Provide theme context to all children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to use theme context
 * Provides type safety and error handling
 * 
 * @returns Theme context with current theme and toggle function
 * @throws Error if used outside of ThemeProvider
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 