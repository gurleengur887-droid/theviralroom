// WebsiteShowcase.jsx

import { motion } from "framer-motion";
import WebsiteProjectCard from "./websiteProjectCard";

export default function WebsiteShowcase() {

  const projects = [
    {
      title: "Ayurvedic Brand Website",

      description:
        "A premium responsive business website crafted for trust, conversions and smooth user experience across all devices.",

      features: [
        "Responsive UI",
        "SEO Optimized",
        "Fast Loading",
        "WhatsApp Integration",
      ],

      tech: [
        "React",
        "JavaScript",
        "CSS",
        "Node.js",
        "MongoDB",
        "Express",
      ],

      image: "/vaidyaco.png",

      live: "https://vaidyaco.in",

      scroll: true,
    },

    {
      title: "School Management Website",

      description:
        "A modern educational website designed with structured layouts, smooth navigation and clean visual hierarchy.",

      features: [
        "Modern UI",
        "Mobile Responsive",
        "Clean Navigation",
        "Optimized Layout",
      ],

      tech: [
        "React",
        "JavaScript",
        "CSS",
        "Node.js",
        "MongoDB",
        "Express",
      ],

      image: "/soit_1.png",

      live: "#",

      scroll: false,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-250px] left-[-250px] w-[600px] h-[600px] bg-purple-500/20 blur-[160px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-250px] right-[-250px] w-[600px] h-[600px] bg-pink-500/20 blur-[160px]"
        />

      </div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 md:mb-28"
      >

        <p className="text-white/50 tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
          Portfolio
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Featured
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Websites
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-white/50 mt-6 text-sm sm:text-base leading-relaxed px-2">
          Crafted with modern technologies, smooth interactions and premium
          user-focused experiences.
        </p>

      </motion.div>

      {/* PROJECTS */}
      <div className="flex flex-col gap-28 md:gap-40">

        {projects.map((project, index) => (
          <WebsiteProjectCard
            key={index}
            project={project}
            index={index}
          />
        ))}

      </div>
    </section>
  );
}