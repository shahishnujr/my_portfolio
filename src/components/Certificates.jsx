"use client";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Android Development - PK Innovates",
    description:
      "Developed multi-page apps with authentication, image sliders, navigation, and icon usage. June 2023",
  },
  {
    title: "NPTEL: Privacy and Security in Online Social Media",
    description: "Scored 82%.",
  },
  {
    title: "Coursera: SQL for Data Science",
    description: "Scored 100%. University of California, Davis.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Amazon Web Services foundational certification.",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-20 bg-gradient-to-b from-[#23213C] via-[#272450] to-[#20232C] text-white overflow-hidden"
    >
      
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[90vw] max-w-5xl h-60 bg-gradient-to-tr from-purple-700/30 via-blue-700/25 to-transparent blur-2xl rounded-full opacity-50" />
      </div>

   
      <motion.h2
        className="text-4xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-fuchsia-300 drop-shadow-lg tracking-wide"
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Certificates
      </motion.h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-purple-400/20 rounded-2xl shadow-xl px-6 py-7 flex flex-col gap-2 hover:scale-[1.03] hover:shadow-fuchsia-400/15 transition-all duration-300"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-9 h-9 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11.14a2.032 2.032 0 0 1 .595-1.445L20 8.29V7a2.978 2.978 0 0 0-3-3h-2.17A3.006 3.006 0 0 0 12 3c-.506 0-.98.127-1.394.346A2.978 2.978 0 0 0 8 7v1.29l1.405 1.405A2.032 2.032 0 0 1 10 11.14v3.018c0 .522-.214 1.023-.595 1.445L8 17h5" />
                  <circle cx="12" cy="21" r="2" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-purple-100 leading-tight">
                {cert.title}
              </h3>
            </div>
            {cert.description && (
              <p className="text-blue-100 text-base font-medium">
                {cert.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
