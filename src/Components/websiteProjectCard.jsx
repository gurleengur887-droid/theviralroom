// WebsiteProjectCard.jsx

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useState, useEffect } from "react";

export default function WebsiteProjectCard({
  project,
  index,
}) {

  const [isMobile, setIsMobile] =
    useState(false);

  // ✅ RESPONSIVE DETECTION
  useEffect(() => {

    const handleResize = () => {
      setIsMobile(
        window.innerWidth < 768
      );
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(
      mouseY,
      [-150, 150],
      [8, -8]
    ),

    {
      stiffness: 120,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(
      mouseX,
      [-150, 150],
      [-8, 8]
    ),

    {
      stiffness: 120,
      damping: 20,
    }
  );

  const sheenX = useTransform(
    mouseX,
    [-300, 300],
    ["-120%", "120%"]
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.8,
      }}

      className={`
        grid

        grid-cols-1
        lg:grid-cols-2

        gap-10
        sm:gap-12
        md:gap-16

        items-center

        ${
          index % 2 !== 0
            ? "lg:[&>*:first-child]:order-2"
            : ""
        }
      `}
    >

      {/* PHONE MOCKUP */}
      <div className="flex justify-center">

        <motion.div
          style={
            !isMobile
              ? { rotateX, rotateY }
              : {}
          }

          onMouseMove={(e) => {

            if (isMobile) return;

            const rect =
              e.currentTarget.getBoundingClientRect();

            mouseX.set(
              e.clientX -
                rect.left -
                rect.width / 2
            );

            mouseY.set(
              e.clientY -
                rect.top -
                rect.height / 2
            );
          }}

          onMouseLeave={() => {

            mouseX.set(0);
            mouseY.set(0);
          }}

          className="
            relative
            group

            perspective-[1200px]
          "
        >

          {/* GLOW */}
          <motion.div
            animate={{
              opacity: [0.4, 0.8, 0.4],

              scale: [0.95, 1.05, 0.95],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
            }}

            className="
              absolute inset-0

              bg-gradient-to-r
              from-purple-500/30
              to-pink-500/30

              blur-3xl
            "
          />

          {/* PHONE */}
          <div
            className="
              relative

              w-[220px]
              sm:w-[280px]
              md:w-[340px]

              h-[470px]
              sm:h-[620px]
              md:h-[700px]

              rounded-[2.7rem]
              sm:rounded-[3rem]

              border border-white/10

              bg-black

              shadow-[0_0_100px_rgba(168,85,247,0.18)]

              p-3

              backdrop-blur-xl

              transition-transform
              duration-500

              group-hover:-translate-y-3
            "
          >

            {/* CAMERA */}
            <div
              className="
                absolute

                top-3
                left-1/2

                -translate-x-1/2

                w-24
                sm:w-28

                h-6
                sm:h-7

                rounded-full

                bg-black

                z-20

                border border-white/5
              "
            />

            {/* SCREEN */}
            <div
              className="
                relative

                w-full h-full

                overflow-hidden

                rounded-[2.2rem]
                sm:rounded-[2.5rem]

                bg-black
              "
            >

              <div
                className="
                  absolute inset-0

                  overflow-hidden

                  bg-white
                "
              >

                {/* LIVE WEBSITE */}
                {project.scroll ? (

                  <div className="animate-scroll-slow w-full">

                    <img
                      src={project.image}

                      alt={project.title}

                      className="
                        w-full
                        min-w-full

                        h-auto

                        object-cover
                        object-top

                        block
                      "
                    />

                  </div>

                ) : (

                  /* STATIC WEBSITE */
                  <img
                    src={project.image}

                    alt={project.title}

                    className="
                      w-full h-full

                      object-cover
                      object-top
                    "
                  />

                )}

              </div>

              {/* REFLECTION */}
              {!isMobile && (

                <motion.div
                  style={{ x: sheenX }}

                  className="
                    absolute

                    top-0
                    left-[-120%]

                    w-[60%]
                    h-full

                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent

                    blur-md
                  "
                />
              )}

              {/* GLASS */}
              <div
                className="
                  absolute inset-0

                  bg-gradient-to-br
                  from-white/10
                  via-transparent
                  to-transparent

                  pointer-events-none
                "
              />

            </div>
          </div>
        </motion.div>
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          x: 60,
        }}

        whileInView={{
          opacity: 1,
          x: 0,
        }}

        viewport={{ once: true }}

        transition={{
          duration: 0.7,
        }}

        className="
          text-center
          lg:text-left
        "
      >

        {/* TAG */}
        <div
          className="
            inline-flex
            items-center

            gap-2

            px-4 py-2

            rounded-full

            bg-white/5

            border border-white/10

            text-xs
            sm:text-sm

            text-white/70

            mb-5
            sm:mb-6

            backdrop-blur-xl
          "
        >

          <div
            className={`
              w-2 h-2

              rounded-full

              ${
                project.live === "#"
                  ? "bg-yellow-400"
                  : "bg-green-400 animate-pulse"
              }
            `}
          />

          {project.live === "#"
            ? "Practice Project"
            : "Live Project"}

        </div>

        {/* TITLE */}
        <h3
          className="
            text-[28px]
            sm:text-4xl
            md:text-5xl

            font-bold

            mb-5
            sm:mb-6

            leading-tight
          "
        >
          {project.title}
        </h3>

        {/* DESC */}
        <p
          className="
            text-white/60

            leading-relaxed

            text-sm
            sm:text-base

            mb-8

            max-w-xl

            mx-auto
            lg:mx-0
          "
        >
          {project.description}
        </p>

        {/* FEATURES */}
        <div className="mb-8">

          <h4
            className="
              text-white

              font-semibold

              mb-4

              text-base
              sm:text-lg
            "
          >
            Features
          </h4>

          <div
            className="
              grid

              grid-cols-1
              sm:grid-cols-2

              gap-3

              max-w-lg

              mx-auto
              lg:mx-0
            "
          >

            {project.features.map(
              (feature, i) => (

                <motion.div
                  key={i}

                  whileHover={
                    !isMobile
                      ? { x: 4 }
                      : {}
                  }

                  className="
                    flex items-center

                    justify-center
                    sm:justify-start

                    gap-3

                    text-white/60

                    text-sm
                  "
                >

                  <div
                    className="
                      w-2 h-2

                      rounded-full

                      bg-purple-400
                    "
                  />

                  {feature}

                </motion.div>
              )
            )}

          </div>
        </div>

        {/* TECH STACK */}
        <div className="mb-10">

          <h4
            className="
              text-white

              font-semibold

              mb-4

              text-base
              sm:text-lg
            "
          >
            Built With
          </h4>

          <div
            className="
              flex flex-wrap

              gap-3

              justify-center
              lg:justify-start
            "
          >

            {project.tech.map(
              (item, i) => (

                <motion.div
                  key={i}

                  whileHover={
                    !isMobile
                      ? {
                          scale: 1.08,
                          y: -3,
                        }
                      : {}
                  }

                  className="
                    px-4 py-2

                    rounded-full

                    bg-white/5

                    border border-white/10

                    text-xs
                    sm:text-sm

                    text-white/70

                    backdrop-blur-xl

                    hover:bg-white/10

                    hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]

                    transition
                  "
                >
                  {item}
                </motion.div>
              )
            )}

          </div>
        </div>

        {/* BUTTON */}
        {project.live !== "#" && (

          <div
            className="
              flex

              justify-center
              lg:justify-start
            "
          >

            <motion.a
              whileHover={
                !isMobile
                  ? {
                      scale: 1.05,
                      y: -2,
                    }
                  : {}
              }

              whileTap={{
                scale: 0.96,
              }}

              href={project.live}

              target="_blank"

              rel="noopener noreferrer"

              className="
                px-7 py-3

                rounded-full

                bg-white

                text-black

                text-sm
                sm:text-base

                font-medium

                transition-all
                duration-300

                shadow-[0_0_40px_rgba(255,255,255,0.12)]
              "
            >
              Visit Website
            </motion.a>

          </div>

        )}

      </motion.div>

      {/* SCROLL CSS */}
      <style>{`
        @keyframes scrollSlow {

          0% {
            transform: translateY(0%);
          }

          50% {
            transform: translateY(-55%);
          }

          100% {
            transform: translateY(0%);
          }
        }

        .animate-scroll-slow {
          animation: scrollSlow 16s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
}