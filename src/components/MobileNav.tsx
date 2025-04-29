'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2 z-50">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
} 