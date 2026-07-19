"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="relative py-24 bg-[#0a0a0a]" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute left-4 md:left-12 top-0 bottom-0 w-0.5 bg-white/10" />
          
          {/* Animated Highlight Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-4 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-indigo-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
          />

          <div className="space-y-12 pt-8">
            <div className="relative flex flex-col md:flex-row items-start">
              
              {/* Center Node */}
              <div className="absolute left-4 md:left-12 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-cyan-400 z-10 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              
              {/* Content Card */}
              <motion.div 
                className="ml-12 md:ml-24 w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:to-indigo-500/5 rounded-3xl transition-all duration-500 pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 rounded-full w-fit">
                      June 2024 – July 2024, Chennai
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Artificial Intelligence Intern
                  </h3>
                  <h4 className="text-gray-300 font-medium mb-6">
                    Client Linux Software Pvt. Ltd <span className="text-gray-500">| Digital Transformation & Software Development</span>
                  </h4>
                  
                  <p className="text-indigo-200 text-sm md:text-base font-semibold mb-4">
                    Developed two impactful AI projects during my internship:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-cyan-400 font-medium mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        Streamlit application for dynamic SQL query generation
                      </h5>
                      <ul className="list-disc pl-8 text-gray-400 text-sm md:text-base space-y-1">
                        <li>Leveraged OpenAI’s language model (GPT-3.5-llm) and the LangChain framework.</li>
                        <li>Integrated with a MySQL database for real-time execution and display.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-indigo-400 font-medium mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        Automated email processing and data extraction system
                      </h5>
                      <ul className="list-disc pl-8 text-gray-400 text-sm md:text-base space-y-1">
                        <li>Used LangChain and OpenAI’s Chat models.</li>
                        <li>Fetched and processed unseen emails.</li>
                        <li>Extracted relevant data and stored it in a PostgreSQL database.</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
