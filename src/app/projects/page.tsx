import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring product listings, shopping cart, and secure checkout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "/images/ecommerce.jpg",
    link: "/projects/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for managing daily tasks, with features like task categorization, due dates, and progress tracking.",
    technologies: ["React", "Firebase", "Material UI"],
    image: "/images/task-manager.jpg",
    link: "/projects/task-manager",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A real-time weather application that provides detailed forecasts and weather alerts for locations worldwide.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    image: "/images/weather.jpg",
    link: "/projects/weather",
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">My Projects</h1>
      <p className="text-lg text-gray-600">
        Here are some of the projects I've worked on. Each project represents a
        unique challenge and learning opportunity.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="card group hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-200" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 