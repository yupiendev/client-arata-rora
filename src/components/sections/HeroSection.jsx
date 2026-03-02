import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Profile from "../../assets/Images/profile.png";
import content from "../../content/hero.json";
import { FaHandsHoldingCircle } from "react-icons/fa6";

const styles = {
  section:
    "relative grid grid-cols-2 min-h-screen bg-[#f7f5fa] overflow-hidden items-center",
  container:
    "relative z-10 col-span-1 pl-20",
  role:
    "text-[var(--hero-accent)] font-semibold mb-4 tracking-wide",
  headline:
    "text-5xl md:text-6xl font-serif leading-tight mb-6",
  description:
    "text-[var(--hero-muted)] mb-8 max-w-md",
  buttonGroup:
    "flex gap-4",
  imageWrapper:
    "overflow-hidden pointer-events-none",
  image:
    "absolute top-0 right-0 z-10 w-[60vw] md:w-[45vw] aspect-square"
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
                {content.action.label}
              </Button>
            </motion.div>

            <motion.a
              href=""
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
      </motion.div>
    </motion.section>
  );
}