"use client";

import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
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
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Blogs</h1>
        <Link href="/" className="text-primary hover:text-primary/90 transition-colors duration-200">
          Back to Home
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
    </div>
  );
} 