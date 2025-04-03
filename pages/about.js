import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
      <Head>
        <title>About | My Portfolio</title>
      </Head>
      <Navbar />

      <motion.div 
        className="flex flex-col items-center justify-center py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.p 
          className="text-xl max-w-3xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I'm a full-stack developer specializing in **Next.js, Prisma, and SQL**. I build high-performance, scalable applications with a focus on modern UI/UX. My expertise allows me to **develop full-stack applications efficiently within tight deadlines**, ensuring both speed and quality.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div 
          className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-purple-400">Recipe Contest</h2>
          <p className="text-gray-300">A platform where users can participate in and vote for the best recipes, featuring search, filtering, and ratings.</p>
        </motion.div>
        
        <motion.div 
          className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-blue-400">Speed Typo</h2>
          <p className="text-gray-300">A typing speed test app that tracks WPM, CPM, and accuracy, storing user history using Prisma and SQL.</p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute w-60 h-60 bg-purple-500 opacity-30 rounded-full blur-3xl top-20 left-10 animate-pulse"
      ></motion.div>
      <motion.div 
        className="absolute w-60 h-60 bg-blue-500 opacity-30 rounded-full blur-3xl bottom-20 right-10 animate-pulse"
      ></motion.div>

      <Footer />
    </div>
  );
}
