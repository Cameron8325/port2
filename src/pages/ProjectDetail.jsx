import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/work" className="text-[#14b8a6] hover:underline mt-4 block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const { title, image, description, stack, code, link, status, details } = project;

  return (
    <>
      {/* fixed dark bg under navbar (3rem height) */}
      <div className="fixed inset-x-0 top-12 bottom-0 -z-10 bg-[#0a0e1a]" />

      <section
        className="
          relative z-10
          max-w-4xl mx-auto
          px-6 py-20
          space-y-10
          overflow-visible
          text-[#e0e6ed]
          min-h-[calc(100vh-3rem)]
        "
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

        <Link to="/work" className="text-[#14b8a6] hover:underline">
          ← Back to Projects
        </Link>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-sm text-[#94a3b8]">{project.type}</p>
          <p className="text-[#94a3b8] italic">{status}</p>
          <img src={image} alt={title} className="w-full rounded shadow" />
          <p>{description}</p>

          <div className="flex flex-wrap gap-3 mt-4">
            {stack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#0f172a] text-[#14b8a6] text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {details && (
            <div className="space-y-4">
              {details.problem && <p><strong>Problem:</strong> {details.problem}</p>}
              {details.solution && <p><strong>Solution:</strong> {details.solution}</p>}
              {details.features && (
                <div>
                  <strong>Key Features:</strong>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-[#cbd5e1]">
                    {details.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
              {details.future && <p><strong>Future Plans:</strong> {details.future}</p>}
            </div>
          )}

          <div className="flex gap-4 mt-8">
            {link && link !== "#" && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6366f1] text-white px-5 py-2 rounded-lg hover:bg-[#4f46e5]"
              >
                View Live
              </a>
            )}
            {code && code !== "#" && (
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#14b8a6] text-[#14b8a6] px-5 py-2 rounded-lg hover:bg-[#14b8a6] hover:text-white"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
