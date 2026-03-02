import { motion } from "framer-motion";
import content from "../../content/about.json";

const styles = {
  section: "py-24 bg-[var(--about-bg)]",
  wrapper:
    "max-w-6xl mx-auto grid md:grid-cols-2 items-center px-6 gap-12",

  textContainer: "max-w-md",

  label:
    "text-sm uppercase tracking-widest text-[var(--about-accent)] mb-3",

  title:
    "text-4xl font-serif mb-6",

  description:
    "text-[var(--about-muted)] mb-8 leading-relaxed",

  visualWrapper:
    "relative flex justify-center md:justify-end",

  circleBackground:
    "absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-[var(--about-accent)] translate-x-1 translate-y-3",

  circleImageWrapper:
    "relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden z-10",

  image:
    "w-full h-full object-cover"
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutSection() {
  const { label, title, description, profileImage } = content;

  return (
    <motion.section
      id="about"
      className={styles.section}
      style={{
        "--about-bg": "#f7f5fa",
        "--about-accent": "#9966cc",
        "--about-muted": "#6B7280"
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className={styles.wrapper}>

        {/* LEFT */}
        <motion.div
          className={styles.textContainer}
          variants={containerVariants}
        >
          <motion.p
            className={styles.label}
            variants={fadeUp}
          >
            {label}
          </motion.p>

          <motion.h2
            className={styles.title}
            variants={fadeUp}
          >
            {title}
          </motion.h2>

          <motion.p
            className={styles.description}
            variants={fadeUp}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className={styles.visualWrapper}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Floating background */}
          <motion.div
            className={styles.circleBackground}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Image scale-in */}
          <motion.div
            className={styles.circleImageWrapper}
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15
            }}
            viewport={{ once: true }}
          >
            <img
              src={profileImage}
              alt="Profile"
              className={styles.image}
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}