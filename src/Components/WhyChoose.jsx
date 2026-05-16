import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden">

      {/* 🔮 Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-purple-600/20 blur-[160px] rounded-full top-[10%] left-[10%] sm:left-[20%]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16 md:mb-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Why Choose Us
        </h2>
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
          Not just services — a system that drives results.
        </p>
      </motion.div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="order-2 md:order-1 group relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
        >
          <div className="h-[3px] w-10 bg-gradient-to-r from-purple-400 to-blue-400 mb-4 sm:mb-5 group-hover:w-16 transition-all duration-500" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            Attention-First Approach
          </h3>
          <p className="text-gray-400 text-sm">
            We don’t create content to fill space—we create to capture attention instantly.
          </p>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-2xl" />
        </motion.div>

        {/* 🔥 CENTER FEATURE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.07 }}
          className="order-1 md:order-2 group relative p-6 sm:p-8 rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl overflow-hidden shadow-2xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-transparent blur-3xl" />

          <div className="h-[4px] w-16 bg-gradient-to-r from-purple-400 to-blue-400 mb-5 sm:mb-6 group-hover:w-24 transition-all duration-500" />

          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Strategy + Execution
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            From idea to execution, everything is built with purpose and performance in mind.
          </p>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
         viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="order-3 group relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
        >
          <div className="h-[3px] w-10 bg-gradient-to-r from-purple-400 to-blue-400 mb-4 sm:mb-5 group-hover:w-16 transition-all duration-500" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            Growth-Focused Mindset
          </h3>
          <p className="text-gray-400 text-sm">
            We build brands that grow consistently—not just content that looks good.
          </p>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-2xl" />
        </motion.div>

      </div>
    </section>
  );
}