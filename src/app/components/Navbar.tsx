// components/Navbar.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/'},
    { title: 'About', href: '/about' },
    { title: 'Skills', href: '/skills' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' },
    
  ];

  return (
    <nav className="w-full fixed p-5 left-0 z-[999] pt-5 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0 ">
            <Logo/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            {/* Nav Links */}
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`group relative ${
                    pathname === link.href ? 'text-blue-500' : 'text-white'
                  } hover:text-blue-400 transition-colors duration-300`}
                >
                  <span className="flex items-center">
                    {link.title}
                    <FaArrowRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-6">
              <button className="px-4 py-2 text-white border border-white hover:bg-white hover:text-black rounded-md transition-colors duration-300">
              <Link href={'/signin'}>
                    Sign In
                    </Link>
              </button>
              <button className="px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-md transition-colors duration-300">
              <Link href={'/signup'}>
                    Sign Up
                    </Link>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:rounded-lg hover:bg-gray-900  transition-all duration-300 focus:outline-offset-1"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed  top-24 right-0 w-[50%] h-[calc(100vh-4rem)] bg-black shadow-xl md:hidden"
          >
            <div className="p-6">
              {/* <h2 className="text-2xl font-bold mb-6 text-white">About Me</h2> */}
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`group text-2xl ${
                      pathname === link.href ? 'text-blue-500' : 'text-white'
                    } hover:text-blue-400 transition-all duration-300`}
                  >
                    <div className="flex items-center p-2 rounded-md group-hover:bg-gray-800 transition-all duration-300">
                      <span>{link.title}</span>
                      <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="block w-0 group-hover:w-full h-0.5 bg-blue-400 transition-all duration-300"></span>
                  </Link>
                ))}
                <div className="pt-4 space-y-4">
                  <button className="w-full py-3 text-white border border-white hover:bg-white hover:text-black rounded-md transition-all duration-300">
                  <Link href={'/signin'}>
                    Sign In
                    </Link>
                  </button>
                  <button className="w-full py-3 bg-white text-black hover:bg-gray-200 rounded-md transition-all duration-300">
                    <Link href={'/signup'}>
                    Sign Up
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
