export default function ResumeCTA() {
  return (
    <section id="resume" className="flex justify-center py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-4xl w-full px-6 md:px-10 py-10">
        <h2 className="font-heading text-center text-dark-blue text-3xl font-bold mb-4">
          Want to learn more?
        </h2>
        <p className="text-gray-700 text-center mb-6 max-w-lg">
          Check out my resume for a detailed overview of my experience,
          projects, and achievements.
        </p>
        <a
          href="#"
          className="inline-block bg-dark-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-dark-blue/90 transition"
        >
          Check out my resume
        </a>
      </div>
    </section>
  );
}
