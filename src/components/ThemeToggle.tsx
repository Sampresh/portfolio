'use client';

// Import required dependencies
import { useTheme } from '@/context/ThemeContext';  // Theme context hook
import { Moon, Sun } from 'lucide-react';          // Icons for theme toggle
import { memo } from 'react';                      // React memo for performance

/**
 * ThemeToggle Component
 * A button component that toggles between light and dark themes
 * Uses memo to prevent unnecessary re-renders
 * 
 * Features:
 * - Shows sun icon in dark mode
 * - Shows moon icon in light mode
 * - Changes background color based on theme
 * - Smooth transition effects
 */
const ThemeToggle = memo(() => {
  // Get theme state and toggle function from context
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}  // Call toggleTheme when clicked
      className="relative z-40 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle theme"  // Accessibility label
    >
      {/* Conditional rendering of theme icons */}
      {theme === 'dark' ? (
        // Sun icon for dark mode (click to switch to light)
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        // Moon icon for light mode (click to switch to dark)
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
});

// Set display name for debugging purposes
ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle; 