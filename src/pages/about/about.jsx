import Navbar from "../../components/layout/Navbar";

// import AboutSection from "../../components/sections/AboutSection"
import '../../index.css';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutSection />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
)