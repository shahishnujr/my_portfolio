"use client";

import { motion } from "framer-motion";

const skills = [
  "Python", "C", "C++", "Java", "HTML", "CSS", "JS", "SQL",
  "ReactNative", "ReactJs", "Streamlit", "TensorFlow", "Pandas", "Numpy", 
  "Sci-kit-learn", "RestAPI", "Langchain", "CNN", "GenAI",
  "Flutter", "Android Studio", "Jupyter Notebook"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 isolate"
    >
      <div className="absolute inset-0 -z-10 flex justify-center items-start opacity-60 pointer-events-none">
        <div className="w-full max-w-4xl h-[320px] bg-gradient-to-br from-blue-900/60 via-fuchsia-700/40 to-indigo-950/70 rounded-full blur-3xl" />
      </div>

      <motion.h2
        className="text-4xl font-extrabold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 drop-shadow-lg tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-2">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            className={
              "px-7 py-3 rounded-2xl font-semibold text-lg shadow-lg relative select-none " +
              "bg-white/10 backdrop-blur border border-purple-500/25 " +
              "hover:bg-gradient-to-r hover:from-blue-500 hover:to-fuchsia-600/80 " +
              "hover:text-white transition group"
            }
            style={{
              boxShadow: "0 8px 32px 0 rgba(50,40,150,0.18), 0 1.5px 5px 0 rgba(140,70,255,0.08)"
            }}
            whileHover={{
              scale: 1.13,
              rotate: 2,
              boxShadow: "0 0 18px 4px #a78bfa99, 0 2px 8px 0 #3b82f699"
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: idx * 0.03 + 0.2 }}
            viewport={{ once: true }}
          >
            <span className="transition-colors duration-150 group-hover:text-shadow-glow">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
