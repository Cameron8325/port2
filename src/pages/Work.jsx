import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Work() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [openDropdownSlug, setOpenDropdownSlug] = useState(null);
  const [tappedComingSoon, setTappedComingSoon] = useState(null);
  const panelRefs = useRef({});
  const tooltipRefs = useRef({});

  // Close "View Code" dropdown when clicking/tapping outside
  useEffect(() => {
    function handleClickOutsideDropdown(event) {
      if (!openDropdownSlug) return;
      const currentPanel = panelRefs.current[openDropdownSlug];
      if (currentPanel && !currentPanel.contains(event.target)) {
        setOpenDropdownSlug(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutsideDropdown);
    document.addEventListener('touchstart', handleClickOutsideDropdown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown);
      document.removeEventListener('touchstart', handleClickOutsideDropdown);
    };
  }, [openDropdownSlug]);

  // Close "Coming Soon" tooltip on mobile when clicking/tapping outside
  useEffect(() => {
    function handleClickOutsideTooltip(event) {
      if (!tappedComingSoon) return;
      const currentTooltip = tooltipRefs.current[tappedComingSoon];
      if (currentTooltip && !currentTooltip.contains(event.target)) {
        setTappedComingSoon(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutsideTooltip);
    document.addEventListener('touchstart', handleClickOutsideTooltip);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideTooltip);
      document.removeEventListener('touchstart', handleClickOutsideTooltip);
    };
  }, [tappedComingSoon]);

  const variantClasses = {
    live:    "text-[#00ffe0] hover:underline",
    details: "text-[#c084fc] hover:underline",
    fe:      "text-[#f472b6] hover:underline",
    be:      "text-[#fcd34d] hover:underline",
    viewcode:"text-[#38bdf8] hover:underline",
  };

  function handleDropdownClick(slug) {
    setOpenDropdownSlug(openDropdownSlug === slug ? null : slug);
  }

  return (
    <>
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
            const liveCta       = proj.ctas.find(c => c.variant === 'live');
            const detailsCta    = proj.ctas.find(c => c.variant === 'details');
            const isOpen        = openDropdownSlug === proj.slug;
            const hasMultiCode  = proj.code && proj.code.length > 1;
            const singleCode    = proj.code && proj.code.length === 1 ? proj.code[0] : null;

            return (
              <li key={proj.slug} className="relative h-full">
                <article
                  aria-labelledby={`project-title-${proj.slug}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  className={`group bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.015] hover:ring-[#00ffe0] hover:ring-2 flex flex-col h-full min-h-[460px] ${
                    isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="overflow-hidden rounded-t-xl">
                    <picture>
                      <source srcSet={proj.image} type="image/webp" />
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        width={640}
                        height={224}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </picture>
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

                    {/* ══════════════════════ Dropdown & CTAs Container ══════════════════════ */}
                    <div
                      className="mt-6"
                      ref={el => {
                        panelRefs.current[proj.slug] = el;
                      }}
                    >
                      <div className="flex gap-4 items-center flex-wrap relative">
                        {liveCta && (
                          proj.slug === 'your-project' ? (
                            <Link to={liveCta.url} className={`text-sm font-medium ${variantClasses.live}`}>
                              {liveCta.label}
                            </Link>
                          ) : liveCta.url === '#' ? (
                            // "Live Preview" with hover-on-desktop + tap-on-mobile tooltip
                            <span
                              ref={el => {
                                tooltipRefs.current[proj.slug] = el;
                              }}
                              className="relative peer cursor-pointer text-sm font-medium text-[#00ffe0]"
                              onClick={() =>
                                setTappedComingSoon(
                                  tappedComingSoon === proj.slug ? null : proj.slug
                                )
                              }
                            >
                              {liveCta.label}
                              <span
                                className={`
                                  absolute bottom-full left-1/2 
                                  transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded
                                  transition-opacity duration-200
                                  opacity-0 pointer-events-none
                                  md:peer-hover:opacity-100 md:peer-hover:pointer-events-auto
                                  ${tappedComingSoon === proj.slug ? 'opacity-100 pointer-events-auto' : ''}
                                `}
                              >
                                Coming soon!
                              </span>
                            </span>
                          ) : (
                            <a
                              href={liveCta.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`text-sm font-medium ${variantClasses.live}`}
                            >
                              {liveCta.label}
                            </a>
                          )
                        )}

                        {detailsCta && (
                          <Link to={detailsCta.url} className={`text-sm font-medium ${variantClasses.details}`}>
                            {detailsCta.label}
                          </Link>
                        )}

                        {hasMultiCode ? (
                          <>
                            <button
                              type="button"
                              onClick={() => handleDropdownClick(proj.slug)}
                              className={`inline-flex items-center text-sm font-medium ${variantClasses.viewcode}`}
                              aria-haspopup="true"
                              aria-expanded={isOpen}
                            >
                              View Code
                              <span className="ml-1 select-none">
                                <span className="md:hidden">▾</span>
                                <span className="hidden md:inline">▸</span>
                              </span>
                            </button>

                            {/* ───────── Mobile Dropdown (under md) ───────── */}
                            <div
                              className={`md:hidden transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
                                isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                              } w-full`}
                              aria-hidden={!isOpen}
                            >
                              <div className="flex flex-col items-center space-y-2 mt-4">
                                {proj.code.map(({ label, url, variant }) => (
                                  <a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-sm font-medium ${variantClasses[variant]} hover:underline`}
                                    tabIndex={isOpen ? 0 : -1}
                                  >
                                    {label}
                                  </a>
                                ))}
                              </div>
                            </div>

                            {/* ───────── Desktop Dropdown (md and up) ───────── */}
                            <div
                              className={`hidden md:flex items-center transition-[max-width,opacity,margin-left] duration-300 ease-in-out overflow-hidden ${
                                isOpen ? 'max-w-[400px] opacity-100 ml-3' : 'max-w-0 opacity-0 ml-0'
                              }`}
                              aria-hidden={!isOpen}
                            >
                              {proj.code.map(({ label, url, variant }) => (
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
                    </div>
                    {/* ═════════════════ End Dropdown & CTAs ═════════════════ */}
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
