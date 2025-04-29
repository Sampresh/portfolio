'use client';

// Import required dependencies
import { useState } from 'react';                    // React state management
import Link from 'next/link';                        // Next.js link component
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';  // Menu icons

/**
 * MobileNav Component
 * A responsive navigation menu for mobile devices
 * 
 * Features:
 * - Hamburger menu that transforms into X when open
 * - Dropdown menu with navigation links
 * - Smooth transitions and hover effects
 * - Responsive design with different sizes for mobile/desktop
 * - Auto-closes when a link is clicked
 */
export default function MobileNav() {
  // State to track if mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggle mobile menu open/closed
   * Called when hamburger/X icon is clicked
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Main container with relative positioning and high z-index
    <div className="relative z-50">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {/* Conditional rendering of menu icons */}
        {isOpen ? (
          // X icon shown when menu is open
          <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200" />
        ) : (
          // Hamburger icon shown when menu is closed
          <Bars3Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200" />
        )}
      </button>

      {/* Mobile Menu Dropdown - Only shown when isOpen is true */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2">
          {/* Home Link */}
          <Link
            href="/"
            className="block px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}  // Close menu when link is clicked
          >
            Home
          </Link>

          {/* Projects Link */}
          <Link
            href="/projects"
            className="block px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          {/* Blogs Link */}
          <Link
            href="/blogs"
            className="block px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>

          {/* Contact Link */}
          <Link
            href="/contact"
            className="block px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
} 