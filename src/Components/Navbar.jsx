import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo_2 from "../Images/logo_2.PNG";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <img src={logo_2} alt="logo" className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="/services" className="hover:text-white transition">Services</a>
          <a href="/projects" className="hover:text-white transition">Work</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Desktop CTA */}
       <button
  onClick={() => navigate("/startproject")}
  className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
>
  Start Project
</button>

        {/* 🍔 Hamburger (Mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>

      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mx-2"
          >
            <div className="flex flex-col gap-6 text-white text-lg">

              <a onClick={() => setOpen(false)} href="#services">Services</a>
              <a onClick={() => setOpen(false)} href="#work">Work</a>
              <a onClick={() => setOpen(false)} href="#about">About</a>
              <a onClick={() => setOpen(false)} href="#contact">Contact</a>

              {/* Mobile CTA */}
              <button className="mt-4 px-6 py-3 bg-white text-black rounded-full">
                Start Project
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}