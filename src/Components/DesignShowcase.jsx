import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* 🔥 IMPORTS (unchanged) */
import ai1 from "../Assets/Designs/ai_carousel1.jpg";
import ai2 from "../Assets/Designs/ai_carousel2.jpg";
import ai3 from "../Assets/Designs/ai_carousel3.jpg";
import ai4 from "../Assets/Designs/ai_carousel4.jpg";
import ai5 from "../Assets/Designs/ai_carousel5.jpg";

import aiCreative1 from "../Assets/Designs/ai_creative1.jpg";
import aiCreative2 from "../Assets/Designs/ai_creative2.jpg";
import aiCreative3 from "../Assets/Designs/ai_creative3.jpg";

import cbse1 from "../Assets/Designs/cbse_carousel1.jpg";
import cbse2 from "../Assets/Designs/cbse_carousel2.jpg";
import cbse3 from "../Assets/Designs/cbse_carousel3.jpg";

import class1 from "../Assets/Designs/class_carousel1.jpg";
import class2 from "../Assets/Designs/class_carousel2.jpg";
import class3 from "../Assets/Designs/class_carousel3.jpg";

import creative1 from "../Assets/Designs/creative_carousel.jpg";
import creative2 from "../Assets/Designs/creative_carousel2.jpg";
import creative3 from "../Assets/Designs/creative_carousel3.jpg";

import creativeDesign1 from "../Assets/Designs/creative_design1.jpg";
import creativeDesign2 from "../Assets/Designs/creative_design2.jpg";

import edu1 from "../Assets/Designs/edu_carousel1.jpg";
import edu2 from "../Assets/Designs/edu_carousel2.jpg";
import edu3 from "../Assets/Designs/edu_carousel3.jpg";
import edu4 from "../Assets/Designs/edu_carousel4.jpg";
import edu5 from "../Assets/Designs/edu_carousel5.jpg";

import graphic1 from "../Assets/Designs/graphic_design.jpg";
import graphic2 from "../Assets/Designs/graphic_design2.jpg";
import graphic3 from "../Assets/Designs/graphic_design3.jpg";

const data = {
  Education: {
    General: [edu1, edu2, edu3, edu4, edu5],
    CBSE: [cbse1, cbse2, cbse3],
    Classes: [class1, class2, class3],
  },

  "AI Campaigns": {
    Carousel: [ai1, ai2, ai3, ai4, ai5],
    Creative: [aiCreative1, aiCreative2, aiCreative3],
  },

  Creative: {
    Carousel: [creative1, creative2, creative3],
    Designs: [creativeDesign1, creativeDesign2],
    Graphics: [graphic1, graphic2, graphic3],
  },
};

export default function DesignShowcase() {

  const [category, setCategory] =
    useState("Education");

  const [sub, setSub] =
    useState("General");

  const [index, setIndex] =
    useState(0);

  const [hovering, setHovering] =
    useState(false);

  const [tilt, setTilt] =
    useState({ x: 0, y: 0 });

  const [isMobile, setIsMobile] =
    useState(false);

  const containerRef = useRef(null);

  const images = data[category][sub];

  const subTabs = Object.keys(data[category]);

  /* 🔥 SCREEN DETECTION */
  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  /* 🔥 AUTOPLAY */
  useEffect(() => {

    if (hovering) return;

    const interval = setInterval(() => {

      setIndex((prev) =>
        prev < images.length - 1
          ? prev + 1
          : 0
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [images.length, hovering]);

  /* 🔥 3D TILT */
  const handleMouseMove = (e) => {

    if (isMobile) return;

    const rect =
      containerRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (e.clientY - rect.top) /
        rect.height -
      0.5;

    setTilt({
      x: y * 10,
      y: x * 10,
    });
  };

  return (
    <div
      className="
        relative w-full min-h-screen
        text-white
        px-4 sm:px-6 md:px-20
        py-16 sm:py-20 md:py-24
        overflow-hidden
      "
    >

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -40, 40, 0],
          }}

          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
            absolute
            w-[900px] h-[900px]
            bg-purple-600/20
            blur-[160px]
            top-[-200px]
            left-[-200px]
          "
        />

        <motion.div
          animate={{
            x: [0, -60, 60, 0],
            y: [0, 60, -60, 0],
          }}

          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
            absolute
            w-[900px] h-[900px]
            bg-pink-500/20
            blur-[160px]
            bottom-[-200px]
            right-[-200px]
          "
        />

        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      </div>

      {/* 🔥 HEADING */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 60,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        className="
          text-center
          mb-10 sm:mb-12 md:mb-16
          leading-[0.95]
        "
      >

        <span className="text-white/60 text-2xl sm:text-3xl md:text-5xl">
          Graphic
        </span>

        <br />

        <span
          className="
            text-4xl sm:text-5xl md:text-7xl
            font-bold
            bg-gradient-to-r
            from-purple-400
            via-pink-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          Designs
        </span>

      </motion.h1>

      {/* CATEGORY TABS */}
      <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto no-scrollbar px-1">

        <div
          className="
            relative flex gap-1 sm:gap-2
            p-1
            rounded-full
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            min-w-max
          "
        >

          <motion.div
            layoutId="cat"

            className="
              absolute inset-y-1
              rounded-full bg-white
            "

            style={{
              width: `${100 / Object.keys(data).length}%`,
            }}

            animate={{
              x: `${Object.keys(data).indexOf(category) * 100}%`,
            }}
          />

          {Object.keys(data).map((cat) => (

            <button
              key={cat}

              onClick={() => {

                setCategory(cat);

                setSub(
                  Object.keys(data[cat])[0]
                );

                setIndex(0);
              }}

              className={`
                relative z-10
                px-3 sm:px-4 md:px-6
                py-1.5 sm:py-2
                text-xs sm:text-sm md:text-base
                whitespace-nowrap
                transition
                ${
                  category === cat
                    ? "text-black"
                    : "text-white/60"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SUB TABS */}
      <div className="flex justify-center mb-10 sm:mb-12 md:mb-14 overflow-x-auto no-scrollbar px-1">

        <div
          className="
            relative flex gap-1 sm:gap-2
            p-1
            rounded-full
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            min-w-max
          "
        >

          <motion.div
            layoutId="sub"

            className="
              absolute inset-y-1
              rounded-full bg-white/20
            "

            style={{
              width: `${100 / subTabs.length}%`,
            }}

            animate={{
              x: `${subTabs.indexOf(sub) * 100}%`,
            }}
          />

          {subTabs.map((s) => (

            <button
              key={s}

              onClick={() => {
                setSub(s);
                setIndex(0);
              }}

              className={`
                relative z-10
                px-3 sm:px-4 md:px-5
                py-1
                text-[11px] sm:text-sm md:text-base
                whitespace-nowrap
                transition
                ${
                  sub === s
                    ? "text-white"
                    : "text-white/50"
                }
              `}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* 🎬 CAROUSEL */}
      <div
        ref={containerRef}

        onMouseEnter={() =>
          setHovering(true)
        }

        onMouseLeave={() => {
          setHovering(false);

          setTilt({
            x: 0,
            y: 0,
          });
        }}

        onMouseMove={handleMouseMove}

        className="
          relative
          max-w-[95%]
          sm:max-w-[500px]
          md:max-w-[600px]
          mx-auto
        "
      >

        <div
          className="
            relative
            h-[360px]
            sm:h-[500px]
            md:h-[600px]
            flex items-center justify-center
          "

          style={{
            transform: isMobile
              ? "none"
              : `perspective(1200px)
                 rotateX(${tilt.x}deg)
                 rotateY(${tilt.y}deg)`,

            transition:
              "transform 0.2s ease-out",
          }}
        >

          {images.map((img, i) => {

            const offset = i - index;

            return (
              <motion.img
                key={i}

                src={img}

                onClick={() =>
                  setIndex(i)
                }

                className="
                  absolute
                  rounded-2xl sm:rounded-3xl
                  max-h-full max-w-full
                  object-contain
                  cursor-pointer
                  select-none
                "

                animate={{
                  x: offset *
                    (isMobile ? 70 : 140),

                  scale:
                    offset === 0
                      ? isMobile
                        ? 1
                        : 1.08
                      : isMobile
                      ? 0.82
                      : 0.8,

                  opacity:
                    Math.abs(offset) > 2
                      ? 0
                      : offset === 0
                      ? 1
                      : 0.6,

                  rotate: isMobile
                    ? offset * 2
                    : offset * 4,

                  zIndex:
                    20 - Math.abs(offset),

                  filter:
                    offset === 0
                      ? "none"
                      : "blur(3px)",
                }}

                whileHover={
                  isMobile
                    ? {}

                    : offset === 0
                    ? {
                        scale: 1.12,
                        rotateY: 8,
                        rotateX: -5,
                      }

                    : {
                        scale: 0.9,
                      }
                }

                whileTap={{
                  scale: 0.96,
                }}

                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 22,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}