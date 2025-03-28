"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-20 w-full bg-neutral-200" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Contact Me</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to discuss collaboration
              opportunities? Feel free to reach out!
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-light mb-2 text-start">
                Let's talk about your project
              </h3>
              <p className="text-muted-foreground mb-4 text-start">
                I'm interested in freelance opportunities. However, if you have
                other requests or questions, don't hesitate to contact me.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://github.com/alabere-coder"
                    className="bg-gray-100 p-3 rounded-full hover:border-2 hover:border-[#9b87f5]"
                  >
                    <Github className="w-5 h-5 text-[#9b87f5]" />
                  </Link>
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium">@Alabere-coder</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://www.linkedin.com/in/abdulazeez-isiaq"
                    className="bg-gray-100 p-3 rounded-full hover:border-2 hover:border-[#9b87f5]"
                  >
                    <Linkedin className="w-5 h-5 text-[#9b87f5]" />
                  </Link>
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">@abdulazeez-isiaq</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">integritymedias@gmail.com</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-muted-foreground">Message</p>
                    <p className="font-medium text-start">
                      Send me a message and I'll get back to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="flex-1 glass-card p-6 rounded-xl w-full space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 bg-background rounded-lg border border-neutral-300 focus:border-[#9b87f5] focus:ring-1 focus:ring-[#9b87f5] outline-none transition-colors"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-background rounded-lg border border-neutral-300 focus:border-[#9b87f5] focus:ring-1 focus:ring-[#9b87f5] outline-none transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 bg-background rounded-lg border border-neutral-300 focus:border-[#9b87f5] focus:ring-1 focus:ring-[#9b87f5] outline-none transition-colors"
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
