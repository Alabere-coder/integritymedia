"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            className="text-xl font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Integrity-Media
          </motion.a>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="hover-link text-sm py-1 font-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <Button
            className="md:hidden text-foreground focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            variant="outline"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-[#9b87f5]" />
            ) : (
              <Menu size={24} className="text-[#9b87f5] font-display" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-background/80 backdrop-blur-md shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-primary/80 transition-colors text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 * index }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
