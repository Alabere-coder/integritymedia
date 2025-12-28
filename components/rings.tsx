import React from "react";
import { motion } from "framer-motion";

export const Rings: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Outer ring */}
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-cyan-600/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* <motion.div
          className="absolute w-3 h-3 rounded-full bg-purple-600/45 -top-1.5"
          style={{ left: "50%" }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        /> */}
      </motion.div>

      {/* Middle ring */}
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-cyan-600/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {/* <motion.div
          className="absolute w-2 h-2 rounded-full bg-secondary/60 -top-1"
          style={{ left: "50%" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        /> */}
      </motion.div>

      {/* Inner ring */}
      <motion.div
        className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border border-cyan-600/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-800/80 -top-0.5"
          style={{ left: "50%" }}
        /> */}
      </motion.div>
    </div>
  );
};

export default Rings;
