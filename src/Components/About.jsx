import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FiCamera,
  FiCode,
  FiAperture,
  FiMail,
} from "react-icons/fi";

import { FaLinkedin } from "react-icons/fa";

import TrustedBrands from "../Components/TrustedBrands";
import FeaturedInfluencer from "./FeaturedInfluencer";
import { Link } from "react-router-dom";

/* 🔥 TILT */
function TiltCard({ children }) {
  const ref = useRef();

  const handleMove = (e) => {

    // disable tilt on mobile
    if (window.innerWidth < 768) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX =
      (y / rect.height - 0.5) * -18;

    const rotateY =
      (x / rect.width - 0.5) * 18;

    ref.current.style.transform =
      `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)`;
  };

  const reset = () => {
    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  );
}

export default function About() {

  const team = [
    {
      id: "vinay",
      name: "Vinay",
      role: "Founder & CMO",
      desc:
        "Vision, storytelling, and execution that drives results.",

      icon: <FiCamera />,

      email: "mailto:heyyvnay@gmail.com",

      linkedin: "https://linkedin.com",
    },

    {
      id: "narinder",
      name: "Narinder Singh",
      role: "Co-Founder & DOP Head",

      desc:
        "Precision visuals that give brands a premium edge.",

      icon: <FiAperture />,

      email: "mailto:ns3301551@gmail.com",

      linkedin: "https://linkedin.com",
    },

    {
      id: "gurleen",
      name: "Gurleen Kaur",
      role: "Website Developer",

      desc:
        "Creates seamless, high-performing digital experiences.",

      icon: <FiCode />,

      email: "mailto:gurleen.gur887@gmail.com",

      linkedin:
        "https://www.linkedin.com/in/gurleen-kaur-b35359399/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}

      className="
        relative min-h-screen text-white
        px-4 sm:px-6 md:px-20
        py-20 md:py-24
        overflow-hidden
      "
    >

      {/* 🌫️ BG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[150px] top-[-150px] left-[-150px]" />

        <div className="absolute w-[600px] h-[600px] bg-pink-500/20 blur-[150px] bottom-[-150px] right-[-150px]" />

      </div>

      {/* 🔥 HERO */}
      <div className="mb-16 md:mb-20">

        <h1 className="text-[44px] sm:text-[60px] md:text-[100px] font-bold leading-[0.9]">

          <span className="block text-white/70">
            About
          </span>

          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Us
          </span>

        </h1>

        <div className="mt-6 md:mt-8 max-w-2xl space-y-4 md:space-y-5 text-white/60 leading-relaxed text-sm sm:text-base">

          <p>
            We are a content-driven digital team focused on building brands
            that don’t just exist — but lead.
          </p>

          <p>
            We combine storytelling, design, and performance to create
            experiences that don’t just look good — they actually move people.
          </p>

        </div>
      </div>

      {/* 🔥 TEAM */}
      <div className="mt-10">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12">
          Our Amazing Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

          {team.map((member, i) => (

            <TiltCard key={i}>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{
                  delay: i * 0.2,
                }}

                className="
                  p-6 sm:p-7 md:p-8
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  hover:bg-white/10
                  transition
                  group
                "
              >

                {/* NAME + ICON */}
                <div className="flex items-center gap-3 mb-3">

                  <div className="text-pink-400 text-lg md:text-xl">
                    {member.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold">
                    {member.name}
                  </h3>

                </div>

                <p className="text-purple-300 text-sm mb-3">
                  {member.role}
                </p>

                <p className="text-white/50 text-sm leading-relaxed">
                  {member.desc}
                </p>

                {/* 🔥 ACTION BAR */}
                <div className="flex items-center justify-between mt-8">

                  {/* CTA */}
                  <Link
                    to={`/team/${member.id}`}
                    className="
                      relative px-4 sm:px-5 py-2
                      rounded-full text-xs sm:text-sm
                      font-medium overflow-hidden
                      group border border-white/10
                      bg-white/5 backdrop-blur-md
                    "
                  >

                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition duration-300 blur-md" />

                    <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                      View Profile →
                    </span>

                  </Link>

                  {/* ICONS */}
                  <div className="flex items-center gap-3">

                    <a
                      href={member.email}
                      className="
                        p-2 rounded-full
                        border border-white/10
                        bg-white/5 backdrop-blur-md
                        hover:bg-purple-500/20
                        hover:border-purple-400
                        hover:scale-110
                        transition duration-300
                      "
                    >
                      <FiMail className="text-purple-300 text-sm md:text-base" />
                    </a>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"

                      className="
                        p-2 rounded-full
                        border border-white/10
                        bg-white/5 backdrop-blur-md
                        hover:bg-blue-500/20
                        hover:border-blue-400
                        hover:scale-110
                        transition duration-300
                      "
                    >
                      <FaLinkedin className="text-blue-300 text-sm md:text-base" />
                    </a>

                  </div>
                </div>

              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>

      <TrustedBrands />

      <FeaturedInfluencer />

      {/* 🔥 FINAL LINE */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{ once: true }}

        transition={{
          delay: 0.2,
        }}

        className="mt-24 md:mt-32 text-center px-4"
      >

        <p className="text-white/80 italic text-base sm:text-lg md:text-2xl leading-relaxed">
          We don’t just build brands. We build presence.
        </p>

      </motion.div>

    </motion.div>
  );
}