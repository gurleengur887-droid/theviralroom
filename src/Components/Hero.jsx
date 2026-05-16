import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import logo_2 from "../Images/logo_2.PNG";


export default function Hero() {

  const [showIntro, setShowIntro] =
    useState(true);

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <section
      className="
        relative min-h-screen
        pt-24 sm:pt-28 md:pt-32
        flex items-center justify-center
        text-center
        px-4 sm:px-6
        overflow-hidden
      "
    >

      {/* 🔵 Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            w-[260px] h-[260px]
            sm:w-[420px] sm:h-[420px]
            md:w-[520px] md:h-[520px]
            bg-purple-600/30
            blur-[100px] sm:blur-[140px]
            rounded-full
            top-[-80px] sm:top-[-120px]
            left-[5%] sm:left-[15%]
          "
        />

        <div
          className="
            absolute
            w-[220px] h-[220px]
            sm:w-[360px] sm:h-[360px]
            md:w-[420px] md:h-[420px]
            bg-blue-500/20
            blur-[100px] sm:blur-[140px]
            rounded-full
            bottom-[-60px] sm:bottom-[-100px]
            right-[5%] sm:right-[15%]
          "
        />

      </div>

      {/* 🎬 INTRO LOGO */}
      <AnimatePresence>

        {showIntro && (

          <motion.div
            key="intro"

            initial={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            transition={{
              duration: 0.6,
            }}

            className="
              absolute inset-0
              flex items-center justify-center
              bg-[#0B0B0F]
              z-20
            "
          >

            <motion.img
              src={logo_2}
              alt="logo"

              initial={{
                scale: 0.7,
                opacity: 0,
                rotate: -10,
              }}

              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
              }}

              exit={{
                scale: 1.2,
                opacity: 0,
              }}

              transition={{
                duration: 0.8,
              }}

              className="
                w-32 sm:w-48 md:w-[420px]
              "
            />

          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎯 MAIN HERO */}
      {!showIntro && (

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="
            relative z-10
            w-full
            max-w-6xl
          "
        >

          {/* 🔥 SMALL LOGO */}
          <motion.img
            src={logo_2}
            alt="logo"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 0.9,
              y: 0,
            }}

            transition={{
              delay: 0.2,
            }}

           className="
  h-28 sm:h-24 md:h-36 lg:h-40
  mx-auto
  mb-5 sm:mb-7 md:mb-8
  object-contain
"
          />

          {/* 🔥 HEADLINE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.3,
            }}

           className="
  text-[24px]
  sm:text-[48px]
  md:text-[72px]
  lg:text-[86px]
              font-semibold
              leading-[1.05]
              tracking-[-0.03em]
              px-1
            "
          >
            If you’re not standing out,
            <br />
            you’re being ignored.
          </motion.h1>

          {/* 🔥 SUBTEXT */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.45,
            }}

            className="
              mt-4 sm:mt-6
              text-gray-400
              max-w-xs sm:max-w-xl md:max-w-2xl
              mx-auto
              text-sm sm:text-lg md:text-xl
              leading-relaxed
              px-2
            "
          >
            We create content people
            notice, remember, and
            engage with.
          </motion.p>

          {/* 🔥 BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.6,
            }}

            className="
              mt-7 sm:mt-8 md:mt-10
              flex flex-col sm:flex-row
              gap-3 sm:gap-4
              justify-center
              items-center
            "
          >

            {/* CTA */}
            <button
              onClick={() => {

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

                navigate("/startproject");
              }}

              className="
                w-full sm:w-auto
                px-6 sm:px-7 md:px-8
                py-3 sm:py-3.5
                bg-white text-black
                rounded-full
                hover:scale-105
                active:scale-95
                transition
                text-sm sm:text-base
                font-medium
                shadow-[0_0_40px_rgba(255,255,255,0.15)]
              "
            >
              Start Your Project
            </button>

            {/* VIEW WORK */}
            <button
              onClick={() => {

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

                navigate("/projects");
              }}

              className="
                w-full sm:w-auto
                px-6 sm:px-7 md:px-8
                py-3 sm:py-3.5
                border border-white/20
                rounded-full
                hover:bg-white/10
                active:scale-95
                transition
                text-sm sm:text-base
                backdrop-blur-md
              "
            >
              View Work
            </button>

          </motion.div>

        </motion.div>
      )}
    </section>
  );
}