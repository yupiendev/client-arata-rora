import Container from "../ui/Container";
import Button from "../ui/Button";
import content from "../../content/project.json";

/**
 * Centralized styles for maintainability.
 * Change layout, color, or spacing here.
 */
const styles = {
  section: "py-24 bg-white",
  container: "max-w-4xl",
  title: "text-3xl font-serif text-center mb-16",
  list: "space-y-12",

  card:
    "grid md:grid-cols-2 rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 min-h-[350px]",

  media:
    "h-[260px] md:h-full",

  image:
    "w-full h-full object-cover",

  content:
    "flex flex-col justify-center items-center p-10 text-center h-full space-y-4",

  projectTitle:
    "text-xl font-serif",

  description:
    "text-[var(--project-muted)] leading-relaxed",

  buttonWrapper:
    "pt-2"
};

export default function ProjectsSection() {
  const { sectionTitle, items } = content;

  return (
    <section
      id="projects"
      className={styles.section}
      style={{
        "--project-muted": "#6B7280" // gray-500
      }}
    >
      <Container className={styles.container}>
        <h2 className={styles.title}>
          {sectionTitle}
        </h2>

        <div className={styles.list}>
          {items.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                className={styles.card}
              >
                {/* IMAGE */}
                <div
                  className={`${styles.media} ${isReversed ? "md:order-2" : ""}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.image}
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`${styles.content} ${isReversed ? "md:order-1" : ""}`}
                >
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>

                  <p className={styles.description}>
                    {project.description}
                  </p>

                  <div className={styles.buttonWrapper}>
                    <Button
                      variant="outline"
                      className="hover:bg-black hover:text-gray-400"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
