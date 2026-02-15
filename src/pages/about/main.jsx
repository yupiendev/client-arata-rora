import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import AboutSection from "../../components/sections/AboutSection"
import "../../index.css"

export default function App() {
  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto]">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)