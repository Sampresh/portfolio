import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "A comprehensive guide to understanding Next.js fundamentals and building your first application.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    link: "/blogs/nextjs-intro",
  },
  {
    id: 2,
    title: "Modern Web Development",
    description:
      "Exploring the latest trends and best practices in modern web development.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Technology",
    link: "/blogs/modern-web",
  },
  {
    id: 3,
    title: "Building Responsive UIs",
    description:
      "Learn how to create beautiful and responsive user interfaces that work across all devices.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "UI/UX",
    link: "/blogs/responsive-ui",
  },
];

export default function Blogs() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Blog Posts</h1>
      <p className="text-lg text-gray-600">
        Explore my thoughts and insights on web development, technology, and more.
      </p>

      <div className="space-y-8">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={blog.link}
            className="block card group hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-200" />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-primary">{blog.category}</span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <span className="text-sm text-gray-500">{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 