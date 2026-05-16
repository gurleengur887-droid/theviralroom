import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useEffect, useState } from "react";

const accounts = [
  {
    id: "acc1",
    image: "/birdi_ig.png",
    name: "@narindersinghbirdi",
    link: "https://instagram.com/narindersinghbirdi",
    desktop: { x: "-35vw", y: "-10vh", rotate: -12 },
  },

  {
    id: "acc2",
    image: "/aman_ig.png",
    name: "@amanrefrigerations",
    link: "https://instagram.com/amanrefrigerations",
    desktop: { x: "30vw", y: "-5vh", rotate: 10 },
  },

  {
    id: "acc3",
    image: "/kundi_ig.png",
    name: "@thekundiheritage",
    link: "https://instagram.com/thekundiheritage",
    desktop: { x: "-25vw", y: "30vh", rotate: -6 },
  },

  {
    id: "acc4",
    image: "/modern_ig.png",
    name: "@modernrefrigerations",
    link: "https://instagram.com/modernrefrigerations",
    desktop: { x: "25vw", y: "28vh", rotate: 6 },
  },
];

export default function SocialShowcase() {

  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {

    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () =>
      window.removeEventListener("resize", checkScreen);

  }, []);

  useEffect(() => {

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  const rotateX = useTransform(
    mouseY,
    [0, window.innerHeight],
    [8, -8]
  );

  const rotateY = useTransform(
    mouseX,
    [0, window.innerWidth],
    [-8, 8]
  );

  const reflectX = useTransform(
    mouseX,
    [0, window.innerWidth],
    [-50, 50]
  );

  const reflectY = useTransform(
    mouseY,
    [0, window.innerHeight],
    [-50, 50]
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white flex items-center justify-center py-32 md:py-0">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute w-[1000px] h-[1000px] bg-purple-600/30 blur-[200px] top-[-250px] left-[-250px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
          }}
          className="absolute w-[1000px] h-[1000px] bg-pink-500/30 blur-[200px] bottom-[-250px] right-[-250px]"
        />

      </div>

      {/* HEADING */}
      <h1 className="absolute top-12 md:top-16 text-center text-[34px] sm:text-[48px] md:text-[70px] font-bold leading-[0.95] z-30 px-4">

        <span className="text-white/70">
          Accounts
        </span>{" "}

        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          We Manage
        </span>

      </h1>

      {/* MOBILE STACK */}
      {isMobile ? (

        <div className="flex flex-col gap-12 items-center mt-32">

          {accounts.map((acc, i) => (

            <motion.a
              key={acc.id}
              href={acc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative cursor-pointer"

              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}

              initial={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              viewport={{ once: true }}

              transition={{
                delay: i * 0.15,
                duration: 0.6,
              }}

              whileHover={{
                scale: 1.04,
              }}

              whileTap={{
                scale: 0.97,
              }}
            >

              <div className="relative w-[240px] aspect-[9/16] rounded-[42px] bg-[#0a0a0b] shadow-[0_70px_180px_rgba(0,0,0,0.95)] border border-white/10 overflow-hidden">

                {/* glow */}
                <motion.div
                  animate={{
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-white/10 blur-2xl"
                />

                {/* notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-black rounded-b-2xl z-20" />

                <div className="absolute inset-[4px] rounded-[38px] overflow-hidden bg-black">

                  {/* reflection */}
                  <motion.div
                    style={{
                      x: reflectX,
                      y: reflectY,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none"
                  />

                  <img
                    src={acc.image}
                    alt={acc.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 text-sm font-semibold text-white/90">
                    {acc.name}
                  </div>

                </div>
              </div>
            </motion.a>

          ))}

        </div>

      ) : (

        /* DESKTOP FLOATING */
        <>
          {accounts.map((acc, i) => (
            <motion.a
              key={acc.id}
              href={acc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute cursor-pointer"

              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}

              initial={{
                opacity: 0,
                scale: 0.85,
              }}

              animate={{
                opacity: 1,
                x: acc.desktop.x,
                rotate: acc.desktop.rotate,
                y: [
                  acc.desktop.y,
                  `calc(${acc.desktop.y} - 15px)`,
                  acc.desktop.y,
                ],
              }}

              transition={{
                delay: i * 0.2,
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1.5,
              }}

              whileHover={{
                scale: 1.07,
                rotate: 0,
                zIndex: 100,
                y: -10,
              }}

              whileTap={{
                scale: 0.97,
              }}
            >

              <div className="relative w-[290px] aspect-[9/16] rounded-[48px] bg-[#0a0a0b] shadow-[0_70px_180px_rgba(0,0,0,0.95)] border border-white/10 overflow-hidden">

                {/* glow */}
                <motion.div
                  animate={{
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-white/10 blur-2xl"
                />

                {/* notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[26px] bg-black rounded-b-2xl z-20" />

                <div className="absolute inset-[4px] rounded-[42px] overflow-hidden bg-black">

                  {/* reflection */}
                  <motion.div
                    style={{
                      x: reflectX,
                      y: reflectY,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none"
                  />

                  <img
                    src={acc.image}
                    alt={acc.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 text-sm font-semibold text-white/90">
                    {acc.name}
                  </div>

                </div>
              </div>
            </motion.a>
          ))}

          {/* INTERACTION HINT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              absolute left-1/2 top-[58%]
              -translate-x-1/2 -translate-y-1/2
              pointer-events-none
              px-5 py-2.5
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              text-white/80
              text-xs md:text-sm
              tracking-[3px]
              uppercase
              flex items-center gap-2
              z-[999]
            "
          >

            Tap Cards To Explore

            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.div>

          </motion.div>
        </>
      )}
    </div>
  );
}