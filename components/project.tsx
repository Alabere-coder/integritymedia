"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI-Powered Dashboard",
    description:
      "A comprehensive dashboard with AI-driven analytics for business intelligence.",
    image: "/portf-img1.jpg",
    tags: ["React", "TypeScript", "TensorFlow.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "Modern e-commerce solution with personalized product recommendations.",
    image: "/port3.jpeg",
    tags: ["Next.js", "Node.js", "MongoDB", "Machine Learning"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Content Management System",
    description:
      "Custom CMS with intuitive interface and advanced content organization.",
    image: "/port2.jpeg",
    tags: ["Vue.js", "GraphQL", "PostgreSQL", "AWS"],
    liveLink: "#",
    githubLink: "#",
  },
];

const Project: React.FC = () => {
  return (
    <section id="projects" className="section-container bg-neutral-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my expertise in frontend
            development and AI engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl overflow-hidden border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-[#9b87f5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center space-x-1 text-sm text-[#9b87f5] hover:text-[#9b87f5]/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-1 text-sm text-[#9b87f5] hover:text-[#9b87f5]/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
