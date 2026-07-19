"use client";
import { motion } from "framer-motion";

const skills = [
  "Python", "Java", "HTML", "CSS", "SQL",
  "ReactJs", "Streamlit", "TensorFlow", "Pandas",
  "Numpy", "Sci-kit-learn", "RestAPI", "Langchain",
  "CNN", "GenAI", "Android Studio"
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "SQL for Data Science (Coursera - 100%)",
  "Privacy & Security in OSN (NPTEL - 82%)",
  "Android Development (PK Innovates)"
];

const education = [
  { level: "B.Tech CSE", school: "VIT Chennai", score: "9.37 CGPA", year: "2022 - 2026" },
  { level: "High School", school: "Chennai Public School", score: "91.8%", year: "2021 - 2022" },
  { level: "Matriculation", school: "Chennai Public School", score: "95%", year: "2019 - 2020" }
];

export default function BentoGrid() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            More About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Skills Card (Spans 2 columns on desktop) */}
          <motion.div
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span> Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Top Achievement Card */}
          <motion.div
            className="bg-gradient-to-br from-indigo-900/40 to-cyan-900/20 border border-indigo-500/30 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-center items-center text-center hover:border-cyan-400/50 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
            <h3 className="text-lg font-bold text-white mb-2">2nd Runner Up</h3>
            <p className="text-sm text-indigo-200">Defy’25 Hackathon</p>
            <p className="text-xs text-gray-400 mt-2">Web3 Blood Donation Platform</p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">{edu.level}</h4>
                    <p className="text-sm text-gray-400">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-400">{edu.score}</div>
                    <div className="text-xs text-gray-500">{edu.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span className="text-sm text-gray-300 leading-snug">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
