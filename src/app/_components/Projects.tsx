const projects = [
  {
    title: "Automation Framework Revamp",
    description:
      "Led the migration of a legacy Selenium test suite to Cypress, improving test execution speed by 40% and reducing flaky tests. Integrated tests into TeamCity CI pipeline for continuous feedback.",
    tags: ["Cypress", "TeamCity", "JavaScript"],
    github: "https://github.com/vietthanh13",
  },
  {
    title: "CI/CD Pipeline Integration",
    description:
      "Designed and implemented automated testing pipelines using TeamCity and AWS, enabling parallel test execution across UI, API, and integration layers with real-time reporting via Xray.",
    tags: ["TeamCity", "AWS", "Xray"],
    github: "https://github.com/vietthanh13",
  },
  {
    title: "Test Strategy for SaaS Platform",
    description:
      "Developed a comprehensive test strategy for a multi-tenant SaaS platform, defining risk-based testing approaches, automation coverage targets, and QA process improvements across Scrum teams.",
    tags: ["Selenium", "Java", "Scrum", "SAFe"],
    github: "https://github.com/vietthanh13",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-4xl w-full px-6 md:px-10 py-5">
        <h2 className="font-heading text-center text-dark-blue text-3xl font-bold mb-6 underline decoration-light-blue decoration-4 underline-offset-4">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="font-heading font-bold text-dark-blue text-lg mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-light-blue/10 text-light-blue text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-dark-blue text-sm font-medium hover:text-light-blue transition"
              >
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
