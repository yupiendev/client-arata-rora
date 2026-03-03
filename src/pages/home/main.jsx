import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import HeroSection from "../../components/sections/HeroSection";
import ProjectsSection from "../../components/sections/ProjectsSection";
import CollaborationSection from "../../components/sections/CollaborationSection";
import '../../index.css';
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <CollaborationSection />
      <Footer />
    </BrowserRouter>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
