import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-16">

      {/* ICON AREA */}
      <div className="text-center z-10 relative">
        <div className="flex justify-center gap-3 mb-3">
          <div className="w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-sm">
            <FaInstagram size={16} />
          </div>

          <div className="w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-sm">
            <FaLinkedinIn size={16} />
          </div>

          <div className="w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-sm">
            <HiOutlineMail size={18} />
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-10">Madelyn Torff 2021</p>
        <a
            href="#home"
            className="hover:text-black transition-colors"
          >
            Back to Top
          </a>
      </div>

      {/* WAVE KUNING (DI BAWAH ICON) */}
      <div className="w-full leading-none mt-10">
        <svg
          viewBox="0 0 1440 260"
          className="w-full h-[180px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#fbbf24"
            d="
              M0,140
              C180,60 360,220 600,160
              C840,100 1020,200 1200,140
              C1320,100 1400,80 1440,70
              L1440,260
              L0,260
              Z
            "
          />
        </svg>
      </div>
    </footer>
  );
}
