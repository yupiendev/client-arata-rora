import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import content from "../../content/footer.json";

const iconMap = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: FaTiktok
};

export default function Footer() {
  const { owner, year, backToTop, socials } = content;

  return (
    <footer id="footer" className="relative bg-[#f7f5fa] pt-16">

      {/* ICON AREA */}
      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center gap-3 mb-3 flex-wrap">
          {socials.map((social) => {
            const Icon = iconMap[social.id];
            if (!Icon) return null;

            return (
              <a
                key={social.id}
                href={social.href}
                className="w-9 h-9 flex items-center justify-center bg-[#f5fefd] text-black rounded-sm shadow-xl"
              >
                <Icon size=  {24} />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-gray-500 mb-8 md:mb-10">
          {owner} {year}
        </p>

        <a
          href={backToTop.href}
          className="hover:text-black transition-colors text-sm"
        >
          {backToTop.label}
        </a>
      </div>

      {/* WAVE */}
      <div className="w-full leading-none mt-8 md:mt-10">
        <svg
          viewBox="0 0 1440 260"
          className="w-full h-[120px] sm:h-[150px] md:h-[180px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#9966cc"
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
