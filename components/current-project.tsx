import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: 1,
    title: "Neural Network Visualizer",
    description:
      "Interactive web app that visualizes neural networks in real-time, helping users understand how deep learning models work.",
    image: "/pc2.jpeg",
    category: "AI Engineering",
    year: "2023",
    link: "#",
  },
  {
    id: 2,
    title: "Algorithmic Trading Platform",
    description:
      "Full-stack platform that uses machine learning algorithms to predict market trends and execute trades automatically.",
    image: "/ai3.jpeg",
    category: "Full Stack Development",
    year: "2022",
    link: "#",
  },
  {
    id: 3,
    title: "Sentiment Analysis Dashboard",
    description:
      "Real-time dashboard that analyzes social media sentiment about brands and products using NLP techniques.",
    image: "/solving1.jpeg",
    category: "Data Science",
    year: "2023",
    link: "#",
  },
];

const CurrentProject: React.FC = () => {
  return (
    <section id="featured-work" className="section-container bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-light mb-6">Recent Work</h2>
          <p className="text-muted-foreground max-w-3xl text-center">
            Explore a selection of my recent projects that demonstrate my
            expertise in AI engineering and frontend development.
          </p>
        </motion.div>

        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div
                  className={`order-2 ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-medium">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div
                  className={`order-1 ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentProject;
