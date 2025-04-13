import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`sticky w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold"
          >
            <img
              src={"/logo.png"}
              alt="Logo"
              className="h-10 w-10 inline-block mr-2 scale-150"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center cursor-pointer space-x-8">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="menu">Menu</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="reservation"
              smooth={true}
              duration={500}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-900 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              Reserve Now
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="flex flex-col space-y-1 px-6 py-4">
              <MobileNavLink to="home" onClick={closeMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink to="about" onClick={closeMenu}>
                About
              </MobileNavLink>
              <MobileNavLink to="menu" onClick={closeMenu}>
                Menu
              </MobileNavLink>
              <MobileNavLink to="contact" onClick={closeMenu}>
                Contact
              </MobileNavLink>
              <motion.div
                className="pt-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="reservation"
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                  className="block w-full text-center px-5 py-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium text-sm shadow-md"
                >
                  Reserve Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        smooth={true}
        duration={500}
        className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium text-sm px-3 py-2 rounded-lg transition-colors"
        activeClass="text-amber-600 dark:text-amber-400 font-semibold"
      >
        {children}
      </Link>
    </motion.div>
  );
};

const MobileNavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        to={to}
        smooth={true}
        duration={500}
        onClick={onClick}
        className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium rounded-lg transition-colors"
        activeClass="text-amber-600 dark:text-amber-400 font-semibold bg-amber-50 dark:bg-amber-900/20"
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Navbar;
