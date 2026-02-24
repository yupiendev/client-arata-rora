import Container from "../ui/Container";
import content from "../../content/experience.json";

/**
 * Clean, minimal styling system.
 * Adjust spacing or color centrally.
 */
const styles = {
  section: "py-24 bg-[#f7f5fa]",
  container: "max-w-3xl",
  title: "text-3xl font-serif text-center mb-16",

  list: "space-y-12",

  item: "border-b border-[var(--exp-border)] pb-8",

  header: "flex justify-between items-baseline flex-wrap gap-2",

  role: "text-xl font-serif",

  company: "text-[var(--exp-muted)]",

  period: "text-sm text-[var(--exp-muted)]",

  description: "mt-4 text-[var(--exp-body)] leading-relaxed"
};

export default function ExperienceSection() {
  const { sectionTitle, items } = content;

  return (
    <section
      id="collab"
      className={styles.section}
      style={{
        "--exp-border": "#E5E7EB", // gray-200
        "--exp-muted": "#6B7280",  // gray-500
        "--exp-body": "#374151"    // gray-700
      }}
    >
      <Container className={styles.container}>
        <h2 className={styles.title}>
          {sectionTitle}
        </h2>

        <div className={styles.list}>
          {items.map((exp) => (
            <article key={exp.id} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.role}>
                  {exp.role}
                </h3>

                <span className={styles.period}>
                  {exp.period}
                </span>
              </div>

              <p className={styles.company}>
                {exp.company}
              </p>

              <p className={styles.description}>
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
