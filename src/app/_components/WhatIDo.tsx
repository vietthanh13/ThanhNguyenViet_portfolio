const services = [
  {
    title: "Test Strategy & Optimization",
    description:
      "Designing and optimizing test strategies that align with business objectives and ensure product excellence.",
    icon: (
      <svg className="w-6 h-6 text-light-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Automation Enhancement",
    description:
      "Enhancing automated test coverage across UI, API, and integration testing to catch issues early and ensure quality.",
    icon: (
      <svg className="w-6 h-6 text-light-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Framework Maintenance",
    description:
      "Maintaining automation frameworks to empower teams and enhance test reliability across projects.",
    icon: (
      <svg className="w-6 h-6 text-light-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "CI/CD Integration",
    description:
      "Integrating testing into CI/CD pipelines to ensure efficient and continuous feedback throughout development.",
    icon: (
      <svg className="w-6 h-6 text-light-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-4xl w-full px-6 md:px-10 py-5">
        <h2 className="font-heading text-center text-dark-blue text-3xl font-bold mb-6 underline decoration-light-blue decoration-4 underline-offset-4">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="font-heading font-bold text-dark-blue text-md sm:text-lg ml-3">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
