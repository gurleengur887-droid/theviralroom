import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const services = [
  {
    title: "Content Creation",
    desc: "Scroll-stopping content designed to grab attention instantly.",
  },
  {
    title: "Videography & Shoots",
    desc: "Cinematic. Clean. Impactful. We create visuals that elevate your brand.",
  },
  {
    title: "Photography",
    desc: "Premium imagery that builds trust and strong first impressions.",
  },
  {
    title: "Graphic Designing",
    desc: "Bold visuals that make your brand unforgettable.",
  },
  {
    title: "Content Writing",
    desc: "Words that connect, engage, and convert.",
  },
  {
    title: "Website Development",
    desc: "High-performing websites built to convert visitors into clients.",
  },
  {
    title: "Social Media Management",
    desc: "Consistent presence that drives engagement and growth.",
  },
  {
    title: "Content Strategy",
    desc: "We plan what to post, when to post, and how to grow.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Services() {

  const [mouse, setMouse] =
    useState({ x: 0, y: 0 });

  const [isDesktop, setIsDesktop] =
    useState(true);

  useEffect(() => {

    const handleResize = () => {
      setIsDesktop(
        window.innerWidth > 768
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

  return (
    <section
      className="
        relative

        py-20 sm:py-32 lg:py-40

        px-4 sm:px-6

        overflow-hidden
      "
    >

      {/* 🔮 Background glow */}
      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute

            w-[320px] h-[320px]
            sm:w-[600px] sm:h-[600px]

            bg-purple-600/20

            blur-[120px]
            sm:blur-[160px]

            rounded-full

            top-[5%]
            left-[5%]
          "
        />

        <div
          className="
            absolute

            w-[280px] h-[280px]
            sm:w-[500px] sm:h-[500px]

            bg-blue-500/20

            blur-[120px]
            sm:blur-[160px]

            rounded-full

            bottom-[5%]
            right-[5%]
          "
        />

      </div>

      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.9,
        }}

        viewport={{ once: true }}

        className="
          text-center

          mb-14
          sm:mb-20
          lg:mb-24
        "
      >

        <h2
          className="
            text-[32px]
            sm:text-4xl
            md:text-5xl
            lg:text-6xl

            font-semibold

            tracking-tight

            leading-tight
          "
        >
          What We Do
        </h2>

        <p
          className="
            text-gray-400

            mt-4 sm:mt-6

            text-sm
            sm:text-lg

            max-w-[300px]
            sm:max-w-none

            mx-auto
          "
        >
          Everything you need
          to dominate digitally.
        </p>

      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}

        initial="hidden"

        whileInView="show"

        viewport={{ once: true }}

        className="
          grid

          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4

          gap-5
          sm:gap-10
          lg:gap-12

          max-w-6xl
          mx-auto
        "
      >

        {services.map((service, i) => (

          <motion.div
            key={i}

            variants={card}

            onMouseMove={(e) => {

              if (!isDesktop) return;

              const rect =
                e.currentTarget.getBoundingClientRect();

              setMouse({
                x:
                  e.clientX - rect.left,

                y:
                  e.clientY - rect.top,
              });
            }}

            whileHover={
              isDesktop
                ? { scale: 1.05 }
                : {}
            }

            whileTap={{
              scale: 0.97,
            }}

            className="
              group
              relative

              p-5
              sm:p-6

              rounded-[26px]
              sm:rounded-2xl

              border border-white/5

              bg-gradient-to-b
              from-white/5
              to-transparent

              backdrop-blur-xl

              overflow-hidden

              transition-all
              duration-500

              min-h-[220px]
              sm:min-h-0

              shadow-[0_10px_40px_rgba(0,0,0,0.25)]

              hover:shadow-[0_20px_70px_rgba(168,85,247,0.18)]
            "

            style={
              isDesktop
                ? {
                    transform: `rotateX(${(mouse.y - 120) / 30}deg) rotateY(${-(mouse.x - 120) / 30}deg)`,
                  }
                : {}
            }
          >

            {/* 🔥 Mouse glow */}
            {isDesktop && (

              <div
                className="
                  pointer-events-none
                  absolute

                  w-40 h-40

                  bg-purple-500/20

                  blur-3xl

                  rounded-full

                  opacity-0
                  group-hover:opacity-100

                  transition duration-300
                "

                style={{
                  left: mouse.x - 80,
                  top: mouse.y - 80,
                }}
              />
            )}

            {/* 📱 MOBILE GLOW */}
            {!isDesktop && (

              <div
                className="
                  absolute inset-0

                  bg-gradient-to-br
                  from-purple-500/10
                  via-transparent
                  to-blue-500/10
                "
              />
            )}

            {/* 🔥 Soft glow */}
            <div
              className="
                absolute inset-0

                opacity-0
                group-hover:opacity-100

                transition duration-500

                bg-gradient-to-r
                from-purple-500/10
                via-blue-500/10
                to-transparent

                blur-2xl
              "
            />

            {/* Accent line */}
            <div
              className="
                h-[2px]

                w-10
                group-hover:w-16

                bg-gradient-to-r
                from-purple-400
                to-blue-400

                mb-4

                transition-all
                duration-500
              "
            />

            {/* Title */}
            <h3
              className="
                text-[18px]
                sm:text-lg

                font-medium

                mb-3

                leading-snug

                group-hover:bg-gradient-to-r
                group-hover:from-purple-400
                group-hover:to-blue-400

                group-hover:bg-clip-text
                group-hover:text-transparent

                transition
                duration-500
              "
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-gray-500

                text-[14px]
                sm:text-[14px]

                leading-relaxed

                max-w-full
                sm:max-w-[220px]
              "
            >
              {service.desc}
            </p>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}