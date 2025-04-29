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
    <html lang="en" className={`${poppins.className} dark`}>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <ThemeProvider>
          <nav className="glass sticky top-0 z-50">
            <div className="w-full px-3 sm:px-5 md:px-7 lg:px-10">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link 
                      href="/" 
                      className="text-lg sm:text-xl relative group inline-block"
                    >
                      <div className="relative">
                        <span className="relative z-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                          Sampresh
                        </span>
                        <span className="relative z-10 ml-2 font-light bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
                          Karki
                        </span>
                      </div>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  </div>
                  <div className="hidden lg:ml-6 lg:flex lg:space-x-4 xl:space-x-8">
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
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <ThemeToggle />
                  <MobileNav />
                </div>
              </div>
            </div>
          </nav>
          <main className="w-full px-3 sm:px-5 md:px-7 lg:px-10 py-5 sm:py-7 md:py-9">
            {children}
          </main>
          <footer className="glass mt-5 sm:mt-7 md:mt-9">
            <div className="w-full px-3 sm:px-5 md:px-7 lg:px-10 py-5 sm:py-7">
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