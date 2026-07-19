"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-md border border-white/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
            <span className="text-lg text-white font-black select-none tracking-tighter">SJ</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text tracking-tight group-hover:to-white transition-all">
            Shahishnu J R
          </span>
        </div>
        
        <button className="md:hidden z-20" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <span className="text-white text-2xl">{open ? "✖" : "☰"}</span>
        </button>
        
        <ul className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        
        <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute right-4 top-20 md:hidden bg-[#111]/95 rounded-2xl shadow-2xl py-4 px-4 flex flex-col items-end gap-2 border border-white/10 backdrop-blur-md z-30"
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 px-4 rounded-lg font-semibold text-gray-300 hover:bg-white/10 hover:text-cyan-400 transition"
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
    </nav>
  );
}
