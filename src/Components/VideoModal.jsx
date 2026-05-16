import { motion } from "framer-motion";

const liveSite = {
  title: "Vaidyaco",
  image: "/web.png",
  link: "/vaidyaco.in",
};

const concept = {
  title: "Educational Concept Website",
  image: "/soit.png",
};

export default function WebsiteShowcase() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">

      {/* 🌈 BACKGROUND DRAMA */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-[1000px] h-[1000px] bg-purple-600/30 blur-[180px] top-[-300px] left-[-200px]"
        />
        <motion.div
          animate={{ x: [0, -70, 70, 0], y: [0, 70, -70, 0] }}
          transition={{ duration: 24, repeat: Infinity }}
          className="absolute w-[1000px] h-[1000px] bg-pink-500/30 blur-[180px] bottom-[-300px] right-[-200px]"
        />
      </div>

      {/* 🔥 HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[40px] md:text-[80px] font-bold mb-16 text-center"
        >
          <span className="text-white/70">Featured</span>{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Website
          </span>
        </motion.h1>

        {/* 🖥️ LIVE WEBSITE */}
        <motion.a
          href={liveSite.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          className="w-full max-w-[1100px]"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-[0_50px_150px_rgba(0,0,0,0.7)] border border-white/10">

            {/* Browser UI */}
            <div className="h-10 bg-black/80 flex items-center px-4 gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            {/* Scroll Preview */}
            <motion.img
              src={liveSite.image}
              className="w-full"
              animate={{ y: ["0%", "-55%", "0%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Text */}
            <div className="absolute bottom-8 left-8">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {liveSite.title}
              </h2>
              <p className="text-white/60">Live Website</p>
            </div>
          </div>
        </motion.a>
      </section>

      {/* 💡 CONCEPT CASE STUDY */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Concept Exploration
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-white/70 mb-4">
              A design-first approach to building modern web experiences.
            </p>

            <p className="text-white/50 text-sm">
              Crafted as a concept project focusing on UI clarity,
              smooth interactions, and scalable layouts.
            </p>

            <div className="mt-6 text-xs text-white/40">
              Concept Website • UI/UX • Frontend
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl"
          >
            <motion.img
              src={concept.image}
              className="w-full"
              animate={{ y: ["0%", "-60%", "0%"] }}
              transition={{ duration: 12, repeat: Infinity }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ✨ CLOSING DRAMA */}
      <section className="h-[60vh] flex items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            More Experiences Coming Soon
          </h3>

          <p className="text-white/50">
            We are continuously building and refining digital products.
          </p>
        </motion.div>
      </section>
    </div>
  );
}