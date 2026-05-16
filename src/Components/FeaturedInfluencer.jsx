import React, { useEffect, useState } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturedInfluencer() {

  const [count, setCount] =
    useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const [isMobile, setIsMobile] =
    useState(false);

  /* 📱 SCREEN DETECTION */
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

  /* 🔢 COUNTER */
  useEffect(() => {

    if (!isInView) return;

    let start = 0;

    const end = 65;

    const duration = 1200;

    let startTime = null;

    const animate = (timestamp) => {

      if (!startTime)
        startTime = timestamp;

      const progress =
        timestamp - startTime;

      const value = Math.min(
        (progress / duration) * end,
        end
      );

      setCount(Math.floor(value));

      if (progress < duration) {
        requestAnimationFrame(
          animate
        );
      }
    };

    requestAnimationFrame(
      animate
    );

  }, [isInView]);

  /* 🌀 PARALLAX */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(
    y,
    [-50, 50],
    [8, -8]
  );

  const rotateY = useTransform(
    x,
    [-50, 50],
    [-8, 8]
  );

  const handleMouseMove = (e) => {

    if (isMobile) return;

    const rect =
      e.currentTarget.getBoundingClientRect();

    x.set(
      e.clientX -
        rect.left -
        rect.width / 2
    );

    y.set(
      e.clientY -
        rect.top -
        rect.height / 2
    );
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="
        relative
        py-20 sm:py-24 md:py-32
        px-4 sm:px-6 md:px-16
        overflow-hidden
      "
    >

      {/* 🌫️ BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            w-[500px] h-[500px]
            bg-purple-600/20
            blur-[160px]
            top-[-150px]
            left-[-150px]
          "
        />

        <div
          className="
            absolute
            w-[500px] h-[500px]
            bg-pink-500/20
            blur-[160px]
            bottom-[-150px]
            right-[-150px]
          "
        />

      </div>

      {/* 🔥 HEADING */}
      <h2
        className="
          text-[34px]
          sm:text-[48px]
          md:text-[72px]
          font-bold
          mb-12 sm:mb-16
          text-center md:text-left
        "
      >

        <span className="text-white/70">
          Featured
        </span>{" "}

        <span
          className="
            bg-gradient-to-r
            from-purple-400
            via-pink-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          Influencer
        </span>

      </h2>

      <div
        className="
          grid
          grid-cols-1 md:grid-cols-2
          gap-14
          items-center
        "
      >

        {/* 🌀 IMAGE */}
        <motion.div
          className="
            flex
            justify-center
            md:justify-start
          "

          onMouseMove={
            handleMouseMove
          }

          onMouseLeave={
            handleMouseLeave
          }

          style={{
            perspective: 1000,
          }}
        >

          <motion.div
            style={{
              rotateX:
                isMobile
                  ? 0
                  : rotateX,

              rotateY:
                isMobile
                  ? 0
                  : rotateY,
            }}

            className="
              relative
              w-[220px]
              sm:w-[260px]
              md:w-[300px]
              aspect-square
            "
          >

            {/* OUTER RING */}
            <motion.div
              className="
                absolute inset-0
                rounded-full
                border border-white/10
              "

              animate={{
                rotate: 360,
              }}

              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            />

            {/* INNER RING */}
            <motion.div
              className="
                absolute inset-4
                rounded-full
                border border-white/5
              "

              animate={{
                rotate: -360,
              }}

              transition={{
                repeat: Infinity,
                duration: 26,
                ease: "linear",
              }}
            />

            {/* IMAGE */}
            <div
              className="
                absolute inset-6
                rounded-full
                overflow-hidden
                shadow-[0_0_100px_rgba(168,85,247,0.2)]
              "
            >

              <img
                src="/narinder.PNG"
                alt="Narinder"

                className="
                  w-full h-full
                  object-cover
                "
              />

              {/* 💡 LIGHT SWEEP */}
              <motion.div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                "

                animate={{
                  x: [
                    "-120%",
                    "120%",
                  ],
                }}

                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* 🧠 CONTENT */}
        <div
          className="
            text-center
            md:text-left
            space-y-5 sm:space-y-6
          "
        >

          <a
            href="https://www.instagram.com/narindersinghbirdi"

            target="_blank"

            rel="noopener noreferrer"

            className="
              text-white/50
              text-sm
              hover:text-white
              transition
            "
          >
            @narindersinghbirdi ↗
          </a>

          {/* 🔢 COUNT */}
          <h3
            ref={ref}

            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              tracking-tight
            "
          >
            {count}K+ Followers
          </h3>

          <p
            className="
              text-white/50
              max-w-md
              mx-auto md:mx-0
              leading-relaxed
              text-sm sm:text-base
            "
          >
            Driving impactful engagement
            through authentic
            storytelling and
            high-conversion content
            in influencer marketing.
          </p>

          {/* STATS */}
          <div
            className="
              flex flex-wrap
              justify-center
              md:justify-start
              gap-3
            "
          >

            {[
              "High Engagement",
              "Reels Expert",
              "Brand Collabs",
            ].map((item, i) => (

              <motion.div
                key={i}

                whileHover={{
                  scale: 1.05,
                }}

                className="
                  px-4 py-2
                  rounded-full
                  bg-white/5
                  border border-white/10
                  text-xs sm:text-sm
                  backdrop-blur-md
                "
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="https://www.instagram.com/narindersinghbirdi"

            target="_blank"

            rel="noopener noreferrer"

            whileHover={{
              scale: 1.05,
            }}

            whileTap={{
              scale: 0.95,
            }}

            className="
              inline-block
              mt-6
              px-6 sm:px-7
              py-3
              rounded-full
              border border-white/20
              hover:bg-white
              hover:text-black
              transition
              text-sm sm:text-base
            "
          >
            View Profile →
          </motion.a>

        </div>
      </div>
    </section>
  );
}