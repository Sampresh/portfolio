import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import MobileNav from "../components/MobileNav";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sampresh Karki - Portfolio",
  description: "Welcome to my personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen">
        <ThemeProvider>
          <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="text-xl font-bold text-primary hover:text-primary/90 transition-colors duration-200">
                      Sampresh Karki
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                    <Link href="/projects" className="nav-link">
                      Projects
                    </Link>
                    <Link href="/blogs" className="nav-link">
                      Blogs
                    </Link>
                    <Link href="/contact" className="nav-link">
                      Contact
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MobileNav />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <footer className="bg-gray-100 dark:bg-gray-800 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <p className="text-center text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Sampresh Karki. All rights reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
} 