"use client";
import { motion } from "framer-motion";

const PROFILE_IMAGE = "/Shahishnu JR_Photo.jpg";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#19224A] via-purple-900 to-black text-white overflow-hidden"
      style={{ paddingTop: "7rem", paddingBottom: "3rem" }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 0.95, opacity: 0.3 }}
        animate={{ scale: 1.12, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
      >
        <div className="w-[460px] h-[460px] bg-gradient-to-tr from-blue-700/70 via-purple-700/60 to-fuchsia-600/40 rounded-full blur-3xl opacity-60" />
      </motion.div>
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-0 right-0 top-[35%] h-px bg-gradient-to-r from-transparent via-blue-300/15 to-transparent" />
        <div className="absolute top-0 bottom-0 left-[32%] w-px bg-gradient-to-b from-transparent via-purple-300/12 to-transparent" />
      </div>

      <motion.div
        className="relative z-20 flex flex-col items-center"
        initial={{ y: 36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, type: "spring" }}
      >
        <div className="relative">
          <motion.img
            src={PROFILE_IMAGE}
            alt="Photo of Shahishnu J R"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full shadow-2xl border-4 border-blue-400/80 bg-white/20 object-cover ring-4 ring-fuchsia-200/30"
            style={{
              boxShadow: "0 6px 40px 0 rgba(80,60,165,0.22), 0 1.5px 10px 0 rgba(140,90,255,0.13)",
            }}
            initial={{ scale: 0.76 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, type: "spring", delay: 0.03 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl pointer-events-none"
            animate={{
              opacity: [0.24, 0.38, 0.24],
              scale: [1, 1.07, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.6,
              type: "tween",
              repeatType: "mirror",
            }}
          />
        </div>
      </motion.div>

      <motion.h1
        className="relative z-20 text-[2.3rem] md:text-5xl font-bold text-center mt-6 mb-2 drop-shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.16, duration: 0.87, type: "spring" }}
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200 bg-clip-text text-transparent">
          Shahishnu J R
        </span>
      </motion.h1>
      <motion.p
        className="relative z-20 text-xl md:text-2xl text-blue-100 text-center mb-7 font-medium"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.27, duration: 0.6, type: "spring" }}
      >
        AI Enthusiast · Software Developer · Big Problem Solver
      </motion.p>
      <motion.div
        className="relative z-20 mb-7 max-w-xl font-normal text-blue-100 text-center text-lg md:text-xl"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.43, duration: 0.57, type: "spring" }}
      >
        Passionate about building intelligent, impactful software. Let's create something meaningful together.
      </motion.div>
      <motion.div
        className="relative z-20 mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.53, duration: 0.55, type: "spring" }}
      >
        <span className="px-5 py-2 bg-blue-700/30 backdrop-blur-md rounded-lg text-base md:text-lg font-medium text-blue-50 border border-blue-300/10 shadow-lg">
          Chennai, Tamil Nadu &middot; BTech CSE &middot; CGPA 9.35
        </span>
      </motion.div>

      <motion.div
        className="relative z-20 flex flex-wrap justify-center gap-5 mb-2"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.68, duration: 0.52, type: "spring" }}
      >
        <a
          href="#projects"
          className="inline-block w-44 px-6 py-3 rounded-lg bg-gradient-to-tr from-blue-600 via-purple-700 to-fuchsia-600 text-white font-semibold shadow-xl ring-1 ring-purple-300/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-fuchsia-400/20"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-block w-44 px-6 py-3 rounded-lg bg-gradient-to-tr from-purple-700 via-blue-600 to-fuchsia-700 text-white font-semibold shadow-xl ring-1 ring-blue-300/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-blue-400/20"
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        className="relative z-20 flex gap-4 mt-10"
        initial={{ opacity: 0, y: 13 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <a
          href="mailto:Sair62995@gmail.com"
          className="p-3 rounded-full bg-white/10 hover:bg-blue-400/30 transition duration-150 shadow ring-1 ring-blue-400/10"
          aria-label="Email"
        >
          {/* email svg */}
          <svg width="26" height="26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0v.01L13 13l9-6.99V6H4zm0 2.236V20h18V8.236l-8.553 6.668a2 2 0 0 1-2.894 0L4 8.236z" />
          </svg>
        </a>
        <a
          href="https://github.com/shahishnujr"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-purple-300/30 transition duration-150 shadow ring-1 ring-purple-300/10"
          aria-label="GitHub"
        >
          {/* github svg */}
          <svg width="26" height="26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2C6.373 2 1 7.373 1 14c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577V21.87c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 13 7.844c1.02.005 2.047.138 3.008.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.103.823 2.222v3.293c0 .32.218.694.825.576C19.565 23.796 23 19.299 23 14c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/shahishnu-j-r-66b395269/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-fuchsia-300/30 transition duration-150 shadow ring-1 ring-fuchsia-300/10"
          aria-label="LinkedIn"
        >
          {/* linkedin svg */}
          <svg width="26" height="26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2h-12a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM8.4 19H6.216v-7.092H8.4V19zM7.309 10.44c-.696 0-1.26-.564-1.26-1.256a1.256 1.256 0 0 1 2.511 0c0 .693-.564 1.256-1.251 1.256zm10.291 8.56h-2.183v-3.418c0-.817-.014-1.87-1.139-1.87-1.142 0-1.316.893-1.316 1.816V19H10.5v-7.092h2.096v.97h.03a2.299 2.299 0 0 1 2.067-1.139c2.207 0 2.614 1.453 2.614 3.343V19z"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
