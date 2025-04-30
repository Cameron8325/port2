import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Work() {
  return (
    <section className="min-h-[90vh] px-6 py-20 bg-[#0a0e1a] text-[#e0e6ed]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-extrabold">💼 Work</h2>
          <p className="text-lg text-[#94a3b8]">
            A collection of real systems I've built, from internal tools to public-facing platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 space-y-4 flex flex-col justify-between h-[300px]">
                <div className="space-y-1">
                  <Link
                    to={`/work/${proj.slug}`}
                    className="text-2xl font-bold hover:underline text-[#00ffe0]"
                  >
                    {proj.title}
                  </Link>
                  <p className="text-sm text-[#94a3b8]">{proj.type}</p>
                  <p className="text-md text-[#cbd5e1] mt-2">{proj.description}</p>
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
                  {proj.link && proj.link !== "#" && (
                    <a
                      href={proj.link}
                      target="_blank"
                      className="text-sm font-medium text-[#00ffe0] hover:underline"
                    >
                      View Live
                    </a>
                  )}
                  {proj.code && proj.code !== "#" && (
                    <a
                      href={proj.code}
                      target="_blank"
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
  );
}
