export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center px-6 gap-10">
        <div>
          <h2 className="text-4xl font-serif mb-4">About me</h2>
          <p className="text-gray-500 mb-6">
            Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor.
          </p>

          <button className="bg-yellow-400 px-5 py-2 rounded-md">
            Resume
          </button>
        </div>

        <div className="bg-yellow-400 w-[300px] h-[300px] rounded-full mx-auto" />
      </div>
    </section>
  );
}
