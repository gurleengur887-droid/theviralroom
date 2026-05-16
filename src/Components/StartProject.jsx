import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function StartProject() {

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      project: "",
      budget: "",
      timeline: "",
      message: "",
    });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  // ✅ SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    const compiledMessage = `
Project Type: ${form.project}
Budget: ${form.budget}
Timeline: ${form.timeline}

Details:
${form.message}
    `;

    emailjs
      .send(
        "service_j22t923",
        "template_ksvo6po",
        {
          user_name: form.name,
          user_email: form.email,
          message:
            compiledMessage,
          form_type:
            "Start Project",
        },
        "MOpvXOSJBD3N_icRa"
      )

      .then(() => {

        alert(
          "Project request sent 🚀"
        );

        setForm({
          name: "",
          email: "",
          project: "",
          budget: "",
          timeline: "",
          message: "",
        });
      })

      .catch((err) => {

        console.error(err);

        alert("Failed ❌");
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
        relative

        min-h-screen

        text-white

        px-4
        sm:px-8
        md:px-20

        py-20
        sm:py-24
        md:py-28

        overflow-hidden
      "
    >

      {/* 🌫️ BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute

            w-[320px] h-[320px]
            sm:w-[600px] sm:h-[600px]

            bg-purple-600/20

            blur-[100px]
            sm:blur-[120px]

            top-[-100px]
            left-[-100px]
          "
        />

        <div
          className="
            absolute

            w-[280px] h-[280px]
            sm:w-[500px] sm:h-[500px]

            bg-pink-500/20

            blur-[100px]
            sm:blur-[120px]

            bottom-[-100px]
            right-[-100px]
          "
        />

      </div>

      {/* 🔥 HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        className="
          mb-14
          sm:mb-16

          max-w-2xl
        "
      >

        <h1
          className="
            text-[42px]
            sm:text-[60px]
            md:text-[90px]

            font-bold

            leading-[0.9]
          "
        >

          <span className="block text-white/70">
            Start a
          </span>

          <span
            className="
              block

              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-purple-500

              bg-clip-text
              text-transparent
            "
          >
            Project
          </span>

        </h1>

        <p
          className="
            text-white/50

            mt-4

            text-sm
            sm:text-base

            max-w-md
          "
        >
          Tell us about your vision —
          we’ll help you turn it into
          something impactful.
        </p>

      </motion.div>

      {/* 🔥 FORM */}
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

        className="
          max-w-4xl

          grid

          grid-cols-1
          md:grid-cols-2

          gap-4
          sm:gap-6
        "
      >

        {/* NAME */}
        <input
          name="name"

          value={form.name}

          onChange={handleChange}

          placeholder="Your Name"

          className="
            col-span-1

            input

            h-[56px]
            sm:h-[60px]

            text-sm
            sm:text-base
          "
        />

        {/* EMAIL */}
        <input
          name="email"

          value={form.email}

          onChange={handleChange}

          placeholder="Your Email"

          className="
            col-span-1

            input

            h-[56px]
            sm:h-[60px]

            text-sm
            sm:text-base
          "
        />

        {/* PROJECT TYPE */}
        <input
          name="project"

          value={form.project}

          onChange={handleChange}

          placeholder="Project Type (Content, Design, Web...)"

          className="
            col-span-1
            md:col-span-2

            input

            h-[56px]
            sm:h-[60px]

            text-sm
            sm:text-base
          "
        />

        {/* BUDGET */}
        <input
          name="budget"

          value={form.budget}

          onChange={handleChange}

          placeholder="Estimated Budget"

          className="
            col-span-1

            input

            h-[56px]
            sm:h-[60px]

            text-sm
            sm:text-base
          "
        />

        {/* TIMELINE */}
        <input
          name="timeline"

          value={form.timeline}

          onChange={handleChange}

          placeholder="Timeline"

          className="
            col-span-1

            input

            h-[56px]
            sm:h-[60px]

            text-sm
            sm:text-base
          "
        />

        {/* MESSAGE */}
        <textarea
          name="message"

          value={form.message}

          onChange={handleChange}

          rows="6"

          placeholder="Tell us about your project..."

          className="
            col-span-1
            md:col-span-2

            input

            text-sm
            sm:text-base

            min-h-[160px]
            sm:min-h-[180px]

            resize-none
          "
        />

        {/* BUTTON */}
        <div
          className="
            col-span-1
            md:col-span-2
          "
        >

          <button
            className="
              w-full
              sm:w-auto

              px-8
              sm:px-10

              py-4

              rounded-full

              bg-gradient-to-r
              from-purple-500
              to-pink-500

              hover:scale-105
              active:scale-95

              transition

              shadow-lg

              text-sm
              sm:text-base

              font-medium
            "
          >
            Start Project
          </button>

        </div>

      </motion.form>
    </motion.div>
  );
}