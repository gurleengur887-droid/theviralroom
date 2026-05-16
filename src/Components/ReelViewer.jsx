import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

export default function ReelViewer({
  items = [],
  startIndex = 0,
  onClose,
}) {

  const safeItems = Array.isArray(items)
    ? items
    : [];

  const [index, setIndex] = useState(
    safeItems.length > 0
      ? startIndex
      : 0
  );

  const [isPlaying, setIsPlaying] =
    useState(true);

  const [isMuted, setIsMuted] =
    useState(true);

  const videoRef = useRef(null);

  const dragX = useMotionValue(0);

  const hintOpacity = useTransform(
    dragX,
    [-100, 0, 100],
    [0, 1, 0]
  );

  const currentItem =
    safeItems[index] || {};

  useEffect(() => {

    if (!safeItems.length) return;

    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;

    video.muted = isMuted;

    video.play().catch(() => {});

    setIsPlaying(true);

 }, [index, isMuted, safeItems.length]);

  const next = () => {

    if (
      index <
      safeItems.length - 1
    ) {
      setIndex((i) => i + 1);
    }
  };

  const prev = () => {

    if (index > 0) {
      setIndex((i) => i - 1);
    }
  };

  const togglePlay = () => {

    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {

      video.play();

      setIsPlaying(true);

    } else {

      video.pause();

      setIsPlaying(false);
    }
  };

  const toggleMute = () => {

    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;

    setIsMuted(video.muted);
  };

  if (!safeItems.length)
    return null;

  return (
    <div
      className="
        fixed inset-0
        z-[9999]

        flex flex-col
        items-center justify-center

        gap-3 sm:gap-4

        overflow-hidden

        px-3 sm:px-4
        py-4 sm:py-6
      "
    >

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.25),transparent_40%)]" />

      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-[80px]" />

      {/* ❌ CLOSE */}
      <button
        onClick={onClose}

        className="
          absolute
          top-4 right-4
          sm:top-6 sm:right-6

          text-white

          text-lg sm:text-xl

          z-50

          w-10 h-10
          rounded-full

          bg-black/30
          backdrop-blur-md

          border border-white/10
        "
      >
        ✕
      </button>

      <AnimatePresence mode="wait">

        <motion.div
          key={index}

          className="
            relative

            w-full

            max-w-[92vw]
            sm:max-w-[340px]

            aspect-[9/16]
          "

          initial={{
            opacity: 0,
            scale: 0.95,
            x: 120,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}

          exit={{
            opacity: 0,
            scale: 0.95,
            x: -120,
          }}

          transition={{
            duration: 0.35,
          }}

          drag="x"

          style={{ x: dragX }}

          dragElastic={0.7}

          onDragEnd={(e, info) => {

            if (
              info.offset.x < -80
            ) next();

            if (
              info.offset.x > 80
            ) prev();

            dragX.set(0);
          }}
        >

          {/* 🎬 VIDEO */}
          <video
            ref={videoRef}

            src={currentItem.video}

            className="
              w-full h-full
              object-cover

              rounded-2xl sm:rounded-xl
            "

            playsInline
            autoPlay
            muted={isMuted}

            onClick={togglePlay}

            onEnded={next}
          />

          {/* ▶ PLAY ICON */}
          {!isPlaying && (

            <div
              className="
                absolute inset-0
                flex items-center justify-center

                text-white

                text-5xl sm:text-6xl
              "
            >
              ▶
            </div>
          )}

          {/* 🔊 MUTE */}
          <button
            onClick={toggleMute}

            className="
              absolute

              bottom-4 right-3
              sm:bottom-6 sm:right-4

              text-white

              text-sm sm:text-lg

              bg-black/40

              px-3 py-1

              rounded-full

              backdrop-blur
            "
          >
            {isMuted
              ? "🔇"
              : "🔊"}
          </button>

          {/* ⏯ PLAY */}
          <div
            className="
              absolute

              bottom-4 left-3
              sm:bottom-6 sm:left-4
            "
          >

            <button
              onClick={togglePlay}

              className="
                bg-white/20

                px-4 py-2

                rounded-full

                text-white

                text-sm sm:text-base

                backdrop-blur
              "
            >
              {isPlaying
                ? "Pause"
                : "Play"}
            </button>

          </div>

          {/* 👉 SWIPE HINT */}
          <motion.div
            style={{
              opacity: hintOpacity,
            }}

            className="
              absolute

              bottom-20
              sm:top-1/2

              left-1/2
              sm:left-auto

              sm:right-[-110px]
              md:right-[-140px]

              -translate-x-1/2
              sm:translate-x-0

              sm:-translate-y-1/2

              z-40
            "
          >

            <motion.div
              onClick={next}

              animate={{
                x: [0, 12, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}

              className="
                flex items-center gap-2

                px-4 py-2

                rounded-full

                bg-white/15

                backdrop-blur-lg

                border border-white/25

                text-white text-xs sm:text-sm
                font-medium

                shadow-xl

                cursor-pointer

                hover:bg-white/25

                active:scale-95
              "
            >

              <span>
                Swipe Right
              </span>

              <span className="text-lg">
                →
              </span>

            </motion.div>
          </motion.div>

          {/* 📊 COUNT */}
          <div
            className="
              absolute

              top-3 left-3
              sm:top-4 sm:left-4

              text-white/70

              text-xs sm:text-sm
            "
          >
            {index + 1} /
            {" "}
            {safeItems.length}
          </div>

          {/* 🌫️ OVERLAY */}
          <div
            className="
              absolute inset-0

              bg-gradient-to-t
              from-black/60
              via-transparent
              to-transparent

              rounded-2xl sm:rounded-xl

              pointer-events-none
            "
          />

        </motion.div>
      </AnimatePresence>

      {/* 🎬 TITLE */}
      {currentItem?.title && (

        <motion.div
          key={index}

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}

          className="
            text-center

            px-4 sm:px-6

            max-w-[95vw]
          "
        >

          <div
            className="
              relative inline-block

              px-5 sm:px-6
              py-2

              rounded-2xl

              bg-black/30

              backdrop-blur-xl

              border border-white/20

              shadow-2xl
            "
          >

            <div
              className="
                absolute inset-0

                rounded-2xl

                bg-purple-500/20

                blur-xl

                opacity-60
              "
            />

            <p
              className="
                relative

                text-sm sm:text-base md:text-lg

                font-semibold

                tracking-wide

                bg-gradient-to-r
                from-purple-300
                via-pink-300
                to-white

                bg-clip-text
                text-transparent
              "
            >
              {currentItem.title}
            </p>

          </div>

        </motion.div>
      )}

    </div>
  );
}