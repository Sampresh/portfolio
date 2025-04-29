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
  // Initialize theme state with 'dark' as default
  const [theme, setTheme] = useState<Theme>('dark');

  /**
   * Effect to load saved theme preference from localStorage
   * Runs only once when component mounts
   */
  useEffect(() => {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    // If there's a saved theme and it's different from current theme
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
      // Toggle dark class on document root based on saved theme
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  /**
   * Function to toggle between light and dark themes
   * Updates state, localStorage, and document class
   */
  const toggleTheme = () => {
    // Determine new theme based on current theme
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Update theme state
    setTheme(newTheme);
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Toggle dark class on document root
    document.documentElement.classList.toggle('dark');
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