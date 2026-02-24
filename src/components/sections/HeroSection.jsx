import Container from "../ui/Container";
import Button from "../ui/Button";
import Profile from "../../assets/Images/profile.png";
import content from "../../content/hero.json";

/**
 * Centralized styling for maintainability.
 */
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

export default function HeroSection() {
  return (
    <section
      id="home"
      className={styles.section}
      style={{
        "--hero-accent": "#9966cc", // yellow-500
        "--hero-muted": "#6B7280"   // gray-500
      }}
    >
      <Container className={styles.container}>
        <div>
          <p className={styles.role}>
            {content.role}
          </p>
          {content.headline.map((h) => (
            <h1 className={styles.headline}>
            {h}
          </h1>
          ))}
          
          <p className={styles.description}>
            {content.description}
          </p>

          <div className={styles.buttonGroup}>
            {content.actions.map((action) => (
              <Button
                key={action.label}
                variant={action.variant === "outline" ? "outline" : undefined}
                className={
                  action.variant === "outline"
                    ? "hover:bg-black hover:text-white"
                    : undefined
                }
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>

      {/* Absolute Hero Image */}
      <div className={styles.imageWrapper}>
        <img
          src={Profile}
          alt="Hero profile"
          className={styles.image}
        />
      </div>
    </section>
  );
}
