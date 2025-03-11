"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-20 w-full bg-neutral-200" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-neutral-800">
            Get in Touch
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-neutral-600 mb-6">
                Interested in working together? Let's discuss your project and
                see how I can help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://github.com/alabere-coder"
                    className="bg-primary/10 p-3 rounded-full hover:border-2 hover:border-[#9b87f5]"
                  >
                    <Github className="w-5 h-5 text-[#9b87f5]" />
                  </Link>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium">@Alabere-coder</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://www.linkedin.com/in/abdulazeez-isiaq"
                    className="bg-primary/10 p-3 rounded-full hover:border-2 hover:border-[#9b87f5]"
                  >
                    <Linkedin className="w-5 h-5 text-[#9b87f5]" />
                  </Link>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">@abdulazeez-isiaq</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">integritymedias@gmail.com</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Message</p>
                    <p className="font-medium">
                      Send me a message and I'll get back to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex-1 w-full space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-[#9b87f5] focus:ring-1 focus:ring-[#9b87f5] outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-[#9b87f5] focus:ring-1 focus:ring-[#9b87f5] outline-none transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-[#9b87f5] focus:ring-1 focus:ring-[#9b87f5] outline-none transition-colors"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#9b87f5] hover:bg-[#b4a4f7] text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
