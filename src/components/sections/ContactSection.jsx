import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <Container className="max-w-md text-center">
        <h2 className="text-3xl font-serif mb-12">Projects</h2>

        <form className="space-y-4 text-left">
          <input placeholder="Name" className="w-full border p-2 rounded" />
          <input placeholder="Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Message" className="w-full border p-2 rounded h-28" />

          <div className="text-right">
            <Button>Send</Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
