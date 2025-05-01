import { Link } from "react-router-dom";
import projects from "../data/projects";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Work() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <>
      {/* fixed dark bg under navbar (3rem height) */}
      <div className="fixed inset-x-0 top-12 bottom-0 -z-10 bg-[#0a0e1a]" />

      <section
        className="relative z-10 min-h-[calc(100vh-3rem)] px-6 py-20 overflow-visible"
      >
        {/* blob scrolls away */}
        <div
          className="
            absolute top-[-100px] right-[-150px]
            w-[400px] h-[400px]
            bg-[#00ffe0] opacity-20 blur-3xl rounded-full
            animate-pulse-slow
          "
        />

        <div
          ref={sectionRef}
          className="relative z-10 max-w-6xl mx-auto space-y-16 text-[#e0e6ed]"
        >
          <div
            className={`text-center space-y-4 transition-opacity duration-700 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl font-extrabold">💼 Work</h2>
            <p className="text-lg text-[#94a3b8]">
              A collection of real systems I've built, from internal tools to
              public-facing platforms.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                style={{ animationDelay: `${idx * 100}ms` }}
                className={`opacity-0 ${
                  isVisible ? "animate-fade-up" : ""
                } group bg-white/5 backdrop-blur-sm ring-1 ring-white/10
                           rounded-xl overflow-hidden transition-all duration-300
                           hover:scale-[1.015] hover:ring-[#00ffe0] hover:ring-2`}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 space-y-4 flex flex-col justify-between h-[320px]">
                  <div className="space-y-1">
                    <Link
                      to={`/work/${proj.slug}`}
                      className="text-2xl font-bold hover:underline text-[#00ffe0]"
                    >
                      {proj.title}
                    </Link>
                    <p className="text-sm text-[#94a3b8]">{proj.type}</p>
                    <p className="text-md text-[#cbd5e1] mt-2">
                      {proj.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#0f172a] text-[#14b8a6] text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#00ffe0] hover:underline"
                      >
                        View Live
                      </a>
                    )}
                    {proj.code && (
                      <a
                        href={proj.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#a78bfa] hover:underline"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
