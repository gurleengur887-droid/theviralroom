import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo_2 from "../Images/logo_2.PNG";

import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {

  return (
    <footer
      className="
        relative text-white
        mt-24 md:mt-32
        border-t border-white/10
        overflow-hidden
      "
    >

      {/* 🌫️ BG GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            w-[500px] h-[500px]
            bg-purple-600/10
            blur-[120px]
            top-[-100px]
            left-[-100px]
          "
        />

        <div
          className="
            absolute
            w-[400px] h-[400px]
            bg-pink-500/10
            blur-[120px]
            bottom-[-100px]
            right-[-100px]
          "
        />

      </div>

      <div
        className="
          px-4 sm:px-6 md:px-20
          py-14 sm:py-16 md:py-20
        "
      >

        {/* 🔥 CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{ once: true }}

          className="
            mb-14 md:mb-16
            text-center
          "
        >

          <h2
            className="
              text-2xl sm:text-3xl md:text-4xl
              font-semibold
              leading-tight
            "
          >
            Let’s build something meaningful.
          </h2>

          <p
            className="
              text-white/50
              mt-3
              text-sm sm:text-base
            "
          >
            We don’t just create —
            we create impact.
          </p>

        </motion.div>

        {/* 🔥 GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
          "
        >

          {/* 🟣 BRAND */}
          <div>

            <div className="flex flex-col gap-3">

              {/* LOGO */}
              <div className="relative inline-block group">

                <div
                  className="
                    absolute inset-0
                    blur-2xl
                    bg-purple-500/30
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                  "
                />

                <Link
                  to="/"
                  className="relative inline-block"
                >

                  <img
                    src={logo_2}
                    alt="YourBrand logo"

                    className="
                      h-16 sm:h-20 md:h-28 lg:h-32
                      w-auto object-contain
                      opacity-95
                      group-hover:opacity-100
                      transition duration-300
                      group-hover:scale-110
                    "
                  />

                </Link>
              </div>

              {/* TEXT */}
              <p
                className="
                  text-white/50
                  text-sm
                  leading-relaxed
                  max-w-xs
                "
              >
                Content-driven digital team
                building brands that don’t
                just exist — but lead.
              </p>

            </div>
          </div>

          {/* 🔗 NAV */}
          <div>

            <h4
              className="
                text-sm text-white/40
                mb-4
                uppercase
                tracking-wider
              "
            >
              Navigation
            </h4>

            <ul className="space-y-3 text-sm">

              {[
                {
                  name: "Home",
                  path: "/",
                },

                {
                  name: "Work",
                  path: "/projects",
                },

                {
                  name: "Services",
                  path: "/services",
                },

                {
                  name: "About",
                  path: "/about",
                },

                {
                  name: "Contact",
                  path: "/contact",
                },
              ].map((item, i) => (

                <li key={i}>

                  <Link
                    to={item.path}

                    className="
                      relative inline-block
                      text-white/60
                      hover:text-white
                      transition
                      group
                    "
                  >

                    {item.name}

                    <span
                      className="
                        absolute left-0 bottom-0
                        w-0 h-[1px]
                        bg-gradient-to-r
                        from-purple-400
                        to-pink-500
                        transition-all duration-300
                        group-hover:w-full
                      "
                    />

                  </Link>

                </li>
              ))}
            </ul>
          </div>

          {/* 📞 CONTACT */}
          <div>

            <h4
              className="
                text-sm text-white/40
                mb-4
                uppercase
                tracking-wider
              "
            >
              Contact
            </h4>

            <div
              className="
                space-y-4
                text-sm
                text-white/60
              "
            >

              {/* EMAIL */}
              <a
                href="mailto:workwith1313@gmail.com"

                className="
                  flex items-start gap-2
                  hover:text-white
                  transition
                  group
                  break-all
                "
              >

                <FiMail
                  className="
                    text-purple-400
                    group-hover:scale-110
                    transition
                    mt-[2px]
                  "
                />

                <span>
                  workwith1313@gmail.com
                </span>

              </a>

              {/* PHONE 1 */}
              <a
                href="tel:+919501777365"

                className="
                  flex items-center gap-2
                  hover:text-white
                  transition
                  group
                "
              >

                <FiPhone
                  className="
                    text-pink-400
                    group-hover:scale-110
                    transition
                  "
                />

                +91 95017-77365

              </a>

              {/* PHONE 2 */}
              <a
                href="tel:+917508890112"

                className="
                  flex items-center gap-2
                  hover:text-white
                  transition
                  group
                "
              >

                <FiPhone
                  className="
                    text-pink-400
                    group-hover:scale-110
                    transition
                  "
                />

                +91 75088-90112

              </a>

              {/* LOCATION */}
              <a
                href="https://www.google.com/maps?q=Ludhiana,India"

                target="_blank"

                rel="noopener noreferrer"

                className="
                  flex items-start gap-2
                  hover:text-white
                  transition
                  group
                "
              >

                <FiMapPin
                  className="
                    text-purple-300
                    group-hover:scale-110
                    transition
                    mt-[2px]
                  "
                />

                <span>
                  Ludhiana, India
                </span>

              </a>

              {/* PAN INDIA */}
              <p
                className="
                  text-purple-300
                  text-xs
                  flex items-center gap-2
                "
              >
                🌍 Serving across India
              </p>

            </div>
          </div>

          {/* 🌐 SOCIAL */}
          <div>

            <h4
              className="
                text-sm text-white/40
                mb-4
                uppercase
                tracking-wider
              "
            >
              Social
            </h4>

            <div className="flex gap-4">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/theviralroommedia?igsh=MXZza3k3bHd5cjBudg=="

                target="_blank"

                rel="noopener noreferrer"

                className="relative group"
              >

                <span
                  className="
                    absolute inset-0
                    rounded-full
                    bg-pink-500/30
                    blur-lg
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />

                <div
                  className="
                    relative p-3
                    rounded-full
                    bg-white/5
                    border border-white/10
                    group-hover:bg-pink-500/20
                    group-hover:scale-110
                    transition duration-300
                  "
                >

                  <FaInstagram className="text-lg" />

                </div>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com"

                target="_blank"

                rel="noopener noreferrer"

                className="relative group"
              >

                <span
                  className="
                    absolute inset-0
                    rounded-full
                    bg-blue-500/30
                    blur-lg
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />

                <div
                  className="
                    relative p-3
                    rounded-full
                    bg-white/5
                    border border-white/10
                    group-hover:bg-blue-500/20
                    group-hover:scale-110
                    transition duration-300
                  "
                >

                  <FaLinkedin className="text-lg" />

                </div>
              </a>

            </div>
          </div>
        </div>

        {/* 🔻 BOTTOM */}
        <div
          className="
            flex flex-col md:flex-row
            items-center
            justify-between
            gap-3
            mt-14 md:mt-16
            pt-6
            border-t border-white/10
            text-xs sm:text-sm
            text-white/40
            text-center md:text-left
          "
        >

          <p>
            © 2026 YourBrand.
            All rights reserved.
          </p>

          <p
            className="
              italic
              text-white/50
            "
          >
            Designed & developed
            with intent.
          </p>

        </div>
      </div>
    </footer>
  );
}