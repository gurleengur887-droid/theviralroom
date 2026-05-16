import { motion } from "framer-motion";

export default function HoverButton({ x, y, visible }) {
  return (
    <motion.div
      animate={{
        x,
        y,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.5,
      }}
      transition={{
        x: { type: "spring", stiffness: 140, damping: 18 },
        y: { type: "spring", stiffness: 140, damping: 18 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.25 },
      }}
      className="pointer-events-none absolute z-40"
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: visible ? 1 : 0.8 }}
        transition={{ duration: 0.25 }}
        className="relative"
      >
        {/* glow */}
        <div className="absolute inset-0 bg-white/30 blur-xl rounded-full" />

        {/* button */}
        <div className="relative backdrop-blur-lg bg-white/90 text-black px-6 py-2 rounded-full text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          VIEW
        </div>
      </motion.div>
    </motion.div>
  );
}