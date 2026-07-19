"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const PROFILE_IMAGE = "/Shahishnu JR_Photo.jpg";

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="h-12 flex items-center justify-center mb-8">
      <motion.p 
        className="text-gray-400 text-center max-w-xl px-4 text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-1.5 h-4 ml-1 bg-cyan-400 align-middle"
        />
      </motion.p>
    </div>
  );
};

export default function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Orbs */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] opacity-50 absolute top-1/2 left-1/4 -translate-y-1/2" />
        <div className="w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] opacity-40 absolute top-1/2 right-1/4 -translate-y-1/2" />
      </motion.div>

      <motion.div
        className="relative z-20 flex flex-col items-center mt-12 w-full max-w-4xl px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Interactive 3D Profile Image */}
        <motion.div 
          className="relative mb-8 group perspective-[1000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, z: 100 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <motion.img
            src={PROFILE_IMAGE}
            alt="Shahishnu J R"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-2 ring-white/10 shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Shahishnu J R
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-cyan-300 text-center max-w-2xl px-4 font-medium leading-relaxed mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          AI Enthusiast · Software Developer
        </motion.p>

        <TypewriterText text="Building intelligent systems and exploring the intersection of AI, IoT, and modern web technologies to solve real-world problems." />

        {/* Social Links */}
        <motion.div
          className="flex gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { href: "mailto:Sair62995@gmail.com", icon: <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M2 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0v.01L14 13l10-6.99V6H4zm0 2.236V22h20V8.236l-9.553 6.668a2 2 0 0 1-2.894 0L4 8.236z"/></svg> },
            { href: "https://github.com/shahishnujr", icon: <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
            { href: "https://www.linkedin.com/in/shahishnu-j-r-66b395269/", icon: <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg> }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="p-3.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-lg backdrop-blur-md"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
