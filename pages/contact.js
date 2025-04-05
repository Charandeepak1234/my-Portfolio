import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! I'll get back to you soon.");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 pt-24 pb-28">
      <Head>
        <title>Contact | My Portfolio</title>
      </Head>

      <Navbar />

      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="w-full max-w-lg bg-white text-blue-600 p-8 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-lg mb-4">
          Email: <a href="mailto:charadeepakk@gmail.com" className="text-yellow-500 font-semibold">charadeepakk@gmail.com</a>
        </p>
        <p className="text-lg mb-4">
          LinkedIn: <a href="https://www.linkedin.com/in/charan-deepak-kudumula-ba5a93312/" target="_blank" className="text-cyan-500 font-semibold">LinkedIn Profile</a>
        </p>
        <p className="text-lg mb-4">
          Upwork: <a href="https://www.upwork.com/freelancers/~yourprofile" target="_blank" className="text-green-500 font-semibold">Hire Me on Upwork</a>
        </p>
        <p className="text-lg mb-4">
          WhatsApp: <a href="https://wa.me/916281268887" target="_blank" className="text-green-400 font-semibold">Chat on WhatsApp</a>
        </p>
      </motion.div>

      <Footer />
    </div>
  );
}
