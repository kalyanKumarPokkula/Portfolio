import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gray-800"
          >
            Kalyan Kumar
          </motion.div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900"
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </motion.div>
            </button>
          </div>

          {/* Menu Items for Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* Icons for Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/kalyanKumarPokkula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/kalyankumarpokkula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:kalyankumarpokkula@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu (Toggled) */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#skills"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Contact
          </a>
          <div className="flex items-center gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/kalyanKumarPokkula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/kalyankumarpokkula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:kalyankumarpokkula@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
