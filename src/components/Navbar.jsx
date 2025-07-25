"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900/90 via-blue-900/80 to-fuchsia-900/80 shadow-lg backdrop-blur-xl backdrop-saturate-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-fuchsia-600 to-purple-400 flex items-center justify-center shadow-md border-2 border-blue-300/30 overflow-hidden">
            
            <span className="text-xl text-white font-extrabold select-none">SJ</span>
          </div>
          <span className="ml-2 text-lg md:text-xl font-bold bg-gradient-to-r from-blue-300 to-fuchsia-400 text-transparent bg-clip-text tracking-tight">
            Shahishnu J R
          </span>
        </div>
        
        <button className="md:hidden z-20" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <span className="text-white text-3xl">{open ? "✖" : "☰"}</span>
        </button>
        
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative px-3 py-1 rounded transition duration-150 font-semibold text-white/90 hover:bg-blue-700/60 hover:text-white hover:shadow-md"
              >
                <span className="relative z-10">{label}</span>
              </a>
            </li>
          ))}
        </ul>
        
        <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 240 }}
            className="absolute right-4 top-16 md:hidden bg-gray-900/95 rounded-2xl shadow-lg py-4 px-4 flex flex-col items-end gap-2 border border-blue-400/20 backdrop-blur z-30"
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 px-4 rounded-lg font-semibold text-blue-200 hover:bg-blue-700/80 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
        </AnimatePresence>
      </div>
      
      <div className="h-1 w-full bg-gradient-to-r from-fuchsia-600 via-blue-500 to-blue-300 opacity-70" />
    </nav>
  );
}
