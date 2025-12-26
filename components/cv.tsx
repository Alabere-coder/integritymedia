"use client";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function CV() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      const { toPng } = await import("html-to-image");
      const jsPDF = (await import("jspdf")).default;

      const element = document.getElementById("cv-content");
      if (!element) {
        throw new Error("CV content not found");
      }

      // Convert DOM → PNG
      const dataUrl = await toPng(element, {
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        cacheBust: true,
      });

      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 10;

      const imgProps = pdf.getImageProperties(dataUrl);
      const imgWidth = pageWidth;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      let yPosition = margin;
      let remainingHeight = imgHeight;

      // First page
      pdf.addImage(dataUrl, "PNG", margin, yPosition, imgWidth, imgHeight);
      remainingHeight -= pageHeight;

      // Extra pages if needed
      while (remainingHeight > 0) {
        pdf.addPage();
        yPosition = remainingHeight - imgHeight + margin;
        pdf.addImage(dataUrl, "PNG", margin, yPosition, imgWidth, imgHeight);
        remainingHeight -= pageHeight;
      }

      pdf.save("Alabere-Dev-CV.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {/* Print button - hidden when printing */}
      <div className="print:hidden fixed top-6 right-6 z-50 ">
        <Button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-glow hover:scale-105 transition-transform"
        >
          <Download className="w-5 h-5" />
          Print CV
        </Button>

        {/* <Button
          onClick={handleDownload}
          disabled={isGenerating}
          className="fixed bottom-8 right-8 shadow-lg"
          size="lg"
        >
          <Download className="mr-2 h-5 w-5" />
          {isGenerating ? "Generating PDF..." : "Download CV"}
        </Button> */}
      </div>

      {/* Back to portfolio link */}
      <div className="print:hidden fixed top-6 left-6 z-50">
        <a
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-sky-400 rounded-lg text-foreground hover:border-primary/50 transition-all"
        >
          ← Back to Portfolio
        </a>
      </div>

      {/* CV Content */}
      <div
        id="cv-content"
        className="min-h-screen bg-[#0a0f1a] py-20 px-4 print:py-0 print:px-0 print:bg-white"
      >
        <div className="max-w-[25cm] mx-auto bg-card print:bg-white shadow-elevated print:shadow-none rounded-xl print:rounded-none overflow-hidden">
          {/* Header */}
          <header className="bg-gradient-primary flex flex-col justify-center items-center p-8 print:p-6 text-primary-foreground print:text-black print:bg-gray-100">
            <h1 className="font-heading text-center font-bold text-4xl print:text-3xl mb-2">
              Alabere Abdulazeez Isiaq
            </h1>
            <p className="text-2xl print:text-lg text-white print:opacity-100 mb-4">
              Frontend Developer
            </p>

            <div className="flex flex-wrap justify-center gap-4 print:gap-3 text-sm">
              <a
                href="mailto:alabere007@gmail.com"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 print:opacity-100 print:text-black"
              >
                <Mail className="w-4 h-4 text-black/50" />
                alabere007@gmail.com
              </a>
              <a
                href="tel:+2348130324506"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 print:opacity-100 print:text-black"
              >
                <Phone className="w-4 h-4 text-black/50" />
                +2348130324506
              </a>
              <span className="flex items-center gap-2 opacity-90 print:opacity-100 print:text-black">
                <MapPin className="w-4 h-4 text-black/50" />
                Ilorin, Nigeria.
              </span>
              <a
                href="https://integritymedia.vercel.app"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 print:opacity-100 print:text-black"
              >
                <Globe className="w-4 h-4 text-black/50" />
                https://integritymedia.vercel.app
              </a>
              <a
                href="https://github.com/Alabere-coder"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 print:opacity-100 print:text-black"
              >
                <Github className="w-4 h-4 text-black/50" />
                https://github.com/Alabere-coder
              </a>
              <a
                href="https://linkedin.com/in/abdulazeez-isiaq"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 print:opacity-100 print:text-black"
              >
                <Linkedin className="w-4 h-4 text-black/50" />
                linkedin.com/in/abdulazeez-isiaq
              </a>
            </div>
          </header>

          <div className="p-8 print:p-6 space-y-8 print:space-y-6 print:text-black">
            {/* Professional Summary */}
            <section>
              <h2 className="font-heading font-bold text-xl text-sky-400 print:text-black border-b-2 border-primary print:border-gray-300 pb-2 mb-4">
                Professional Summary
              </h2>
              <p className="text-muted-foreground print:text-gray-700 leading-relaxed">
                I am a passionate software developer with 2 years of experience,
                and love building open source applications for the general
                developer society. With expertise in both frontend development
                and artificial intelligence, I enjoy building interactive and
                superb UIs that are highly efficient, convenient and friendly to
                the users. I am experienced in web development especially
                JavaScript and Typescript and i have built projects during this
                period of time and i found them interesting.
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="font-heading font-bold text-xl text-sky-400 print:text-black border-b-2 border-primary print:border-gray-300 pb-2 mb-4">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-3">
                <div>
                  <h3 className="font-semibold text-foreground text-xl print:text-black mb-2">
                    Frontend
                  </h3>
                  <p className="text-muted-foreground print:text-gray-700 text-sm">
                    React, TypeScript, Next.js, Solid.js, Redux, React, Shadcn
                    Query, HTML5, CSS3, Tailwind CSS, Sass, Framer Motion
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl print:text-black mb-2">
                    Tools & Testing
                  </h3>
                  <p className="text-muted-foreground print:text-gray-700 text-sm">
                    Git, Webpack, Vite, Jest, React Testing Library, Storybook,
                    Figma, Chrome DevTools
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl print:text-black mb-2">
                    Backend & APIs
                  </h3>
                  <p className="text-muted-foreground print:text-gray-700 text-sm">
                    Node.js, AWS, Docker, GraphQL, REST APIs, Firebase,
                    Supabase, PostgreSQL, MongoDB
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl print:text-black mb-2">
                    Others
                  </h3>
                  <p className="text-muted-foreground print:text-gray-700 text-sm">
                    CI/CD, AWS, Vercel, Docker, Performance Optimization,
                    Accessibility (WCAG)
                  </p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="font-heading font-bold text-xl text-sky-400 print:text-black border-b-2 border-primary print:border-gray-300 pb-2 mb-4">
                Work Experience
              </h2>

              <div className="space-y-6 print:space-y-4">
                {/* Job 1 */}
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground print:text-black">
                        SchoolBeams (A multi-tenant web application for schools)
                      </h3>
                      <p className="text-primary print:text-gray-600">
                        As Software Development Intern
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground print:text-gray-500">
                      Presently
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 text-sm space-y-1 ml-2">
                    <li>
                      Developed a responsive web application using Solid js and
                      tailwind css that improved user engagement, and focusing
                      on performance and accessibility.
                    </li>
                    <li>
                      Collaborated with teams of implementing a restful api
                      using ORPC and fixing bugs using Git and GitHub for
                      version control.
                    </li>
                    <li>
                      Optimaized database queries in PostgreSQL, reducing load
                      times by 30% and enhancing overall application
                      performance.
                    </li>
                    <li>
                      Integrated AWS services such as S3 for file storage and
                      Cognito for user authentication, enhancing application
                      scalability and security.
                    </li>
                    <li>
                      Participated in code reviews and contributed to improving
                      code quality and team collaboration.
                    </li>
                    <li>
                      Deployed the application on AWS S3 and CloudFront,
                      ensuring high availability and low latency for users.
                    </li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground print:text-black">
                        Frontend Developer (At ALX-Africa)
                      </h3>
                      <p className="text-primary print:text-gray-600">
                        As a Student in the ALX Software Engineering Program
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground print:text-gray-500">
                      2022 – 2023
                    </span>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground print:text-gray-700 ml-2">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        ALX Frontend Engineering
                      </h4>
                      <ul className="list-disc list-inside">
                        <li>
                          Completed intensive frontend engineering training
                          focused on HTML, CSS, JavaScript, and modern frontend
                          tooling.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        ALX Frontend JavaScript
                      </h4>
                      <ul className="list-disc list-inside">
                        <li>
                          Developed frontend projects using modern JavaScript,
                          DOM manipulation, and asynchronous programming.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        ALX Higher-Level Programming (Python)
                      </h4>
                      <ul className="list-disc list-inside">
                        <li>
                          Built Python programs emphasizing OOP, data
                          structures, error handling, and clean, testable code.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        Sorting Algorithms (C / Data Structures)
                      </h4>
                      <ul className="list-disc list-inside">
                        <li>
                          Implemented Bubble, Insertion, Selection, Quick, and
                          Merge Sort.
                        </li>
                        <li>
                          Analyzed time and space complexity using Big-O
                          notation.
                        </li>
                        <li>
                          Worked with arrays, pointers, and memory management in
                          C.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        ALX System Engineering & DevOps
                      </h4>
                      <ul className="list-disc list-inside">
                        <li>
                          Used Linux shell (Bash) for navigation, scripting, and
                          automation.
                        </li>
                        <li>
                          Built shell scripts for file management, users,
                          permissions, and process control.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Job 3 */}
                {/* <div>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground print:text-black">
                        Junior Frontend Developer
                      </h3>
                      <p className="text-primary print:text-gray-600">
                        WebAgency Pro · Los Angeles, CA
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground print:text-gray-500">
                      Jun 2019 – Feb 2020
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground print:text-gray-700 text-sm space-y-1 ml-2">
                    <li>
                      Delivered 20+ client projects on time and within budget
                    </li>
                    <li>
                      Built responsive websites using modern CSS techniques
                      including Grid and Flexbox
                    </li>
                    <li>
                      Participated in code reviews and adopted best practices
                      for clean, maintainable code
                    </li>
                    <li>
                      Worked directly with clients to gather requirements and
                      provide technical solutions
                    </li>
                  </ul>
                </div> */}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="font-heading font-bold text-xl text-sky-400 print:text-black border-b-2 border-primary print:border-gray-300 pb-2 mb-4">
                Education
              </h2>
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="font-semibold text-foreground text-xl print:text-black">
                    Bachelor of Science in Computer Science (Education)
                  </h3>
                  <p className="text-primary print:text-gray-600">
                    Al-hikmah University, Ilorin, Nigeria.
                  </p>
                </div>
                <span className="text-sm text-muted-foreground print:text-gray-500">
                  Currently
                </span>
              </div>
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="font-semibold text-foreground text-xl print:text-black">
                    College of Education
                  </h3>
                  <p className="text-primary print:text-gray-600">
                    Kwara state College of Education Lafiagi, Nigeria.
                  </p>
                </div>
                <span className="text-sm text-muted-foreground print:text-gray-500">
                  2018
                </span>
                <p>Studied Mathematics</p>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="font-heading font-bold text-xl text-sky-400 print:text-black border-b-2 border-primary print:border-gray-300 pb-2 mb-4">
                My Projects
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground text-xl print:text-black">
                    E-Commerce Platform
                  </h3>
                  <p className="text-muted-foreground print:text-gray-700 text-sm">
                    A full-featured ecommerce platform built with Next.js,
                    featuring product listings, shopping cart, user
                    authentication, and Stripe payment integration.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl print:text-black">
                    Task Management App
                  </h3>
                  <p className="text-muted-foreground print:text-gray-700 text-sm">
                    Called Agenda: is a task management app tool with real-time
                    updates using Firebase and Nextjs, it help you stay
                    organized and manage your daily activities.
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="font-heading font-bold text-xl text-sky-400 print:text-black border-b-2 border-primary print:border-gray-300 pb-2 mb-4">
                Certifications
              </h2>
              <ul className="text-muted-foreground print:text-gray-700 text-sm space-y-1">
                <li>• AWS Certified Cloud Practitioner (2023)</li>

                <li>
                  • Alx-Africa Certificate of Completion POWERED by Holberton
                  (2023)
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            margin: 0.5in;
            size: letter;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </>
  );
}
