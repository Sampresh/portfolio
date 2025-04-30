import connectDB from '../lib/mongodb';
import Project from '../models/Project';

const sampleProjects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with modern features including product catalog, shopping cart, user authentication, and payment integration.",
    image: "/images/projects/ecommerce.jpg",
    link: "/projects/ecommerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing daily tasks with features like task categorization, priority setting, and progress tracking.",
    image: "/images/projects/task-manager.jpg",
    link: "/projects/task-manager",
    tags: ["Next.js", "TypeScript", "Firebase"]
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive analytics dashboard for social media platforms, featuring real-time metrics, content scheduling, and engagement tracking.",
    image: "/images/projects/social-dashboard.jpg",
    link: "/projects/social-dashboard",
    tags: ["React", "Python", "PostgreSQL", "Chart.js"]
  }
];

async function initDB() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert sample data
    await Project.insertMany(sampleProjects);
    console.log('Inserted sample projects');

    console.log('Database initialization completed successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    process.exit(0);
  }
}

initDB(); 