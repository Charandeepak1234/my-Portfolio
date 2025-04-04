import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaUserShield, FaCogs, FaShoppingCart, FaLink } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-blue-600 text-5xl mx-auto mb-3" />,
    title: "Full-Stack Web Development",
    description: "Building scalable web applications with Next.js, Prisma, and SQL.",
  },
  {
    icon: <FaCloud className="text-indigo-600 text-5xl mx-auto mb-3" />,
    title: "SaaS Application Development",
    description: "Creating subscription-based SaaS platforms with authentication, billing, and user roles.",
  },
  {
    icon: <FaUserShield className="text-green-600 text-5xl mx-auto mb-3" />,
    title: "Authentication & User Management",
    description: "Secure login, registration, role-based access control, and social authentication.",
  },
  {
    icon: <FaCogs className="text-purple-600 text-5xl mx-auto mb-3" />,
    title: "Custom Dashboards & Admin Panels",
    description: "Feature-rich dashboards for analytics, user management, and real-time insights.",
  },
  {
    icon: <FaShoppingCart className="text-red-600 text-5xl mx-auto mb-3" />,
    title: "E-Commerce Development",
    description: "Developing online stores with secure payments, inventory management, and user authentication.",
  },
  {
    icon: <FaLink className="text-orange-600 text-5xl mx-auto mb-3" />,
    title: "API Development & Integration",
    description: "Building and integrating RESTful & GraphQL APIs for seamless connectivity.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Services | My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />

      {/* Services Section */}
      <div className="py-16 px-6 pb-24 sm:pb-20 lg:pb-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700">
          Services I Offer
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-lg mx-auto">
          I specialize in building modern web applications with Next.js, Prisma, and SQL.
        </p>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 text-lg"
          >
            Let's Work Together
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
