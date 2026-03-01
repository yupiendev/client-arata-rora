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

  button:
    "bg-[var(--about-accent)] px-6 py-2.5 rounded-md transition-transform duration-200 hover:scale-105 text-white",

  visualWrapper:
    "relative flex justify-center md:justify-end",

  circleBackground:
    "absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-[var(--about-accent)] translate-x-1 translate-y-3",

  circleImageWrapper:
    "relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden z-10",

  image:
    "w-full h-full object-cover"
};

export default function AboutSection() {
  const { label, title, description, profileImage, cta } = content;

  return (
    <section
      id="about"
      className={styles.section}
      style={{
        "--about-bg": "#f7f5fa",     // gray-100
        "--about-accent": "#9966cc", // yellow-400
        "--about-muted": "#6B7280"   // gray-500
      }}
    >
      <div className={styles.wrapper}>

        {/* LEFT */}
        <div className={styles.textContainer}>
          <p className={styles.label}>{label}</p>

          <h2 className={styles.title}>{title}</h2>

          <p className={styles.description}>{description}</p>

        </div>

        {/* RIGHT - PROFILE IMAGE */}
        <div className={styles.visualWrapper}>
          <div className={styles.circleBackground} />

          <div className={styles.circleImageWrapper}>
            <img
              src={profileImage}
              alt="Profile"
              className={styles.image}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
