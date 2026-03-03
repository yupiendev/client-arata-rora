import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Profile from "/assets/Images/profile.webp";
import content from "../../content/hero.json";
import { FaHandsHoldingCircle } from "react-icons/fa6";

const styles = {
  section:
    "relative grid grid-cols-1 md:grid-cols-2 min-h-screen bg-[#f7f5fa] overflow-hidden",

  container:
    "relative z-20 px-6 md:pl-20 flex items-center",

  role:
    "text-white md:text-[var(--hero-accent)] font-semibold mb-4 tracking-wide",

  headline:
    "text-4xl md:text-6xl font-serif leading-tight mb-6 text-white md:text-black",

  description:
    "text-gray-200 md:text-[var(--hero-muted)] mb-8 max-w-md",

  buttonGroup:
    "flex gap-4",

  imageWrapper:
    "absolute inset-0 z-0 md:relative md:inset-auto md:z-10 flex justify-center items-center",

  image:
    "absolute right-0 top-0 w-full h-full md:h-auto md:w-[45vw] object-cover md:object-contain"
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      className={styles.section}
      style={{
        "--hero-accent": "#9966cc",
        "--hero-muted": "#6B7280"
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container className={styles.container}>
        <motion.div variants={containerVariants}>

          <motion.p
            className={styles.role}
            variants={fadeUp}
          >
            {content.role}
          </motion.p>

          {content.headline.map((h, i) => (
            <motion.h1
              key={i}
              className={styles.headline}
              variants={fadeUp}
            >
              {h}
            </motion.h1>
          ))}

          <motion.p
            className={styles.description}
            variants={fadeUp}
          >
            {content.description}
          </motion.p>

          <motion.div
            className={styles.buttonGroup}
            variants={fadeUp}
          >
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                variant={
                  content.action.variant === "outline"
                    ? "outline"
                    : undefined
                }
                className={
                  content.action.variant === "outline"
                    ? "hover:bg-black hover:text-white"
                    : undefined
                }
              >
                <a href="#projects">
                  {content.action.label}
                </a>
              </Button>
            </motion.div>

            <motion.a
              href="https://trakteer.id/aratarora" target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHandsHoldingCircle className="size-10 bg-white shadow-lg p-1 rounded-md text-[#9966cc]" />
            </motion.a>
          </motion.div>

        </motion.div>
      </Container>

      {/* Hero Image */}
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, scale: 1.1, x: 60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      >
        <motion.img
          src={Profile}
          alt="Hero profile"
          className={styles.image}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
         {/* MASKED OVERLAY (INLINE STYLE) */}
  <div
    className="absolute inset-0 md:hidden"
    style={{
      background: "rgba(0,0,0,0.65)",
      WebkitMaskImage: `url(${Profile})`,
      maskImage: `url(${Profile})`,
      WebkitMaskSize: "cover",
      maskSize: "cover",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center"
    }}
  />
      </motion.div>
    </motion.section>
  );
}