"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Popup from "@/components/popup";
import Project from "@/components/project";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/loader";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTopButton from "@/components/goto";
import Skills from "@/components/skills";
import CurrentProject from "@/components/current-project";
import { useAppLoaded } from "@/lib/useAppLoad"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { hasLoaded, markLoaded } = useAppLoaded()

  const handleLoadingComplete = () => {
    setIsLoading(true);
    markLoaded()
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <div className=" min-h-screen flex flex-col sm:items-start bg-background">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Navbar />
          <main className="w-full">
            <Header />
            <Popup />
            <About />
            <Project />
            <CurrentProject />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <BackToTopButton />
        </>
      )}
    </div>
  );
}
