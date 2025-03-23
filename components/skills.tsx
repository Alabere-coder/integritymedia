import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Palette,
  Server,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="text-[#9b87f5]" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    category: "AI & ML",
    icon: <Cpu className="text-[#9b87f5]" />,
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "OpenAI"],
  },
  {
    category: "Backend",
    icon: <Server className="text-[#9b87f5]" />,
    items: ["Node.js", "Express", "Python", "FastAPI", "GraphQL"],
  },
  {
    category: "Data",
    icon: <Database className="text-[#9b87f5]" />,
    items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Redis"],
  },
  {
    category: "DevOps",
    icon: <Layers className="text-[#9b87f5]" />,
    items: ["Docker", "AWS", "CI/CD", "Vercel", "GitHub Actions"],
  },
  {
    category: "Design",
    icon: <Palette className="text-[#9b87f5]" />,
    items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Animations"],
  },
  {
    category: "Languages",
    icon: <Globe className="text-[#9b87f5]" />,
    items: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"],
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{skill.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {skill.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
