import ProjectCard from "../Components/ProjectCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ FIXED IMPORTS (added .PNG)
import shoot_thumbnail from "../Assets/Images/shoot_thumbnail.PNG";
import content_thumbnail from "../Assets/Images/content_thumbnail.PNG";
import design_thumbnail from "../Assets/Images/design_thumbnail.PNG";
import web_thumbnail from "../Assets/Images/web_thumbnail.PNG";
import social_thumbnail from "../Assets/Images/social_thumbnail.PNG";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen text-white overflow-hidden px-6 md:px-20 py-24"
    >
      {/* 🌫️ BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[150px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[600px] h-[600px] bg-pink-500/20 blur-[150px] bottom-[-150px] right-[-150px]" />

        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* 🔥 HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-28 relative"
      >
        <h1 className="text-[70px] md:text-[110px] font-bold leading-[0.85] tracking-tight relative">
          <span className="absolute text-white/5 blur-sm -z-10">
            WORK
          </span>

          <span className="block text-white/70">Our</span>

          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Work
          </span>
        </h1>

        <div className="w-40 h-[3px] bg-gradient-to-r from-purple-400 to-pink-500 mt-6 blur-[2px]" />
      </motion.div>

      {/* 🔥 GRID */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-6 gap-10 auto-rows-[260px]"
      >
        {/* BIG HERO */}
        <motion.div variants={cardAnim} className="md:col-span-4 md:row-span-2">
          <ProjectCard
            title="Content"
            image={content_thumbnail} // ✅ UPDATED
            onClick={() => navigate("/projects/content")}
          />
        </motion.div>

        {/* SIDE */}
        <motion.div variants={cardAnim} className="md:col-span-2">
          <ProjectCard
            title="Designs"
            image={design_thumbnail} // ✅ UPDATED
            onClick={() => navigate("/projects/design")}
          />
        </motion.div>

        <motion.div variants={cardAnim} className="md:col-span-2">
          <ProjectCard
            title="Shoots"
            image={shoot_thumbnail} // ✅ UPDATED
            onClick={() => navigate("/projects/shoots")}
          />
        </motion.div>

        {/* BOTTOM */}
        <motion.div
  variants={cardAnim}
  className="md:col-span-3 aspect-[16/9]"
>
          <ProjectCard
            title="Website Development"
            image={web_thumbnail} // ✅ UPDATED
            onClick={() => navigate("/projects/webdev")}
          />
        </motion.div>

       <motion.div
  variants={cardAnim}
  className="md:col-span-3 aspect-[16/9]"
>
          <ProjectCard
            title="Social Media"
            image={social_thumbnail} // ✅ UPDATED
            onClick={() => navigate("/projects/social")}
          />
        </motion.div>
      </motion.div>

      {/* ✨ EXTRA DRAMA */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(600px at 20% 30%, rgba(168,85,247,0.08), transparent)",
            "radial-gradient(600px at 80% 70%, rgba(236,72,153,0.08), transparent)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </motion.div>
  );
}

/* 🔥 CARD ANIMATION */
const cardAnim = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};