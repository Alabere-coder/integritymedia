"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 4100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-100 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="w-24 h-24 mb-8 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(240 6% 90%)"
            strokeWidth="2"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#9b87f5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="283"
            animate={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </svg>
      </motion.div>

      <motion.h3
        className="text-xl font-light"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        aria-live="polite"
      >
        {progress}%
      </motion.h3>
    </motion.div>
  );
};

export default LoadingScreen;
