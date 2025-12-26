"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Header = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex flex-row h-fit w-full"
        >
          <div className="flex justify-center items-center border-4 border-[#9b87f5] rounded-lg text-center max-md:w-32 max-md:h-32 w-40 h-40">
            <Image
              src="/work.jpg"
              width={100}
              height={100}
              alt="bg image"
              className="w-full h-full rounded-lg"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="max-sm:h-[22rem] max-sm:w-[22rem] h-96 w-96 rounded-full bg-[#9b87f5] blur-sm"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.45 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="max-sm:h-64 max-sm:w-64 h-80 w-80 rounded-full bg-[#9b87f5] blur-xs"
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="max-sm:h-48 max-sm:w-48 h-64 w-64 rounded-full bg-[#9b87f5]"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 flex flex-col justify-center items-center gap-8 max-w-5xl text-center"
      >
        <div className="flex flex-col md:hidden">
          <p className="text-[30px] font-semibold">Alabere</p>
          <p className="text-[34px] font-semibold -mt-4">Abdulazeez I.</p>
        </div>
        <h1 className=" text-center max-md:hidden md:py-6 text-5xl font-bold text-neutral-700">
          Alabere Abdulazeez I.
        </h1>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-neutral-700">
          Frontend & AI Engineer
        </h1>
        <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Crafting beautiful user interfaces and building intelligent systems
        </p>
        <div className="flex gap-4 justify-center mt-10">
          <Link href="#contact">
            <Button
              variant="secondary"
              className="bg-[#9b87f5] hover:bg-[#b4a4f7] text-white"
            >
              Get in touch
            </Button>
          </Link>

          <a href="/resume">
          <Button
            variant="secondary"
            className="border border-neutral-300 hover:border-[#9b87f5] text-neutral-700 rounded-lg transition-colors duration-200"
          >
            View Resume
          </Button>
        </a>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
    </div>
  );
}

export default Header;
