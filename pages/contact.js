import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const bouncingNames = Array.from({ length: 10 });

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-80 text-white px-4 sm:px-6 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <Head>
        <title>Contact | My Portfolio</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Bouncing Background Names */}
      {bouncingNames.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-5xl sm:text-6xl lg:text-7xl font-extrabold opacity-15 blur-md"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ x: -50, y: -50 }}
          animate={{ x: [50, -50, 50], y: [50, -50, 50] }}
          transition={{ repeat: Infinity, duration: 5 + Math.random() * 3, ease: "easeInOut" }}
        >
          Charan Deepak K
        </motion.div>
      ))}

      {/* Contact Section */}
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-md sm:text-lg lg:text-xl mb-4 relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Feel free to reach out to me!
      </motion.p>

      {/* Contact Info Box */}
      <motion.div
        className="w-full max-w-xs sm:max-w-md lg:max-w-lg bg-white bg-opacity-80 text-blue-600 p-5 sm:p-6 lg:p-8 rounded-lg shadow-lg relative z-10 space-y-3 sm:space-y-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm sm:text-base lg:text-lg">
          Email:{" "}
          <a
            href="mailto:charadeepakk@gmail.com"
            className="text-yellow-400 font-semibold hover:text-yellow-500 hover:underline"
          >
            charadeepakk@gmail.com
          </a>
        </p>
        <p className="text-sm sm:text-base lg:text-lg">
          Phone:{" "}
          <span className="text-green-300 font-semibold hover:text-green-400">
            +91 62812 68887
          </span>
        </p>
        <p className="text-sm sm:text-base lg:text-lg">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/charan-deepak-kudumula-ba5a93312/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-semibold hover:text-cyan-500 hover:underline"
          >
            linkedin.com/in/charan-deepak-kudumula-ba5a93312/
          </a>
        </p>
        <p className="text-sm sm:text-base lg:text-lg">
          GitHub:{" "}
          <a
            href="https://github.com/Charandeepak1234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 font-semibold hover:text-orange-500 hover:underline"
          >
            github.com/Charandeepak1234
          </a>
        </p>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
