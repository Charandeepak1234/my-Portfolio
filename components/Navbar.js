import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavLinkClick = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          My_Portfolio
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl focus:outline-none"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links (Desktop & Mobile) */}
        <div
          id="mobile-menu"
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-700 lg:bg-transparent lg:static lg:flex lg:items-center lg:justify-end transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-8 text-lg font-semibold">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="py-3 lg:py-0 text-center">
                <Link
                  href={href}
                  onClick={handleNavLinkClick}
                  className={`block px-6 lg:p-0 hover:text-gray-300 transition-colors duration-200 ${
                    router.pathname === href
                      ? "text-gray-300 border-b-2 border-white lg:border-none"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
