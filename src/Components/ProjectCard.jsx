import { useState, useRef, useEffect } from "react";
import HoverButton from "./HoverButton";
import { motion } from "framer-motion";

// 🎬 PREVIEW VIDEOS
import contentVideo from "../Assets/Videos/edu.mp4";
import shootsVideo from "../Assets/Videos/event.mp4";

export default function ProjectCard({
  title,
  image,
  onClick,
}) {

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const [hover, setHover] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(false);

  const cardRef = useRef(null);

  // 🔊 SOUND CONTROL
  const hoverSoundRef =
    useRef(null);

  const hasPlayed =
    useRef(false);

  /* 📱 SCREEN DETECTION */
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

  const playHoverSound = () => {

    // ❌ disable sound on mobile
    if (isMobile) return;

    if (!hoverSoundRef.current) {

      hoverSoundRef.current =
        new Audio("/hover.mp3");

      hoverSoundRef.current.volume =
        0.15;
    }

    hoverSoundRef.current.currentTime =
      0;

    hoverSoundRef.current.playbackRate =
      0.95 + Math.random() * 0.1;

    hoverSoundRef.current
      .play()
      .catch(() => {});
  };

  const handleMove = (e) => {

    // ❌ disable heavy mouse tracking on mobile
    if (isMobile) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    setPos((prev) => ({
      x:
        prev.x +
        (x - prev.x) * 0.15,

      y:
        prev.y +
        (y - prev.y) * 0.15,
    }));
  };

  const rect =
    cardRef.current?.getBoundingClientRect();

  const centerX =
    rect ? rect.width / 2 : 200;

  const centerY =
    rect ? rect.height / 2 : 200;

  const rotateX =
    (pos.y - centerY) / 25;

  const rotateY =
    (centerX - pos.x) / 25;

  // 🎬 video logic
  const getVideo = () => {

    if (title === "Content")
      return contentVideo;

    if (title === "Shoots")
      return shootsVideo;

    return null;
  };

  const videoSrc = getVideo();

  const isWideCard =
    title === "Website Development" ||
    title === "Social Media";

  return (
    <motion.div
      ref={cardRef}

      onMouseEnter={() => {

        if (isMobile) return;

        setHover(true);

        if (!hasPlayed.current) {

          playHoverSound();

          hasPlayed.current = true;
        }
      }}

      onMouseLeave={() => {

        setHover(false);

        hasPlayed.current = false;
      }}

      onMouseMove={handleMove}

      onClick={onClick}

      animate={{

        y:
          isMobile
            ? [0, -8, 0]
            : 0,

        rotateX:
          hover && !isMobile
            ? rotateX
            : 0,

        rotateY:
          hover && !isMobile
            ? rotateY
            : 0,

        scale:
          hover && !isMobile
            ? 1.05
            : 1,
      }}

      whileTap={{
        scale: 0.98,
      }}

      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}

      className="
        relative
        h-full
        w-full

        rounded-[28px]
        md:rounded-2xl

        border border-white/10

        bg-white/[0.03]

        backdrop-blur-xl

        shadow-[0_20px_80px_rgba(0,0,0,0.45)]

        overflow-hidden
        cursor-pointer
        group
        perspective-1000

        min-h-[320px]
        sm:min-h-[420px]
        md:min-h-0
      "

      style={{
        transformStyle: "preserve-3d",
      }}
    >

      {/* 🔥 BACKGROUND FILL */}
      {isWideCard && (

        <motion.img
          src={image}
          alt=""

          className="
            absolute inset-0
            w-full h-full
            object-cover
            scale-125
            blur-3xl
            opacity-70
          "
        />
      )}

      {/* 📱 MOBILE GLOW */}
      {isMobile && (

        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-purple-500/20
            via-transparent
            to-pink-500/20
            z-[1]
          "
        />
      )}

      {/* 🖼 MAIN IMAGE */}
     {/* 🖼 MAIN IMAGE */}
<motion.img
  src={image}
  alt={title}

  className={`
    absolute inset-0
    w-full h-full

    ${
      isMobile
        ? "object-fill"
        : isWideCard
        ? "object-contain"
        : "object-cover"
    }
  `}

  animate={{
    scale:
      hover && !isMobile
        ? 1.1
        : 1,
  }}

  transition={{
    duration: 0.6,
  }}
/>

      {/* 🎬 VIDEO */}
      {videoSrc && (

        <motion.video
          src={videoSrc}

          autoPlay
          muted
          loop
          playsInline

          className="
            absolute inset-0
            w-full h-full
            object-cover
          "

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity:
              hover && !isMobile
                ? 0.75
                : 0,
          }}

          transition={{
            duration: 0.4,
          }}
        />
      )}

      {/* 🌫️ OVERLAY */}
      <div
        className="
          absolute inset-0

          bg-gradient-to-t
          from-black/80
          via-black/30
          to-transparent

          opacity-90
          group-hover:opacity-100

          transition duration-300
        "
      />

      {/* 🔥 CURSOR GLOW */}
      {!isMobile && (

        <motion.div
          className="
            absolute inset-0
            opacity-0
          "

          animate={{
            opacity:
              hover ? 1 : 0,
          }}

          transition={{
            duration: 0.4,
          }}

          style={{
            background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.15), transparent 60%)`,
          }}
        />
      )}

      {/* ✨ DESIGN SHIMMER */}
      {title === "Designs" && !isMobile && (

        <motion.div
          className="
            absolute inset-0
          "

          animate={{
            opacity:
              hover ? 1 : 0,
          }}

          transition={{
            duration: 0.4,
          }}

          style={{
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2), transparent 70%)",
          }}
        />
      )}

      {/* 🧲 VIEW BUTTON */}
      {!isMobile && (
        <HoverButton
          x={pos.x}
          y={pos.y}
          visible={hover}
        />
      )}

      {/* 📱 TAP INDICATOR */}
      {isMobile && (

        <motion.div

          animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, -3, 0],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
          }}

          className="
            absolute bottom-4 left-1/2
            -translate-x-1/2
            z-20

            px-4 py-1.5

            rounded-full

            bg-black/40
            backdrop-blur-md

            border border-white/10

            text-[10px]
            tracking-[2px]
            uppercase
            text-white/80
          "
        >
          Tap To Explore
        </motion.div>
      )}

      {/* ✨ LIGHT SWEEP */}
      <motion.div
        className="
          absolute inset-0
          pointer-events-none
        "

        animate={{
          opacity:
            hover && !isMobile
              ? 1
              : 0,
        }}

        transition={{
          duration: 0.4,
        }}
      >

        <div
          className="
            absolute
            w-[200%]
            h-[2px]

            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent

            rotate-12
            top-1/2
            -left-1/2
            blur-sm
          "
        />

      </motion.div>
    </motion.div>
  );
}