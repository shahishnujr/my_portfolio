"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Contact() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

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
    <section id="contact" className="py-32 px-4 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-xl text-center group overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, perspective: 1000 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-indigo-500/5 group-hover:to-purple-500/10 transition-all duration-700 pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-md">
            Let's work together.
          </h2>
          
          <p className="text-lg md:text-xl text-indigo-200 mb-12 max-w-2xl mx-auto font-medium">
            Currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:Sair62995@gmail.com"
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M2 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0v.01L14 13l10-6.99V6H4zm0 2.236V22h20V8.236l-9.553 6.668a2 2 0 0 1-2.894 0L4 8.236z"/></svg>
              Say Hello
            </a>
            
            <a 
              href="tel:+917358629708"
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +91 73586 29708
            </a>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
