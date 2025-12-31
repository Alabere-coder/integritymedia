"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Rings from "@/components/rings";
import Link from "next/link";

const Header: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

   return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1f] via-[#112240] to-[#1b3a5f]" />

     
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/15 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <Rings />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 max-w-5xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile image with glow */}
        <motion.div variants={imageVariants} className="relative">
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary blur-xl opacity-60"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative"
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-primary/50 glass-strong">
              
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center" aria-hidden="true">
                <span className="text-4xl md:text-5xl font-display font-bold text-gradient">A</span>
              </div>
            </div>
          
          </motion.div> */}
        </motion.div>

        {/* Name with gradient */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.p
            className="text-cyan-300 text-sm md:text-base font-medium tracking-widest uppercase"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Alabere </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
              Abdulazeez I.
            </span>
          </h1>
        </motion.div>

        {/* Title with icons */}
        <motion.div variants={itemVariants} className="flex flex-row items-center md:mt-4 gap-4">
          <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
            <div className="flex items-center gap-2 glass bg-neutral-800 px-4 py-2 rounded-full">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">Frontend</span>
            </div>
            <span className="text-cyan-400 text-2xl font-bold">&</span>
            <div className="flex items-center gap-2 glass bg-neutral-800 px-4 py-2 rounded-full">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">AI Engineer</span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm md:text-xl max-w-2xl leading-relaxed"
        >
          Crafting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-medium">
            beautiful user interfaces
          </span>{" "}
          and building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-medium">
            intelligent systems
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-row gap-4 mt-4"
        >
          <Link href="#contact">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/75 transition-all"
            >
              Get in touch
              <motion.span
                className="ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                →
              </motion.span>
            </Button>
          </Link>
          
          <Link href="/resume">
            <Button size="lg" variant="outline" className="group text-white hover:text-blue-500 hover:border-blue-500">
              View Resume
            </Button>
          </Link>
        </motion.div>

        {/* Suggestion 2: Semantic HTML for Stats */}
        <motion.ul variants={itemVariants} className="flex items-center gap-4 md:gap-8 md:mt-8 text-gray-400 text-sm">
          <li className="flex flex-col items-center">
            <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              2+
            </span>
            <span className="text-gray-500">Years Exp</span>
          </li>
          <li className="w-px h-10 bg-gradient-to-b from-cyan-500/50 to-magenta-500/50" aria-hidden="true" />{" "}
          {/* Vibrant gradient divider */}
          <li className="flex flex-col items-center">
            <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-purple-400">
              50+
            </span>
            <span className="text-gray-500">Projects</span>
          </li>
          <li className="w-px h-10 bg-gradient-to-b from-cyan-500/50 to-magenta-500/50" aria-hidden="true" />{" "}
          {/* Vibrant gradient divider */}
          <li className="flex flex-col items-center">
            <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              100%
            </span>
            <span className="text-gray-500">Passion</span>
          </li>
        </motion.ul>
      </motion.div>

      {/* Scroll indicator */}
       <motion.div
        className="absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-cyan-400/70 cursor-pointer hover:text-cyan-300 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
