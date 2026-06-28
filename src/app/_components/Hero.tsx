export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-blue/10 via-white to-white px-6">
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
        <div className="w-full md:w-2/3 h-full flex flex-col justify-center">
          <p className="font-cursive text-dark-blue text-lg sm:text-xl md:text-3xl italic">
            Hello, my name is
          </p>
          <h1 className="font-heading text-4xl font-extrabold mb-2 text-dark-blue">
            Nguyen Viet Thanh
          </h1>
          <p className="font-heading font-bold text-dark-blue text-md sm:text-lg mb-6">
            Test Engineer
          </p>
          <p className="text-gray-700 mb-6 text-justify max-w-lg">
            3+ years of experience in SaaS testing. I help teams enhance software
            quality by leveraging automation, optimizing processes, and fostering
            collaboration — making testing an integral part of development.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="#resume"
              className="inline-block bg-dark-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-dark-blue/90 transition"
            >
              Check out my resume
            </a>
            <a
              href="https://github.com/vietthanh13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition text-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/thanhnguyenviett/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition text-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative w-full sm:w-1/3 mb-6 md:mb-0 md:ml-10 flex justify-center">
          <div className="w-64 h-64 rounded-full bg-dark-blue/10 flex items-center justify-center overflow-hidden">
            <span className="text-dark-blue text-6xl font-cursive italic">NT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
