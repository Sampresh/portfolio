"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = [
    "Python",
    "Web Development",
    "Content Creation",
    "Travel Operations",
    "Client Services",
    "Problem Solving",
    "Team Collaboration",
    "Continuous Learning"
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with modern features including product catalog, shopping cart, user authentication, and payment integration.",
      image: "/images/projects/ecommerce.jpg",
      link: "/projects/ecommerce",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing daily tasks with features like task categorization, priority setting, and progress tracking.",
      image: "/images/projects/task-manager.jpg",
      link: "/projects/task-manager",
      tags: ["Next.js", "TypeScript", "Firebase"]
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media platforms, featuring real-time metrics, content scheduling, and engagement tracking.",
      image: "/images/projects/social-dashboard.jpg",
      link: "/projects/social-dashboard",
      tags: ["React", "Python", "PostgreSQL", "Chart.js"]
    },
    {
      id: 4,
      title: "Fitness Tracker App",
      description: "A mobile-first fitness application that helps users track workouts, set goals, and monitor progress with detailed analytics and personalized recommendations.",
      image: "/images/projects/fitness-tracker.jpg",
      link: "/projects/fitness-tracker",
      tags: ["React Native", "Firebase", "Redux", "Expo"]
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      description: "A comprehensive guide to Next.js, covering its core features, routing system, and best practices for building modern web applications.",
      image: "/images/blogs/nextjs.jpg",
      link: "/blogs/nextjs-intro",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Modern Web Development",
      description: "Exploring the latest trends in web development, including serverless architecture, microservices, and progressive web apps.",
      image: "/images/blogs/web-dev.jpg",
      link: "/blogs/modern-web",
      date: "March 10, 2024"
    },
    {
      id: 3,
      title: "Building Scalable APIs",
      description: "Learn how to design and implement RESTful APIs that can handle millions of requests while maintaining performance and security.",
      image: "/images/blogs/api-design.jpg",
      link: "/blogs/scalable-apis",
      date: "March 5, 2024"
    },
    {
      id: 4,
      title: "State Management in React",
      description: "A deep dive into different state management solutions in React, comparing Redux, Context API, and newer alternatives like Zustand.",
      image: "/images/blogs/state-management.jpg",
      link: "/blogs/react-state",
      date: "March 1, 2024"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div 
          className="w-40 h-40 md:w-60 md:h-60 relative rounded-full overflow-hidden bg-gray-200 shadow-lg flex-shrink-0"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src="/images/myphoto.jpg"
            alt="Sampresh Karki"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Sampresh Karki</h1>
          <p className="description-text text-lg mb-6">
            I'm a Computer Systems Engineering graduate passionate about technology, creativity, and problem-solving. I blend technical skills with real-world experience in content creation, travel operations, and web development. Driven by curiosity and ambition, I'm always building, learning, and pushing boundaries to create meaningful impact.
          </p>
          <a
            href="/cv/Sampresh_Karki_CV.pdf"
            download="Sampresh_Karki_CV.pdf"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src="/images/myphoto.jpg"
                alt="Sampresh Karki"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 card glass-effect hover:scale-105 transition-all duration-200"
            >
              <p className="text-center font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6">Connect With Me</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/sampresh-karki-a86409256/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 card hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/Sampresh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 card hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.youtube.com/@sampres10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 card hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </a>
          <a
            href="https://www.instagram.com/sampres10/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 card hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
      </section>

      {/* Projects Preview */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-primary hover:text-primary/90 transition-colors duration-200">
            View All Projects
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="card hover:scale-105 transition-transform duration-200 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="description-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blogs Preview */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Latest Blogs</h2>
          <Link href="/blogs" className="text-primary hover:text-primary/90 transition-colors duration-200">
            View All Blogs
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={blog.link}
              className="card hover:scale-105 transition-transform duration-200 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="description-text mb-4">{blog.description}</p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {blog.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:sampresh.karki@gmail.com" className="hover:text-primary transition-colors">
                sampresh.karki@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+9779769404538" className="hover:text-primary transition-colors">
                +977 9769404538
              </a>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Kathmandu, Nepal</span>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Available: Sunday to Friday</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 