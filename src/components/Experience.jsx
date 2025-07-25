"use client";
import { motion } from "framer-motion";

// Project achievements for a single internship
const projects = [
  {
    name: "Database Q&A Assistant (OpenAI, LangChain, Streamlit)",
    url: "https://github.com/shahishnujr/database_Q-A",
    bullets: [
      "Developed a Streamlit app to dynamically generate SQL queries from natural language prompts using OpenAI and LangChain.",
      "Integrated with MySQL for real-time query execution and result display.",
    ],
  },
  {
    name: "Automated Email Data Extraction",
    url: "https://github.com/shahishnujr/clssai_project",
    bullets: [
      "Automated email processing and extraction of tabular data using LangChain and OpenAI.",
      "Stored extracted data in PostgreSQL, streamlining data ingestion workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-[#232938] to-[#20232C] flex flex-col items-center px-2"
    >
      <h2 className="text-4xl font-extrabold mb-10 text-white tracking-widest drop-shadow">
        Experience
      </h2>
      <motion.div
        className="rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-blue-900/20 p-10 w-full max-w-2xl mx-auto"
        initial={{ y: 32, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-1 mb-3">
          <span className="text-lg font-bold text-blue-200">
            Client Linux Software Pvt. Ltd
          </span>
          <span className="text-md text-blue-400/90 font-medium italic">
            AI Intern, Jun–Aug 2024
          </span>
        </div>
        <div className="border-l-4 border-blue-600/50 pl-4 mt-4 flex flex-col gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.name}
              className="mb-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + idx * 0.13,
                type: "spring",
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xl font-bold text-blue-100">{proj.name}</span>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-1 rounded-md bg-gradient-to-r from-blue-700 to-purple-700 text-blue-100 text-sm font-semibold shadow hover:from-fuchsia-600 hover:to-blue-600 hover:text-white transition"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="inline align-text-top"
                  >
                    <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234C6.078 20.042 5.354 18.164 5.354 18.164c-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.808 1.304 3.493.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.125-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.301 1.23a11.5 11.5 0 0 1 6.003 0c2.293-1.553 3.301-1.23 3.301-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.37.824 1.102.824 2.222v3.293c0 .32.219.694.825.576C20.565 21.798 24 17.301 24 12c0-6.627-5.372-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
              <ul className="list-disc ml-6 mt-2 mb-2 space-y-1 text-base md:text-lg text-blue-50">
                {proj.bullets.map((line, li) => (
                  <li key={li}>{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
