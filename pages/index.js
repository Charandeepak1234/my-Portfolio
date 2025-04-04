import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaHandSparkles } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-10 lg:pt-11 pb-22 lg:pb-20">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-16 text-center px-6">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-3">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Charan Deepak K
          </motion.h1>
          <motion.div
            className="mt-2 sm:mt-0 text-4xl sm:text-5xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaHandSparkles />
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-lg sm:text-2xl mt-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Building Scalable Web Apps with Next.js, Prisma & SQL.
        </motion.p>

        <motion.p
          className="mt-3 max-w-lg sm:max-w-2xl text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          I build high-performance web applications with modern technologies. 
          Let's create something amazing together.
        </motion.p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <motion.a
            href="/projects"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            See My Work
          </motion.a>

          <motion.a
            href="/contact"
            className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="flex flex-col items-center px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Tech Stack</h2>
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:space-x-6 text-4xl sm:text-6xl gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <FaHtml5 className="text-orange-500" />
          <FaCss3Alt className="text-blue-400" />
          <FaJsSquare className="text-yellow-400" />
          <FaReact className="text-blue-300 animate-spin-slow" />
          <FaNodeJs className="text-green-500" />
          <FaDatabase className="text-gray-300" />
          <SiNextdotjs className="text-white" />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
