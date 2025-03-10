"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full h-screen max-sm:-mt-10 bg-neutral-200 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row h-fit w-full">
          <div className="flex justify-center items-center border-4 border-[#9b87f5] rounded-lg text-center max-md:w-32 max-md:h-32 w-40 h-40">
            <Image
              src="/work.jpg"
              width={100}
              height={100}
              alt="bg image"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </motion.div>
      <div className="max-w-full flex flex-col">
        <div className="max-w-5xl mt-2 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:hidden">
              <p className="text-[30px] font-semibold">Alabere</p>
              <p className="text-[34px] font-semibold -mt-4">Abdulazeez I.</p>
            </div>
            <h1 className=" text-center max-md:hidden md:py-6 text-5xl font-bold text-neutral-700">
              Alabere Abdulazeez I.
            </h1>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 mt-4 text-neutral-700">
              Frontend & AI Engineer
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Crafting beautiful user interfaces and building intelligent
              systems
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="#contact">
                <Button
                  variant="secondary"
                  className="bg-[#9b87f5] hover:bg-[#b4a4f7] text-white"
                >
                  Get in touch
                </Button>
              </Link>
              <Link href="#projects">
                <Button
                  variant="secondary"
                  className="border border-neutral-300 hover:border-[#9b87f5] text-neutral-700 rounded-lg transition-colors duration-200"
                >
                  View work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <a href="#about" className="flex flex-col items-center text-sm">
          <span className="mb-2 text-muted-foreground">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
