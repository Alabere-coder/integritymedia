import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "React Native", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "RESTful APIs", level: 85 },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "TensorFlow.js", level: 70 },
      { name: "Machine Learning", level: 75 },
      { name: "Natural Language Processing", level: 65 },
      { name: "Data Visualization", level: 80 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-container bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities across
            frontend development, backend technologies, and AI engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-medium mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#9b87f5]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + skillIndex * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
