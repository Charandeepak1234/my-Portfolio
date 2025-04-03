import Head from "next/head";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pt-12 pb-16 lg:pt-16 lg:pb-20">
      <Head>
        <title>About | My Portfolio</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center py-10 sm:py-12 md:py-16 lg:py-18"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-gray-300 leading-relaxed px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I'm a **Full-Stack Developer** specializing in **Next.js, Prisma, and SQL**. I create high-performance, scalable applications with modern UI/UX. My expertise allows me to **develop full-stack applications efficiently** while maintaining quality.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="p-5 sm:p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">Recipe Contest</h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">A platform where users can participate in and vote for the best recipes, featuring search, filtering, and ratings.</p>
        </motion.div>

        <motion.div
          className="p-5 sm:p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-400">Speed Typo</h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">A typing speed test app that tracks WPM, CPM, and accuracy, storing user history using Prisma and SQL.</p>
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute w-32 sm:w-40 md:w-52 lg:w-60 h-32 sm:h-40 md:h-52 lg:h-60 bg-purple-500 opacity-30 rounded-full blur-3xl top-12 sm:top-16 md:top-20 left-4 sm:left-10 md:left-16 lg:left-20 animate-pulse"
      ></motion.div>
      <motion.div
        className="absolute w-32 sm:w-40 md:w-52 lg:w-60 h-32 sm:h-40 md:h-52 lg:h-60 bg-blue-500 opacity-30 rounded-full blur-3xl bottom-12 sm:bottom-16 md:bottom-20 right-4 sm:right-10 md:right-16 lg:right-20 animate-pulse"
      ></motion.div>

      
    </div>
  );
}
