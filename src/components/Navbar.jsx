'use client';

import { IoIosArrowDown, IoIosClose, IoIosMenu } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data";

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // For mobile submenus

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubMenu(null); // Reset submenu
  };

  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  return (
    <div className="flex text-gray-800  mx-auto items-center justify-between py-1 px-4 lg:px-12 relative z-50 ">
      
      {/* Logo */}
      <Link href='/' className="flex gap-2 text-gray-800 font-bold items-center">
        <Image 
          src="/images/logo.png"
          alt="logo"
          width={40}
          height={40}
        />
        <h1 className="text-xl">FolioCraft</h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="gap-5 hidden lg:flex text-gray-700 mt-1 font-[600]">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={link.subLinks ? handleMouseEnter : undefined}
            onMouseLeave={link.subLinks ? handleMouseLeave : undefined}
          >
            <Link
              href={link.path || '#'}
              className="hover:text-primary transition-colors duration-300 flex items-center"
            >
              {link.name}
              {link.subLinks && <IoIosArrowDown className="ml-1" />}
            </Link>

            {/* Dropdown */}
            {link.subLinks && (
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 bg-white shadow-lg rounded-md pt-2 py-2 w-48 z-10"
                  >
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex} className="hover:bg-gray-100 px-4 py-2">
                        <Link href={subLink.path} className="block text-gray-700 hover:text-primary">
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="border lg:flex border-primary hidden rounded-md">
        <button
          className="bg-primary hover:bg-black m-0.5 px-8 py-3 font-medium text-white rounded-md cursor-pointer hover-animation"
        >
          Explore Our Work
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button onClick={toggleMobileMenu} className="lg:hidden text-gray-800 focus:outline-none z-50">
        {isMobileMenuOpen ? (
          <IoIosClose className="text-3xl transition-transform duration-300" />
        ) : (
          <IoIosMenu className="text-3xl transition-transform duration-300" />
        )}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-40 px-6 py-10 flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.path || '#'}
                      className="block text-gray-800 font-medium text-lg hover:text-primary"
                      onClick={() => {
                        if (!link.subLinks) toggleMobileMenu();
                      }}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <button onClick={() => toggleSubMenu(index)} className="text-xl text-gray-700 focus:outline-none">
                        <IoIosArrowDown className={`${openSubMenu === index ? 'transform rotate-180' : ''} transition-transform`} />
                      </button>
                    )}
                  </div>

                  {/* Mobile SubLinks */}
                  <AnimatePresence>
                    {openSubMenu === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-5 space-y-2 overflow-hidden"
                      >
                        {link.subLinks.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subLink.path}
                              className="block text-gray-600 hover:text-primary py-1"
                              onClick={toggleMobileMenu}
                            >
                              {subLink.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
          {/* CTA Button */}
          <button className="mt-auto bg-primary hover:bg-black text-white py-3 px-6 rounded-md font-medium transition-all duration-300">
              Explore Our Work
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
