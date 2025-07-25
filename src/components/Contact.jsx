"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-tr from-[#101327] via-[#232442] to-[#131125] text-white flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-fuchsia-300 drop-shadow-lg tracking-wide"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <motion.div
        className="bg-white/10 rounded-2xl px-8 py-8 shadow-xl flex flex-col items-center gap-6 border border-blue-500/10 backdrop-blur max-w-md w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 group">
          <span className="p-3 rounded-full bg-gradient-to-tr from-sky-500 to-purple-600 shadow-lg">
            
            <svg width="28" height="28" fill="currentColor" className="text-white">
              <path d="M2 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0v.01L14 13l10-6.99V6H4zm0 2.236V22h20V8.236l-9.553 6.668a2 2 0 0 1-2.894 0L4 8.236z"/>
            </svg>
          </span>
          <a
            href="mailto:sair62995@gmail.com"
            className="text-lg md:text-xl font-semibold text-blue-200 hover:text-blue-400 transition"
          >
            sair62995@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 group">
          <span className="p-3 rounded-full bg-gradient-to-tr from-blue-500 to-fuchsia-600 shadow-lg">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-white" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2A19.82 19.82 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13.98.5 1.93 1.09 2.76l.2.28a2 2 0 01-.45 2.6l-1.27 1.27a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.6-.45c.09.06.18.13.28.2.83.59 1.78.96 2.76 1.09A2 2 0 0122 16.92z" />
</svg>

          </span>
          <a
            className="text-lg md:text-xl font-semibold text-blue-200 hover:text-blue-400 transition"
          >
            +91 7358629708
          </a>
        </div>
      </motion.div>
    </section>
  );
}
