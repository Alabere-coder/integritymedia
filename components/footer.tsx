"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart, Server } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 py-12 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.div
            className="flex space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.a
              href="#"
              className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href="#"
              className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              href="#"
              className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-4">
              <p className="text-muted-foreground flex items-center">
                Made By Integrity-Media{" "}
                <Server size={16} className="mx-4 text-destructive" />
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
