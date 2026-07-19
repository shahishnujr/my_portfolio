// src/app/page.tsx

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BentoGrid from '../components/BentoGrid';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
