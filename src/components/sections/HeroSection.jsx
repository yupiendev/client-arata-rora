import Container from "../ui/Container";
import Button from "../ui/Button.jsx";
import Profile from "../../assets/Images/profile.png"

export default function HeroSection() {
  return (
    <section id="home" className="relative grid grid-cols-2 min-h-screen flex items-center bg-white overflow-hidden">

     

      {/* ===== CONTENT ===== */}
      <Container className="relative z-10 gap-12 items-center pl-20">

        {/* LEFT TEXT */}
        <div>
          <p className="text-yellow-500 font-semibold mb-4 tracking-wide">
            UI/UX DESIGNER
          </p>

          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Hello, my name is Madelyn Torff
          </h1>

          <p className="text-gray-500 mb-8 max-w-md">
            Short text with details about you, what you do or your professional career.
          </p>

          <div className="flex gap-4">
            <Button>Projects</Button>
            <Button variant="outline"className="hover:bg-black hover:text-white">LinkedIn</Button>
          </div>
        </div>

        {/* RIGHT SIDE (EMPTY — SESUAI DESAIN) */}
        <div className="hidden md:block" />

      </Container>
       {/* ===== BLOB BACKGROUND ===== */}
      <div className=" overflow-hidden pointer-events-none z-0">
        <img className="absolute top-0 right-0 z-10 w-[45vw] aspect-1/1"src={Profile} alt="" />
       
        
      </div>
    </section>
  );
}
