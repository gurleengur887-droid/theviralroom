import React from "react";

const logos = [
  {
    src: "/akaal_logo.PNG",
    link: "https://www.instagram.com/akaalroopofficial?igsh=MXA1OGl4dmh6N2QwcQ==",
    size: "w-[95%]",
  },

  {
    src: "/aman_logo.PNG",
    link: "https://www.instagram.com/amanrefrigerations?igsh=OG9uaTBveXg1bDEw",
    size: "w-[50%]",
  },

  {
    src: "/kundi_logo.PNG",
    link: "https://www.instagram.com/thekundiheritage?igsh=MXRnOTUyaXIwaDEzdA==",
    size: "w-[78%]",
  },

  {
    src: "/M_logo.PNG",
    link: "https://www.instagram.com/modernrefrigerations?igsh=MXJoMjQyd21pbmx4dg==",
    size: "w-[65%]",
  },

  {
    src: "/nannu.PNG",
    link: "https://www.instagram.com/narindersinghbirdi?igsh=djlpcWN2emQ2aHhr",
    size: "w-[200%]",
  },

  {
    src: "/she_logo.PNG",
    link: "https://www.instagram.com/sheconnectplatform?igsh=Y2QycHc3Z2xmODg4",
    size: "w-[70%]",
  },

  {
    src: "/skillsphere.PNG",
    link: "https://www.instagram.com/skillspherebyesh?igsh=MXU4a2Z0anFuMTQ4Ng==",
    size: "w-[82%]",
  },

  {
    src: "/vaidya_logo.PNG",
    link: "https://www.instagram.com/vaidya.co?igsh=bXRxcWJwcDV6Z2c3",
    size: "w-[140%]",
  },

  {
    src: "/voiceless.PNG",
    link: "https://www.instagram.com/voicelesssewafoundation?igsh=bnN0ajc3a3p1NG54",
    size: "w-[80%]",
  },
];

export default function TrustedBrands() {

  return (
    <section
      className="
        relative

        py-16
        sm:py-20
        md:py-28

        overflow-hidden
      "
    >

      {/* 🔥 HEADING */}
      <div
        className="
          text-center

          mb-12
          sm:mb-14
          md:mb-20

          px-4
        "
      >

        <h2
          className="
            text-[32px]
            sm:text-[42px]
            md:text-[70px]
            lg:text-[80px]

            font-bold

            leading-[0.95]
          "
        >

          <span className="text-white/70">
            Trusted by
          </span>

          <br />

          <span
            className="
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-purple-500

              bg-clip-text
              text-transparent
            "
          >
            Leading Brands
          </span>

        </h2>

        <p
          className="
            text-white/40

            mt-3
            md:mt-4

            text-[11px]
            sm:text-sm

            tracking-wide
          "
        >
          Brands that trust our vision
          & execution
        </p>

      </div>

      {/* EDGE FADE */}
      <div
        className="
          absolute left-0 top-0

          w-10
          sm:w-16
          md:w-32
          lg:w-40

          h-full

          bg-gradient-to-r
          from-black
          to-transparent

          z-10
        "
      />

      <div
        className="
          absolute right-0 top-0

          w-10
          sm:w-16
          md:w-32
          lg:w-40

          h-full

          bg-gradient-to-l
          from-black
          to-transparent

          z-10
        "
      />

      {/* LOGO STRIP */}
      <div className="logo-wrapper overflow-hidden">

        <div
          className="
            logo-track

            flex
            w-max

            gap-5
            sm:gap-12
            md:gap-20
            lg:gap-28

            items-center
          "
        >

          {[...logos, ...logos].map(
            (logo, i) => (

              <a
                key={i}

                href={logo.link}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  relative
                  group

                  flex items-center justify-center

                  shrink-0
                "
              >

                {/* LOGO */}
                <div
                  className="
                    w-[90px] h-[90px]
                    sm:w-[140px] sm:h-[140px]
                    md:w-[190px] md:h-[190px]

                    flex items-center justify-center

                    rounded-full

                    overflow-hidden
                  "
                >

                  <img
                    src={logo.src}
                    alt=""

                    onError={(e) =>
                      (e.target.style.display =
                        "none")
                    }

                    className={`
                      ${logo.size || "w-[75%]"}

                      object-contain

                      transition-all
                      duration-300
                      ease-out

                      group-hover:scale-105
                    `}
                  />

                </div>

                {/* INSTAGRAM ICON */}
                <div
                  className="
                    absolute inset-0

                    flex items-center justify-center

                    opacity-0
                    group-hover:opacity-100

                    transition duration-300
                  "
                >

                  <div
                    className="
                      bg-black/60

                      backdrop-blur-sm

                      p-2

                      rounded-full
                    "
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"

                      className="
                        w-3 h-3
                        sm:w-4 sm:h-4

                        text-white
                      "

                      fill="currentColor"

                      viewBox="0 0 24 24"
                    >

                      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>

                    </svg>

                  </div>
                </div>

              </a>
            )
          )}

        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .logo-track {
          animation: scroll 18s linear infinite;
        }

        @media (min-width: 640px) {
          .logo-track {
            animation: scroll 25s linear infinite;
          }
        }

        @media (min-width: 768px) {
          .logo-track {
            animation: scroll 35s linear infinite;
          }
        }

        .logo-wrapper:hover .logo-track {
          animation-play-state: paused;
        }
        `}
      </style>
    </section>
  );
}