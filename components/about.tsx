"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Brain, Lightbulb, Users } from "lucide-react";

const About: React.FC = () => {
  const cards = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive, accessible, and performant user interfaces with modern frameworks.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "AI Engineering",
      description:
        "Implementing machine learning models and AI solutions to solve complex problems.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Creative Problem Solving",
      description:
        "Approaching challenges with innovative thinking and effective solutions.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      title: "Collaborative Approach",
      description:
        "Working closely with clients and teams to deliver exceptional results.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="section-container bg-neutral-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
            About Me
          </span>
          {/* <h2 className="text-3xl md:text-4xl font-light mb-6">
            Passionate about creating impactful digital solutions
          </h2> */}
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I am a passionate developer, that loves building open source
            applications for the general developer society. With expertise in
            both frontend development and artificial intelligence, I enjoy
            building interactive and superb UIs that are highly efficient,
            convenient and friendly to the users. I am experienced in web
            development especially JavaScript and Typescript and i have built
            projects during this period of time and i found them interesting.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I am also passionate about writing tech articles and technology
            including programming which are clearly open source. My approach
            combines clean code, intuitive design, and cutting-edge AI
            technologies to build solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-lg flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-primary/5 text-[#9b87f5] p-3 rounded-md mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

// import { motion } from "framer-motion";
// import { Code, Brain, Github, Linkedin, Mail } from "lucide-react";
// import React from "react";

// const About = () => {
//   return (
//     <section className="py-20 bg-white w-full" id="about">
//       <div className="max-w-5xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-neutral-800">
//             About Me
//           </h2>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <p className="text-neutral-600 leading-relaxed mb-6">
//                 I am a passionate developer, that loves building open source
//                 applications for the general developer society. With expertise
//                 in both frontend development and artificial intelligence, I
//                 enjoy building interactive and superb UIs that are highly
//                 efficient, convenient and friendly to the users. I am
//                 experienced in web development especially JavaScript and
//                 Typescript and i have built projects during this period of time
//                 and i found them interesting.
//               </p>
//               <p className="text-neutral-600 leading-relaxed">
//                 I am also passionate about writing tech articles and technology
//                 including programming which are clearly open source. My approach
//                 combines clean code, intuitive design, and cutting-edge AI
//                 technologies to build solutions that make a difference.
//               </p>
//             </div>
//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <Code className="text-[#9b87f5] w-12 h-12" />
//                 <div>
//                   <h3 className="font-semibold text-neutral-800">
//                     Frontend Development
//                   </h3>
//                   <p className="text-neutral-600">
//                     Creating responsive and intuitive interfaces
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Brain className="text-[#9b87f5] w-12 h-12" />
//                 <div>
//                   <h3 className="font-semibold text-neutral-800">
//                     AI Engineering
//                   </h3>
//                   <p className="text-neutral-600">
//                     Building intelligent systems and solutions
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
