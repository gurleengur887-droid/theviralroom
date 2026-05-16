import { motion } from "framer-motion";
import { useState } from "react";

import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

export default function Contact() {

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_j22t923",
        "template_ksvo6po",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
          form_type: "Contact Form",
        },
        "MOpvXOSJBD3N_icRa"
      )
      .then(() => {

        alert("Message sent 🚀");

        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });

      })
      .catch((err) => {
        console.error(err);
        alert("Failed ❌");
      });
  };

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0);

  const handleMove = (e) => {

    if (isTouchDevice) return;

    const rect =
      e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX =
      (y - rect.height / 2) / 18;

    const rotateY =
      (rect.width / 2 - x) / 18;

    setTilt({
      x: rotateX,
      y: rotateY,
    });
  };

  const resetTilt = () => {
    setTilt({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.98,
        filter: "blur(10px)",
      }}

      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}

      exit={{
        opacity: 0,
        scale: 0.98,
        filter: "blur(10px)",
      }}

      transition={{
        duration: 0.6,
      }}

      className="
        relative min-h-screen text-white
        px-4 sm:px-6 md:px-20
        py-20 md:py-24
        overflow-hidden
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[150px] top-[-150px] left-[-150px]" />

        <div className="absolute w-[600px] h-[600px] bg-pink-500/20 blur-[150px] bottom-[-150px] right-[-150px]" />

      </div>

      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        className="mb-14 md:mb-20"
      >

        <h1 className="text-[42px] sm:text-[60px] md:text-[100px] font-bold leading-[0.9] tracking-tight">

          <span className="block text-white/70">
            Let’s
          </span>

          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Talk
          </span>

        </h1>

        <p className="text-white/50 mt-4 max-w-md text-sm sm:text-base leading-relaxed">
          Got an idea, project, or just want to connect?
          Drop your message — we’ll take it from there.
        </p>

      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start [perspective:1000px]">

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
          }}

          className="space-y-5 md:space-y-6"
        >

          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Your Name"

            className="
              w-full bg-white/5
              border border-white/10
              px-4 py-3 md:px-5 md:py-4
              rounded-xl outline-none
              focus:border-purple-400
              focus:bg-white/10
              transition
              text-sm sm:text-base
            "
          />

          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Your Email"

            className="
              w-full bg-white/5
              border border-white/10
              px-4 py-3 md:px-5 md:py-4
              rounded-xl outline-none
              focus:border-purple-400
              focus:bg-white/10
              transition
              text-sm sm:text-base
            "
          />

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"

            className="
              w-full bg-white/5
              border border-white/10
              px-4 py-3 md:px-5 md:py-4
              rounded-xl outline-none
              focus:border-purple-400
              focus:bg-white/10
              transition
              text-sm sm:text-base
              resize-none
            "
          />

          <button
            type="submit"

            className="
              w-full sm:w-auto
              px-6 py-3 md:px-8 md:py-4
              rounded-full
              bg-gradient-to-r
              from-purple-500 to-pink-500
              hover:scale-105
              active:scale-95
              transition
              shadow-lg
              text-sm sm:text-base
            "
          >
            Send Message
          </button>
        </motion.form>

        {/* INFO PANEL */}
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}

          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}

          style={{
            transformStyle: "preserve-3d",
          }}

          initial={{
            opacity: 0,
            x: 60,
          }}

          animate={{
            opacity: 1,
            x: 0,
            rotateX: isTouchDevice
              ? 0
              : tilt.x,

            rotateY: isTouchDevice
              ? 0
              : tilt.y,
          }}

          className="
            relative h-full min-h-[400px]
            rounded-2xl overflow-hidden
            border border-white/10
            bg-white/5 backdrop-blur-xl
            p-6 sm:p-8
            flex flex-col justify-between
          "
        >

          {/* GLOW */}
          <div className="absolute inset-0 -z-10">

            <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[120px] top-0 left-0" />

            <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-[120px] bottom-0 right-0" />

          </div>

          {/* TOP */}
          <div>

            <div className="flex items-center gap-2 mb-3">

              <span className="relative flex h-2 w-2">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />

                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />

              </span>

              <p className="text-xs text-green-300">
                Available
              </p>

            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
              Let’s build something meaningful.
            </h3>

            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              Content, branding, or a full digital presence —
              we create work that actually makes impact.
            </p>

          </div>

          {/* CONTACT */}
          <div className="space-y-6 mt-10">

            {/* EMAIL */}
            <a
              href="mailto:workwith1313@gmail.com"
              className="flex items-center gap-4 group"
            >

              <FiMail className="text-xl text-purple-400 group-hover:scale-110 transition" />

              <div>

                <p className="text-white/40 text-sm">
                  Email
                </p>

                <p className="group-hover:text-white transition text-sm sm:text-base break-all">
                  theviralroommedia@gmail.com
                </p>

              </div>
            </a>

            {/* PHONE */}
            <div className="flex items-start gap-4">

              <FiPhone className="text-xl text-pink-400 mt-1" />

              <div>

                <p className="text-white/40 text-sm">
                  Phone
                </p>

                <a
                  href="tel:+919501777365"
                  className="block hover:text-white transition text-sm sm:text-base"
                >
                  +91 95017-77365
                </a>

                <a
                  href="tel:+917508890112"
                  className="block text-white/70 hover:text-white transition text-sm sm:text-base"
                >
                  +91 75088-90112
                </a>

              </div>
            </div>

            {/* LOCATION */}
            <a
              href="https://maps.google.com/?q=Ludhiana,India"
              target="_blank"
              rel="noopener noreferrer"

              className="flex items-start gap-4 group"
            >

              <FiMapPin className="text-xl text-purple-300 mt-1 group-hover:scale-110 transition" />

              <div>

                <p className="text-white/40 text-sm">
                  Location
                </p>

                <p className="group-hover:text-white transition text-sm sm:text-base">
                  Ludhiana, India
                </p>

                <p className="text-xs text-purple-300 mt-1 flex items-center gap-1">
                  🌍 Serving across India
                </p>

              </div>
            </a>

          </div>

          {/* FOOT */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-10">

            <p className="text-xs text-white/40">
              Typically replies within 24 hrs
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3">

              <a
                href="https://www.instagram.com/theviralroommedia?igsh=MXZza3k3bHd5cjBudg=="
                target="_blank"
                rel="noopener noreferrer"

                className="
                  p-2 rounded-full
                  bg-white/5
                  border border-white/10
                  hover:bg-pink-500/20
                  hover:scale-110
                  transition
                "
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"

                className="
                  p-2 rounded-full
                  bg-white/5
                  border border-white/10
                  hover:bg-blue-500/20
                  hover:scale-110
                  transition
                "
              >
                <FaLinkedin className="text-lg" />
              </a>

            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}