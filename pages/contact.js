import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const bouncingNames = Array.from({ length: 10 });

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-80 text-white p-6 overflow-hidden">
      <Head>
        <title>Contact | My Portfolio</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Multiple Bouncing Name Background */}
      {bouncingNames.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-7xl font-extrabold opacity-20 blur-sm"
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
        className="text-4xl font-bold mb-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-lg mb-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Feel free to reach out to me!
      </motion.p>

      <motion.div
        className="text-lg bg-white bg-opacity-80 text-blue-600 p-6 rounded-lg shadow-lg max-w-md w-full relative z-10 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>
          Email:{" "}
          <a
            href="mailto:charadeepakk@gmail.com"
            className="text-yellow-400 font-semibold hover:text-yellow-500 hover:underline"
          >
            charadeepakk@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <span className="text-green-300 font-semibold hover:text-green-400">
            +91 62812 68887
          </span>
        </p>
        <p>
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
        <p>
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
      <Footer />
    </div>
  );
}
