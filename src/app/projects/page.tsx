"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
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

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <Link href="/" className="text-primary hover:text-primary/90 transition-colors duration-200">
          Back to Home
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
    </div>
  );
} 