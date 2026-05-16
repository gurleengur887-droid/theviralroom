import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative py-24 sm:py-28 md:py-36 px-4 sm:px-6 text-center overflow-hidden">

      {/* 🔮 Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-purple-600/20 blur-[120px] rounded-full top-[10%] left-[10%] sm:left-[20%]" />
        <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-blue-500/20 blur-[120px] rounded-full bottom-[10%] right-[10%] sm:right-[20%]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
       viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto"
      >

        {/* 🔥 Badge */}
        <div className="mb-4 sm:mb-6 inline-block px-3 sm:px-4 py-1 border border-white/10 rounded-full text-xs sm:text-sm text-white/60 backdrop-blur-md">
          🚀 Content that performs
        </div>

        {/* 🎯 Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight tracking-tight">
          Everyone is posting. <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Very few are growing.
          </span>
        </h2>

        {/* ✨ Subtext */}
        <p className="mt-5 sm:mt-6 md:mt-8 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
          We help brands cut through the noise with content that actually performs.
          From idea to execution — we don’t just create, we build digital authority.
        </p>

      </motion.div>
    </section>
  );
}