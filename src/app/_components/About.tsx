export default function About() {
  return (
    <section id="about" className="flex justify-center py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-4xl w-full px-6 md:px-10 py-5">
        <h2 className="font-heading text-center text-dark-blue text-3xl font-bold mb-6 w-full max-w-5xl underlined underline decoration-light-blue decoration-4 underline-offset-4">
          About Me
        </h2>
        <p className="text-gray-700 mb-6 text-justify max-w-3xl leading-relaxed">
          I am a Test Engineer with 3+ years of experience in SaaS testing,
          specializing in automation, process optimization, and seamless
          integration of testing into development. I help teams enhance software
          quality by leveraging automation, optimizing processes, and fostering
          collaboration. My goal is to ensure testing is not just a phase, but an
          integral part of software development, allowing teams to catch issues
          early and build high-quality, reliable products.
        </p>
      </div>
    </section>
  );
}
