import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Work() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [openDropdownSlug, setOpenDropdownSlug] = React.useState(null);
  const panelRefs = React.useRef({}); // To track each dropdown panel/button

  // Listen for outside click to close dropdown
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (!openDropdownSlug) return;
      const currentPanel = panelRefs.current[openDropdownSlug];
      if (currentPanel && !currentPanel.contains(event.target)) {
        setOpenDropdownSlug(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [openDropdownSlug]);

  //Shout out to Erica and Abby for helping with the colors
  const variantClasses = {
    live:    "text-[#00ffe0] hover:underline", // aqua/cyan
    details: "text-[#c084fc] hover:underline", // purple (Case Study)
    fe:      "text-[#f472b6] hover:underline", // pink (Frontend)
    be:      "text-[#fcd34d] hover:underline", // yellow (Backend)
    viewcode: "text-[#38bdf8] hover:underline", // blue (View Code)
  };

  function handleDropdownClick(slug) {
    setOpenDropdownSlug(openDropdownSlug === slug ? null : slug);
  }

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#work-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 z-20 p-2 bg-[#00ffe0] text-[#0a0e1a] rounded"
      >
        Skip to work content
      </a>

      <main
        id="work-content"
        role="main"
        aria-labelledby="work-heading"
        ref={sectionRef}
        className="relative z-10 min-h-[calc(100vh-3rem)] px-4 sm:px-6 lg:px-8 pt-6 pb-16 overflow-visible"
      >
        {/* Decorative glow blob */}
        <div
          className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#00ffe0] opacity-20 blur-3xl rounded-full sm:h-[400px]"
          aria-hidden="true"
        />

        <header
          id="work-heading"
          className={`text-center space-y-4 transition-opacity duration-700 ${
            isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">💼 Work</h2>
          <p className="text-base sm:text-lg text-[#94a3b8]">
            A collection of systems I’ve built—internal tools, client platforms, and public-facing apps.
          </p>
        </header>

        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {projects.map((proj, idx) => {
            const liveCta = proj.ctas.find(c => c.variant === 'live');
            const detailsCta = proj.ctas.find(c => c.variant === 'details');
            const isOpen = openDropdownSlug === proj.slug;
            const hasMultiCode = proj.code && proj.code.length > 1;
            const singleCode = proj.code && proj.code.length === 1 ? proj.code[0] : null;

            // For outside click: attach a ref to the container holding the CTAs & the dropdown
            return (
              <li key={proj.slug} className="relative h-full">
                <article
                  aria-labelledby={`project-title-${proj.slug}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  className={`group bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.015] hover:ring-[#00ffe0] hover:ring-2 flex flex-col h-full min-h-[460px] ${
                    isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Image wrapper clips overflow */}
                  <div className="overflow-hidden rounded-t-xl">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 id={`project-title-${proj.slug}`} className="text-2xl font-bold text-[#00ffe0]">
                        <Link to={`/work/${proj.slug}`} className="hover:underline">
                          {proj.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-[#94a3b8]">{proj.type}</p>
                      <p className="text-md text-[#cbd5e1] mt-2">{proj.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {proj.stack.map(tech => (
                        <span
                          key={tech}
                          className="bg-[#0f172a] text-[#14b8a6] text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs row always in-line */}
                    <div
                      className="mt-6"
                      ref={el => {
                        // Save a reference for outside click
                        if (panelRefs.current) panelRefs.current[proj.slug] = el;
                      }}
                    >
                      <div className="flex gap-4 items-center flex-wrap relative">
                        {/* Live Preview */}
                        {liveCta && (
                          <a
                            href={liveCta.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm font-medium ${variantClasses.live}`}
                          >
                            {liveCta.label}
                          </a>
                        )}
                        {/* Case Study */}
                        {detailsCta && (
                          <Link
                            to={detailsCta.url}
                            className={`text-sm font-medium ${variantClasses.details}`}
                          >
                            {detailsCta.label}
                          </Link>
                        )}
                        {/* View Code */}
                        {hasMultiCode ? (
                          <>
                            {/* Desktop: Slide-out inline links */}
                            <div className="hidden sm:flex items-center relative">
                              <button
                                type="button"
                                onClick={() => handleDropdownClick(proj.slug)}
                                className={`inline-flex items-center text-sm font-medium ${variantClasses.viewcode}`}
                                aria-haspopup="true"
                                aria-expanded={isOpen}
                                tabIndex={0}
                              >
                                View Code
                                <span className="ml-1 select-none">▸</span>
                              </button>
                              <div
                                className="flex items-center transition-all duration-300 ease-in-out"
                                style={{
                                  maxWidth: isOpen ? '400px' : '0px',
                                  opacity: isOpen ? 1 : 0,
                                  overflow: 'hidden',
                                  marginLeft: isOpen ? '12px' : '0px',
                                }}
                                aria-hidden={!isOpen}
                              >
                                {isOpen &&
                                  proj.code.map(({ label, url, variant }) => (
                                    <a
                                      key={label}
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`ml-4 text-sm font-medium whitespace-nowrap ${variantClasses[variant]} hover:underline`}
                                      tabIndex={isOpen ? 0 : -1}
                                    >
                                      {label}
                                    </a>
                                  ))}
                              </div>
                            </div>
                            {/* Mobile: Button only in row, panel below */}
                            <div className="block sm:hidden">
                              <button
                                type="button"
                                onClick={() => handleDropdownClick(proj.slug)}
                                className={`inline-flex items-center text-sm font-medium ${variantClasses.viewcode}`}
                                aria-haspopup="true"
                                aria-expanded={isOpen}
                              >
                                View Code
                                <span className="ml-1 select-none">▾</span>
                              </button>
                            </div>
                          </>
                        ) : singleCode ? (
                          <a
                            href={singleCode.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm font-medium ${variantClasses.viewcode} hover:underline`}
                          >
                            View Code
                          </a>
                        ) : null}
                      </div>

                      {/* Mobile: FE/BE panel below all CTAs, stacked and centered */}
                      {hasMultiCode && (
                        <div className={`sm:hidden w-full transition-[max-height] duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                          {isOpen && (
                            <div className="w-full bg-[#111827] rounded-md shadow-lg ring-1 ring-black ring-opacity-20 px-4 py-3 flex flex-col items-center gap-2">
                              {proj.code.map(({ label, url, variant }) => (
                                <a
                                  key={label}
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`text-sm font-medium ${variantClasses[variant]} hover:underline`}
                                >
                                  {label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
