import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import content from "../../content/project.json";

const styles = {
  section: "py-24 bg-[#f7f5fa]",
  container: "max-w-4xl",
  title: "text-3xl font-serif text-center mb-16",
  list: "space-y-12",

  card:
    "grid md:grid-cols-2 rounded-2xl overflow-hidden bg-[#f5fefd] shadow-xl min-h-[350px] md:max-h-[350px]",

  media:
    "h-[260px] md:h-full overflow-hidden",

  image:
    "w-full h-full object-cover md:max-h-[350px]",

  content:
    "flex flex-col justify-center items-center p-10 text-center h-full space-y-4",

  projectTitle:
    "text-xl font-serif",

  description:
    "text-[var(--project-muted)] leading-relaxed",

  buttonWrapper:
    "pt-2"
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

export default function ProjectsSection() {
  const { sectionTitle, items } = content;

  return (
    <motion.section
      id="projects"
      className={styles.section}
      style={{
        "--project-muted": "#6B7280"
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <Container className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {sectionTitle}
        </motion.h2>

        <motion.div className={styles.list}>
          {items.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                className={styles.card}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: isReversed ? 60 : -60
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* IMAGE */}
                <div
                  className={`${styles.media} ${
                    isReversed ? "md:order-2" : ""
                  }`}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className={styles.image}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`${styles.content} ${
                    isReversed ? "md:order-1" : ""
                  }`}
                >
                  <motion.h3
                    className={styles.projectTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className={styles.description}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className={styles.buttonWrapper}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                    asChild
                    variant="outline"
                  >
                    <a href={project.link} target="_blank">
                      View Project
                    </a>
                  </Button>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </motion.section>
  );
}