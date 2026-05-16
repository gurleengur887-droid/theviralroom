import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo_2 from "../Images/logo_2.PNG";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const [open, setOpen] =
    useState(false);

  const navigate = useNavigate();

  return (
    <nav
      className="
        fixed top-0 left-0

        w-full

        z-[9999]

        px-4
        sm:px-6

        py-4

        backdrop-blur-md

        bg-black/20

        border-b border-white/10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          flex items-center justify-between
        "
      >

        {/* 🔥 LOGO */}
        <img
          src={logo_2}
          alt="logo"

          className="
            h-12
            sm:h-14
            md:h-16
            lg:h-20

            object-contain
          "
        />

        {/* 💻 DESKTOP LINKS */}
        <div
          className="
            hidden md:flex

            items-center

            gap-8

            text-sm

            text-white/80
          "
        >

          <a
            href="/services"

            className="
              hover:text-white
              transition
            "
          >
            Services
          </a>

          <a
            href="/projects"

            className="
              hover:text-white
              transition
            "
          >
            Work
          </a>

          <a
            href="/about"

            className="
              hover:text-white
              transition
            "
          >
            About
          </a>

          <a
            href="/contact"

            className="
              hover:text-white
              transition
            "
          >
            Contact
          </a>

        </div>

        {/* 🚀 DESKTOP CTA */}
        <button
          onClick={() =>
            navigate("/startproject")
          }

          className="
            hidden md:block

            px-5 py-2

            rounded-full

            border border-white/20

            hover:bg-white/10

            transition
          "
        >
          Start Project
        </button>

        {/* 🍔 MOBILE HAMBURGER */}
        <button
          onClick={() =>
            setOpen(!open)
          }

          className="
            md:hidden

            flex flex-col

            gap-1.5

            z-[10000]
          "
        >

          <span
            className="
              w-6 h-[2px]

              bg-white

              rounded-full
            "
          />

          <span
            className="
              w-6 h-[2px]

              bg-white

              rounded-full
            "
          />

          <span
            className="
              w-6 h-[2px]

              bg-white

              rounded-full
            "
          />

        </button>

      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            transition={{
              duration: 0.25,
            }}

            className="
              md:hidden

              mt-4

              bg-black/70

              backdrop-blur-2xl

              border border-white/10

              rounded-3xl

              p-6

              mx-1

              shadow-[0_0_40px_rgba(0,0,0,0.4)]
            "
          >

            <div
              className="
                flex flex-col

                gap-6

                text-white

                text-lg
              "
            >

              {/* SERVICES */}
              <a
                href="/services"

                onClick={() =>
                  setOpen(false)
                }

                className="
                  hover:text-white/70

                  transition
                "
              >
                Services
              </a>

              {/* WORK */}
              <a
                href="/projects"

                onClick={() =>
                  setOpen(false)
                }

                className="
                  hover:text-white/70

                  transition
                "
              >
                Work
              </a>

              {/* ABOUT */}
              <a
                href="/about"

                onClick={() =>
                  setOpen(false)
                }

                className="
                  hover:text-white/70

                  transition
                "
              >
                About
              </a>

              {/* CONTACT */}
              <a
                href="/contact"

                onClick={() =>
                  setOpen(false)
                }

                className="
                  hover:text-white/70

                  transition
                "
              >
                Contact
              </a>

              {/* CTA */}
              <button
                onClick={() => {

                  setOpen(false);

                  navigate(
                    "/startproject"
                  );
                }}

                className="
                  mt-2

                  px-6 py-3

                  bg-white

                  text-black

                  rounded-full

                  font-medium

                  hover:scale-[1.02]

                  active:scale-95

                  transition
                "
              >
                Start Project
              </button>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </nav>
  );
}