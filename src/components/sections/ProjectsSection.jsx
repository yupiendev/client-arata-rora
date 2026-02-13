import Container from "../ui/Container";
import Button from "../ui/Button";
import { PROJECTS } from "../../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-100">
      <Container className="max-w-4xl">
        <h2 className="text-3xl font-serif text-center mb-16">
          Projects
        </h2>

        <div className="space-y-12">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className="grid md:grid-cols-2 rounded-2xl overflow-hidden bg-white shadow-sm min-h-[350px] aspect-video"
            >
              {/* IMAGE */}
              <div
                className={`
                  h-[260px] md:h-full
                  ${i % 2 === 1 ? "md:order-2" : ""}
                `}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div
                className={`
                  flex flex-col justify-center p-10
                  ${i % 2 === 1 ? "md:order-1" : ""}
                `}
              >
                <h3 className="text-xl font-serif mb-3">{p.title}</h3>

                <p className="text-gray-500 mb-5 leading-relaxed">
                  {p.desc}
                </p>

                <div>
                  <Button variant="outline">View Project</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
