// src/app/page.tsx

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
