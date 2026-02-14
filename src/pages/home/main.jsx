import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import HeroSection from "../../components/sections/HeroSection";
import ProjectsSection from "../../components/sections/ProjectsSection";
import ContactSection from "../../components/sections/ContactSection";
import '../../index.css';

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
