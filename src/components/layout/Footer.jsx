import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import content from "../../content/footer.json";

const iconMap = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: FaTiktok
};

export default function Footer() {
  const { owner, year, backToTop, socials } = content;

  return (
    <motion.footer
      id="footer"
      className="relative bg-[#f7f5fa] pt-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 text-center px-4">

        {/* ICON AREA */}
        <div className="flex justify-center gap-3 mb-3 flex-wrap">
          {socials.map((social, index) => {
            const Icon = iconMap[social.id];
            if (!Icon) return null;

            return (
              <motion.a
                key={social.id}
                href={social.href}
                className="w-9 h-9 flex items-center justify-center bg-[#f5fefd] text-black rounded-sm shadow-xl"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>

        <motion.p
          className="text-xs text-gray-500 mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {owner} {year}
        </motion.p>

        <motion.a
          href={backToTop.href}
          className="hover:text-black transition-colors text-sm"
          whileHover={{ y: -3 }}
        >
          {backToTop.label}
        </motion.a>
      </div>

      {/* WAVE */}
      <motion.div
        className="w-full leading-none mt-8 md:mt-10"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
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
      </motion.div>
    </motion.footer>
  );
}