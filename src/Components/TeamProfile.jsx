import { useParams } from "react-router-dom";
import { teamMembers } from "./teamData";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect, useState } from "react";

export default function TeamProfile() {

  const { id } = useParams();

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

  // ✅ HOOKS FIRST
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const smx = useSpring(mx, {
    stiffness: 80,
    damping: 20,
  });

  const smy = useSpring(my, {
    stiffness: 80,
    damping: 20,
  });

  const rotateX = useTransform(
    smy,
    [-200, 200],
    [10, -10]
  );

  const rotateY = useTransform(
    smx,
    [-200, 200],
    [-10, 10]
  );

  const sheenX = useTransform(
    smx,
    [-300, 300],
    ["-20%", "120%"]
  );

  // ✅ GET MEMBER
  const member =
    teamMembers[id];

  // ✅ SAFETY CHECK
  if (!member) {

    return (
      <div
        className="
          text-white
          flex items-center justify-center
          h-screen
        "
      >
        Profile Not Found
      </div>
    );
  }

  return (
    <div
      className="
        relative

        min-h-screen

        flex items-center justify-center

        px-4
        sm:px-6
        md:px-16

        py-24
        sm:py-28

        text-white

        overflow-hidden
      "

      onMouseMove={(e) => {

        if (isMobile) return;

        mx.set(
          e.clientX -
            window.innerWidth / 2
        );

        my.set(
          e.clientY -
            window.innerHeight / 2
        );
      }}
    >

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
            absolute

            w-[320px] h-[320px]
            sm:w-[700px] sm:h-[700px]

            bg-purple-600/20

            blur-[120px]
            sm:blur-[160px]

            top-[-120px]
            left-[-120px]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}

          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
            absolute

            w-[320px] h-[320px]
            sm:w-[700px] sm:h-[700px]

            bg-pink-500/20

            blur-[120px]
            sm:blur-[160px]

            bottom-[-120px]
            right-[-120px]
          "
        />

      </div>

      {/* MAIN */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 0.6,
        }}

        className="
          grid

          grid-cols-1
          md:grid-cols-2

          gap-10
          md:gap-14

          items-center

          max-w-6xl
          w-full
        "
      >

        {/* 🖼 IMAGE */}
        <motion.div
          style={
            !isMobile
              ? {
                  rotateX,
                  rotateY,
                }
              : {}
          }

          className="
            flex
            justify-center
            md:justify-start

            perspective-[1200px]
          "
        >

          <div className="relative">

            {/* glow */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}

              transition={{
                duration: 3,
                repeat: Infinity,
              }}

              className="
                absolute inset-0

                bg-purple-500/30

                blur-[50px]
                sm:blur-[70px]

                rounded-3xl
              "
            />

            {/* IMAGE */}
            <img
              src={member.image}
              alt={member.name}

              className={`
                relative

                rounded-3xl

                shadow-[0_30px_120px_rgba(0,0,0,0.9)]

                object-cover

                ${
                  member.name === "Narinder Singh" ||
                  member.name === "Gurleen Kaur"

                    ? "w-[280px] sm:w-[360px] md:w-[430px]"

                    : "w-[240px] sm:w-[300px] md:w-[340px]"
                }
              `}
            />

            {/* sheen */}
            {!isMobile && (

              <motion.div
                style={{ x: sheenX }}

                className="
                  pointer-events-none

                  absolute

                  top-0
                  left-[-40%]

                  h-full
                  w-[60%]

                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent

                  blur-md
                "
              />
            )}

          </div>
        </motion.div>

        {/* 📄 CONTENT */}
        <div
          className="
            space-y-6

            text-center
            md:text-left
          "
        >

          {/* NAME */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            className="
              text-[38px]
              sm:text-5xl
              md:text-6xl

              font-bold

              leading-tight
            "
          >

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
              {member.name}
            </span>

          </motion.h1>

          {/* ROLE */}
          <p
            className="
              text-white/60

              text-base
              sm:text-lg
            "
          >
            {member.role}
          </p>

          {/* DETAILS */}
          <div
            className="
              space-y-3

              text-white/80

              text-sm
              sm:text-base
            "
          >

            <p>
              <span className="text-white/50">
                Qualification:
              </span>{" "}

              {member.qualification}
            </p>

            <p>
              <span className="text-white/50">
                Experience:
              </span>{" "}

              {member.experience}
            </p>

          </div>

          {/* SKILLS */}
          <div
            className="
              flex flex-wrap

              gap-3

              pt-2

              justify-center
              md:justify-start
            "
          >

            {member.skills?.map(
              (skill, i) => (

                <motion.div
                  key={i}

                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}

                  whileTap={{
                    scale: 0.96,
                  }}

                  className="
                    px-4 py-2

                    text-sm

                    rounded-full

                    bg-white/5

                    border border-white/10

                    backdrop-blur-md

                    hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]

                    transition
                  "
                >
                  {skill.name}
                </motion.div>
              )
            )}

          </div>

          {/* BUTTONS */}
          <div
            className="
              flex flex-wrap

              gap-4

              pt-4

              justify-center
              md:justify-start
            "
          >

            {/* EMAIL */}
            {member.contact?.email && (

              <a
                href={`mailto:${member.contact.email}`}

                className="
                  px-6 py-3

                  rounded-full

                  border border-white/20

                  hover:bg-white/10

                  transition

                  text-sm
                  sm:text-base
                "
              >
                Email
              </a>
            )}

            {/* LINKEDIN */}
            {member.contact?.linkedin && (

              <a
                href={member.contact.linkedin}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  px-6 py-3

                  rounded-full

                  border border-white/20

                  hover:bg-white/10

                  transition

                  text-sm
                  sm:text-base
                "
              >
                LinkedIn
              </a>
            )}

          </div>
        </div>
      </motion.div>
    </div>
  );
}