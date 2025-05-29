import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="mt-20 text-center" role="main">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/work" className="text-[#14b8a6] hover:underline mt-4 block">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  const { title, image, type, description, stack, code, link, status, details } = project;

  const variantClasses = {
    live:      "text-[#00ffe0] bg-[#00ffe00d] hover:bg-[#00ffe033]",
    details:   "text-[#c084fc] bg-[#c084fc0d] hover:bg-[#c084fc33]",
    fe:        "text-[#f472b6] bg-[#f472b60d] hover:bg-[#f472b633]",
    be:        "text-[#fcd34d] bg-[#fcd34d0d] hover:bg-[#fcd34d33]",
    viewcode:  "text-[#38bdf8] bg-[#38bdf80d] hover:bg-[#38bdf833]",
  };

  const getIcon = (variant) => {
    switch (variant) {
      case 'fe': return '💻';
      case 'be': return '⚙️';
      case 'live': return '🔗';
      case 'details': return '📖';
      default: return '📂';
    }
  };

  return (
    <>
      <a
        href="#project-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 z-20 p-2 bg-[#00ffe0] text-[#0a0e1a] rounded"
      >
        Skip to project content
      </a>

      <main
        id="project-content"
        role="main"
        aria-labelledby="project-title"
        className="relative z-10 min-h-[calc(100vh-3rem)] px-4 sm:px-6 lg:px-8 pt-6 pb-16 overflow-visible"
      >
        <div
          className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#00ffe0] opacity-20 blur-3xl rounded-full sm:w-[400px] sm:h-[400px]"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto space-y-10 text-[#e0e6ed]">
          <article className="space-y-10">
            <header>
              <h2 id="project-title" className="text-3xl sm:text-4xl md:text-5xl font-bold">
                {title}
              </h2>
              <div className="mt-2 space-y-1 text-sm sm:text-base text-[#94a3b8]">
                <p>{type}</p>
                <p className="italic">{status}</p>
              </div>
            </header>

            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full rounded shadow object-cover"
            />

            <section aria-labelledby="description-heading">
              <h3 id="description-heading" className="sr-only">Description</h3>
              <p>{description}</p>
            </section>

            <section aria-labelledby="stack-heading">
              <h3 id="stack-heading" className="text-xl sm:text-2xl font-semibold">
                🛠 Tech Stack
              </h3>
              <ul role="list" className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                {stack.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-[#0f172a] text-[#14b8a6] text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            {details && (
              <section aria-labelledby="details-heading">
                <h3 id="details-heading" className="text-xl sm:text-2xl font-semibold">📖 Case Study</h3>
                <div className="space-y-4 text-[#cbd5e1]">
                  {details.problem && (
                    <div>
                      <h4 className="font-bold">Problem</h4>
                      <p>{details.problem}</p>
                    </div>
                  )}
                  {details.solution && (
                    <div>
                      <h4 className="font-bold">Solution</h4>
                      <p>{details.solution}</p>
                    </div>
                  )}
                  {details.features && (
                    <div>
                      <h4 className="font-bold">Key Features</h4>
                      <ul role="list" className="list-disc list-inside space-y-1">
                        {details.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {details.future && (
                    <div>
                      <h4 className="font-bold">Future Plans</h4>
                      <p>{details.future}</p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {(link || (Array.isArray(code) && code.length > 0)) && (
              <section className="mt-12">
                <h4 className="text-[#94a3b8] text-sm uppercase mb-4 tracking-widest">Resources</h4>
                <div className="flex flex-wrap gap-3">
                  {link && link !== '#' && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full transition ${variantClasses.live}`}
                    >
                      🔗 <span>Live Site</span>
                    </a>
                  )}
                  {Array.isArray(code) && code.length > 0 &&
                    code.map(({ label, url, variant }, idx) => (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full transition ${
                          variantClasses[variant] || variantClasses.viewcode
                        }`}
                      >
                        {getIcon(variant)} <span>{label}</span>
                      </a>
                    ))
                  }
                </div>
              </section>
            )}
          </article>

          <footer className="pt-4 border-t border-[#1e293b] mt-10">
            <Link to="/work" className="text-[#14b8a6] hover:underline text-sm sm:text-base">
              ← Back to Projects
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
}
