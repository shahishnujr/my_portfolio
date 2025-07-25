"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Stress Level Prediction System using IoT & Deep Learning",
    description: (
      <>
        IoT-enabled health system integrating Arduino MAX30100 sensor for real-time vitals monitoring.
        <ul className="list-disc pl-5 mt-2 text-blue-100 text-base space-y-1">
          <li>Built & deployed a ProtoNet deep learning model: <b>96.95% accuracy</b></li>
          <li>Flask-based dashboard for live data & secure user access</li>
        </ul>
      </>
    ),
    github: "https://github.com/shahishnujr/stress_estimator-using-FSL",
  },
  {
    title: "Hybrid CNN Model for Parkinson’s Diagnosis",
    description: (
      <>
        MRI image classification using CNNs and quantum-inspired architecture.
        <ul className="list-disc pl-5 mt-2 text-blue-100 text-base space-y-1">
          <li><b>97.33% training</b> and <b>97.16% validation accuracy</b></li>
          <li>Trained using PyTorch on NTUA Parkinson dataset</li>
        </ul>
      </>
    ),
    github: "https://github.com/shahishnujr/Parkinsons-MRI-Detection",
  },
  {
    title: "Automated Smart Parking System with License Plate Recognition",
    description: (
      <>
        IoT-based smart parking with automated gate control and license recognition.
        <ul className="list-disc pl-5 mt-2 text-blue-100 text-base space-y-1">
          <li>ESP32-CAM + Tesseract OCR + Arduino UNO</li>
          <li><b>95% license plate recognition accuracy</b></li>
          <li>Blocked 100% unauthorized access in simulations</li>
        </ul>
      </>
    ),
    github: "https://github.com/shahishnujr/Autonomous-smart-Parking-System",
  },
  {
    title: "Defy’25 Hackathon – Web3 Blood Donation Platform",
    description: (
      <>
        <span className="block mt-1">
          🏆 <b>2nd Runner Up</b>: Built a blockchain-powered donation platform to ensure transparency and donor trust.
        </span>
      </>
    ),
    github: "https://github.com/shahishnujr/Web3-blood-donation",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-slate-900 via-[#26235d] to-[#181227] text-white overflow-hidden"
    >
      
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[90vw] max-w-6xl h-80 bg-gradient-to-br from-blue-800/40 via-fuchsia-700/30 to-transparent blur-2xl rounded-full opacity-50" />
      </div>

      
      <motion.h2
        className="text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-fuchsia-400 drop-shadow-md tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 10px 35px rgba(99,102,241,0.25), 0 0 8px rgba(232,121,249,0.25)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-between h-full bg-gradient-to-tr from-blue-900/50 via-fuchsia-700/40 to-indigo-900/60 rounded-3xl p-7 border border-blue-600/10 hover:border-fuchsia-400/25 shadow-xl backdrop-blur-lg transition duration-300 group cursor-pointer">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-fuchsia-300 transition-colors duration-300">
                {project.title}
              </h3>
              <div className="text-blue-100 text-base mb-4 leading-relaxed">
                {project.description}
              </div>
              <div className="mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm shadow-md hover:from-blue-700 hover:to-fuchsia-600 transition duration-200"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
