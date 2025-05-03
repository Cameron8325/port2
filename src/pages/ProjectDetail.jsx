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

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#project-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 z-20 p-2 bg-[#00ffe0] text-[#0a0e1a] rounded"
      >
        Skip to project content
      </a>

      {/* fixed dark bg under navbar (3rem height) */}
      <div className="fixed inset-x-0 top-12 bottom-0 -z-10 bg-[#0a0e1a]" aria-hidden="true" />

      <main
        id="project-content"
        role="main"
        aria-labelledby="project-title"
        className="relative z-10 min-h-[calc(100vh-3rem)] px-6 py-20 overflow-visible"
      >
        {/* Consistent decorative glow blob */}
        <div
          className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#00ffe0] opacity-20 blur-3xl rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto space-y-10 text-[#e0e6ed]">
          <Link to="/work" className="text-[#14b8a6] hover:underline">
            ← Back to Projects
          </Link>

          <article className="space-y-6">
            <header>
              <h2 id="project-title" className="text-4xl font-bold">
                {title}
              </h2>
              <p className="text-sm text-[#94a3b8]">{type}</p>
              <p className="text-[#94a3b8] italic">{status}</p>
            </header>

            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full rounded shadow"
            />

            <section aria-labelledby="description-heading">
              <h3 id="description-heading" className="sr-only">
                Description
              </h3>
              <p>{description}</p>
            </section>

            <section aria-labelledby="stack-heading">
              <h3 id="stack-heading" className="text-2xl font-semibold">
                🛠 Tech Stack
              </h3>
              <ul role="list" className="flex flex-wrap gap-3 mt-4">
                {stack.map((tech, idx) => (
                  <li key={idx} className="bg-[#0f172a] text-[#14b8a6] text-xs px-3 py-1 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            {details && (
              <section aria-labelledby="details-heading">
                <h3 id="details-heading" className="text-2xl font-semibold">
                  📖 Case Study
                </h3>
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

            <section className="flex gap-4 mt-8">
              {link && link !== '#' && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6366f1] text-white px-5 py-2 rounded-lg hover:bg-[#4f46e5]"
                >
                  View Live
                </a>
              )}
              {code && code !== '#' && (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#14b8a6] text-[#14b8a6] px-5 py-2 rounded-lg hover:bg-[#14b8a6] hover:text-white"
                >
                  View Code
                </a>
              )}
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
