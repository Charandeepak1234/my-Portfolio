import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a link is clicked
  const handleNavLinkClick = () => setIsOpen(false);

  return (
    <nav className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full bg-blue-600 md:bg-transparent text-center md:flex md:space-x-6 md:w-auto transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 md:opacity-100 md:translate-y-0"
          }`}
        >
          <li className="py-2 md:py-0">
            <Link href="/" className="hover:text-gray-300 text-lg font-semibold" onClick={handleNavLinkClick}>
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/projects" className="hover:text-gray-300 text-lg font-semibold" onClick={handleNavLinkClick}>
              Projects
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/about" className="hover:text-gray-300 text-lg font-semibold" onClick={handleNavLinkClick}>
              About
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/contact" className="hover:text-gray-300 text-lg font-semibold" onClick={handleNavLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
