const skillCategories = [
  {
    label: "Test Automation",
    skills: ["Cypress", "Selenium", "Cucumber", "WebDriver"],
  },
  {
    label: "CI/CD & DevOps",
    skills: ["TeamCity", "AWS"],
  },
  {
    label: "Testing & QA Tools",
    skills: ["Xray", "Zephyr", "Postman"],
  },
  {
    label: "Programming",
    skills: ["JavaScript", "Java"],
  },
  {
    label: "Methodologies",
    skills: ["Scrum", "Kanban", "SAFe"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-4xl w-full px-6 md:px-10 py-5">
        <h2 className="font-heading text-center text-dark-blue text-3xl font-bold mb-6 underline decoration-light-blue decoration-4 underline-offset-4">
          Skills &amp; Tools
        </h2>
        <div className="w-full space-y-6">
          {skillCategories.map((category) => (
            <div key={category.label} className="flex flex-col sm:flex-row items-start gap-3">
              <span className="font-heading font-bold text-dark-blue text-sm sm:text-base min-w-40">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-dark-blue/10 text-dark-blue text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
