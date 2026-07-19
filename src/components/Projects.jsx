"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

const projects = [
  {
    title: "Stress Level Prediction System using IoT & Deep Learning",
    description: "IoT-enabled health monitoring system integrating Arduino-based MAX30100 sensor for real-time vitals collection.",
    highlights: ["96.95% accuracy ProtoNet", "Flask web dashboard", "Live data visualization"],
    github: "https://github.com/shahishnujr/stress_estimator-using-FSL",
  },
  {
    title: "Hybrid CNN Model for Parkinson’s Diagnosis",
    description: "Collaborated on a team project to classify Parkinson’s disease using MRI images with a quantum-inspired layer.",
    highlights: ["97.33% training accuracy", "97.16% validation accuracy", "PyTorch & NTUA Dataset"],
    github: "https://github.com/shahishnujr/Parkinsons-MRI-Detection",
  },
  {
    title: "Automated Smart Parking System Using License Plate Recognition",
    description: "Designed and implemented a smart parking system integrating license plate recognition and IoT for automated entry/exit.",
    highlights: ["ESP32-CAM", "Tesseract OCR (95% acc)", "Arduino UNO automated gate"],
    github: "https://github.com/shahishnujr/Autonomous-smart-Parking-System",
  },
  {
    title: "Web3 Blood Donation Platform (Defy’25 Hackathon)",
    description: "Built a blockchain-powered donation platform to ensure transparency and donor trust. Awarded 2nd Runner Up.",
    highlights: ["Web3 / Blockchain", "Smart Contracts", "Transparent Ledgers"],
    github: "https://github.com/shahishnujr/Web3-blood-donation",
  }
];

function ProjectCard({ project, idx }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [7, -7]);
  const rotateY = useTransform(x, [-100, 100], [-7, 7]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col h-full rounded-3xl group block cursor-pointer`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-indigo-500/10 rounded-3xl transition-all duration-700 pointer-events-none" />
      <div className="relative flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md overflow-hidden transition-all duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm md:text-base mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.highlights.map((highlight, i) => (
            <span key={i} className="px-3 py-1.5 text-xs font-medium text-cyan-200 bg-cyan-950/40 border border-cyan-800/50 rounded-full">
              {highlight}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="opacity-70 group-hover:opacity-100 transition-opacity"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            Source Code
          </span>
          <div 
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:scale-110 group-hover:bg-white/10"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Featured Work
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
