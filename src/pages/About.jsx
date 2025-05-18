import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const [introRef, introVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal(150);
  const [howRef, howVisible] = useScrollReveal(300);
  const [stackRef, stackVisible] = useScrollReveal(450);
  const [ctaRef, ctaVisible] = useScrollReveal(600);

  const coreValues = [
    {
      title: "Clarity Over Complexity",
      text: "I aim to build systems that anyone on the team can understand, extend, or debug. The focus is on maintainable architecture, not just clever code.",
    },
    {
      title: "Purpose-Driven Work",
      text: "I want to solve real problems. Repetition without impact drains me. I care about building tools that improve how someone works, decides, or collaborates.",
    },
    {
      title: "Precision Over Assumption",
      text: "I don’t memorize everything. That’s not my strength. But I ask the questions that surface the real gaps — the kind that make products more robust and less brittle.",
    },
    {
      title: "People-First Development",
      text: "Code is only as good as the experience it creates. I care deeply about performance, UX, and how it actually feels to use what I build.",
    },
  ];

  const techStack = [
    "JavaScript",
    "Python",
    "React",
    "Django",
    "PostgreSQL",
    "REST APIs",
    "Stripe",
    "AWS (S3, EC2)",
    "Git & GitHub",
  ];

  return (
    <>
      <main
        id="main-content"
        role="main"
        aria-labelledby="about-heading"
        className="relative z-10 min-h-[calc(100vh-3rem)] px-4 sm:px-6 lg:px-8 pt-10 pb-16 overflow-visible"
      >
        {/* Consistent decorative glow blob */}
        <div
          className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#00ffe0] opacity-20 blur-3xl rounded-full sm:h-[400px]"
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto space-y-24 text-[#e0e6ed]">
          {/* Intro */}
          <section
            ref={introRef}
            className={`text-center space-y-6 transition-opacity duration-700 ${
              introVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
            >
              👋 About Me
            </h2>
            <p className="text-base sm:text-lg text-[#94a3b8] max-w-3xl mx-auto">
              I’m <strong>Cameron Smith</strong>, a full-stack web developer
              with a background in QA, IT operations, and technical support.
            </p>
            <p className="text-base sm:text-lg max-w-3xl mx-auto">
              I build real-world systems that reduce complexity and help teams
              move faster. These are tools that are clean, scalable, and used by
              real people every day.
            </p>
            <p className="text-base sm:text-lg max-w-3xl mx-auto">
              My work is rooted in systems thinking. I don’t just write code. I
              design workflows. Whether it’s client scheduling platforms or
              backend logic that automates business processes, I thrive at the
              intersection of structure and usability.
            </p>
            <p className="text-base sm:text-lg max-w-3xl mx-auto">
              What drew me to software development is the same thing that drew
              me to language. It’s translation. It’s puzzle-solving. It’s how
              abstract ideas become tangible tools that support others. That
              mindset — clear, purposeful, and people-first — is what shapes how
              I build.
            </p>
          </section>

          {/* Core Values */}
          <section
            ref={valuesRef}
            aria-labelledby="values-heading"
            className={`transition-opacity duration-700 ${
              valuesVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <h3
              id="values-heading"
              className="text-2xl sm:text-3xl font-bold mb-10 text-center"
            >
              💡 Core Values
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {coreValues.map((val, i) => (
                <article
                  key={i}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl opacity-0 ${
                    valuesVisible ? "animate-fade-up" : ""
                  }`}
                  aria-labelledby={`value-title-${i}`}
                >
                  <h4
                    id={`value-title-${i}`}
                    className="font-semibold text-lg text-[#00ffe0]"
                  >
                    {val.title}
                  </h4>
                  <p className="text-[#cbd5e1] text-sm mt-2">{val.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* How I Work */}
          <section
            ref={howRef}
            aria-labelledby="how-heading"
            className={`space-y-6 text-[#cbd5e1] text-base sm:text-lg transition-opacity duration-700 ${
              howVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <h3
              id="how-heading"
              className="text-2xl sm:text-3xl font-bold text-center"
            >
              🧭 How I Work
            </h3>
            <p>
              The beginning of any project is my favorite phase. That’s the
              moment when everything is still loose and full of potential.
              That’s when real architecture takes shape.
            </p>
            <p>
              I ask questions. I challenge assumptions — not to be difficult,
              but to make sure we’re solving the right problems.
            </p>
            <p>
              I’ve learned to slow down, break things into atoms, and simplify.
              That approach has helped me write better software, manage my ADD,
              and build systems that last.
            </p>
            <p>
              When I join a team, I bring momentum: making things feel easier,
              clearer, and finally click into place. That’s the kind of
              developer and teammate I strive to be.
            </p>
          </section>

          {/* Technical Stack */}
          <section
            ref={stackRef}
            aria-labelledby="stack-heading"
            className={`transition-opacity duration-700 ${
              stackVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <h3
              id="stack-heading"
              className="text-2xl sm:text-3xl font-bold mb-8 text-center"
            >
              🛠 Technical Stack
            </h3>
            <ul
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-[#f1f5f9]"
              role="list"
            >
              {techStack.map((tech, i) => (
                <li
                  key={tech}
                  style={{ animationDelay: `${i * 75}ms` }}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded text-center opacity-0 ${
                    stackVisible ? "animate-fade-up" : ""
                  }`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {/* Resume CTA */}
          <section
            ref={ctaRef}
            aria-labelledby="resume-heading"
            className={`text-center transition-opacity duration-700 ${
              ctaVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <h3 id="resume-heading" className="sr-only">
              Resume Download
            </h3>
            <p className="text-[#94a3b8] text-sm mb-4">
              Download my resume to learn more about my technical experience and
              current projects.
            </p>
            <a
              href="/Cameron_Smith_Resume.pdf"
              className="inline-block border-2 border-[#14b8a6] text-[#14b8a6] text-lg font-semibold px-8 py-4 rounded-xl hover:bg-[#14b8a6] hover:text-[#0a0e1a] transition"
            >
              Download Resume
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
