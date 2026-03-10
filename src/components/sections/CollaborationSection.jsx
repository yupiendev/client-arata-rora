import { motion } from "framer-motion";
import Container from "../ui/Container";
import content from "../../content/collaboration.json";
import Button from "../ui/Button";
import { FaExternalLinkAlt } from "react-icons/fa";


const styles = {
  section: "py-24 bg-[#f7f5fa]",
  container: "max-w-3xl",
  title: "text-3xl font-serif text-center mb-16",

  list: "space-y-12",

  item: "border-b border-[var(--exp-border)] pb-8 group hover:cursor-pointer",

  header: "flex justify-between items-baseline flex-wrap gap-2",

  role: "text-xl font-serif group-hover:underline",

  company: "text-[var(--exp-muted)]",

  period: "text-sm text-[var(--exp-muted)]",

  description: "mt-4 text-[var(--exp-body)] leading-relaxed"
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
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

export default function CollaborationSection() {
  const { sectionTitle, items } = content;

  return (
    <motion.section
      id="collab"
      className={styles.section}
      style={{
        "--exp-border": "#E5E7EB",
        "--exp-muted": "#6B7280",
        "--exp-body": "#374151"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container className={styles.container}>
        <motion.h2
        className={styles.title} 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {sectionTitle}
      </motion.h2>

        <motion.div
          className={styles.list}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((exp, index) => (
            <motion.article
              key={exp.id}
              className={styles.item}
              onClick={() => {
                window.open(exp.link, "_blank")
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.header}>
                <h3 className={`${styles.role} inline-flex items-center gap-2`}>
                  {exp.title}
                  <FaExternalLinkAlt className="text-sm opacity-70" />
                </h3>

                <span className={styles.period}>
                  {exp.period}
                </span>
              </div>

              <p className={styles.company}>
                In collaboration with {exp.company}
              </p>

              <p className={styles.description}>
                {exp.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

