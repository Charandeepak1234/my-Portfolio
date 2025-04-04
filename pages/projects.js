import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Recipe Contest",
    description: "A React-based platform where users can submit, search, and vote for the best recipes. Includes sorting & filtering.",
    image: "/images/Recipe-contest.png",
    github: "https://github.com/Charandeepak1234/recipe-contest",
    demo: "https://recipe-contest-eosin.vercel.app/",
    tech: ["React", "CSS", "API", "Firebase"],
  },
  {
    name: "Speed Typo",
    description: "A typing speed test app built with Next.js, tracking WPM, CPM, and errors, with a leaderboard and real-time feedback.",
    image: "/images/speed-typo.png",
    github: "https://github.com/Charandeepak1234/speed-typo",
    demo: "https://speed-typo-seven.vercel.app/",
    tech: ["Next.js", "Prisma", "SQL", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-900 overflow-hidden">
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>
      <Navbar />

      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div 
        className="absolute inset-0 flex justify-center items-center z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 5 }}
      >
        <div className="w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative p-6 pt-24 container mx-auto z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">My Projects</h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-2xl relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.name} className="w-full h-40 sm:h-48 object-cover rounded-lg" />
              <h2 className="text-2xl font-bold mt-4 text-blue-600">{project.name}</h2>
              <p className="text-gray-700 mt-2">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons Section */}
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between mt-4 space-y-3 sm:space-y-0">
                <a href={project.demo} target="_blank" className="text-white bg-blue-600 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition text-center w-full sm:w-auto">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" className="text-white bg-gray-800 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition text-center w-full sm:w-auto">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
