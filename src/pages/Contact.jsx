import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const [cardRef, isVisible] = useScrollReveal();

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#contact-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 z-20 p-2 bg-[#00ffe0] text-[#0a0e1a] rounded"
      >
        Skip to contact content
      </a>

      <main
        id="contact-content"
        role="main"
        aria-labelledby="contact-heading"
        className="relative z-10 min-h-[calc(100vh-3rem)] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-visible"
      >
        {/* Top-right decorative glow blob */}
        <div
          className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#00ffe0] opacity-20 blur-3xl rounded-full sm:w-[400px] sm:h-[400px]"
          aria-hidden="true"
        />

        <article
          ref={cardRef}
          className={`relative z-10 max-w-md sm:max-w-xl mx-auto bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-2xl shadow-inner p-6 sm:p-10 space-y-6 text-center transition-opacity duration-700 ${
            isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`}
          aria-labelledby="contact-heading"
        >
          <header>
            <h2 id="contact-heading" className="text-4xl sm:text-5xl font-extrabold">
              📬 Contact
            </h2>
          </header>

          <p className="text-base sm:text-lg text-[#94a3b8]">
            Want to collaborate, hire, or ask a question? I'm open to freelance,
            full-time, and creative technical work.
          </p>

          <p className="text-lg sm:text-xl font-medium">
            <a
              href="mailto:cameron8325@gmail.com"
              className="text-[#00ffe0] hover:underline"
            >
              webdev.mcs@gmail.com
            </a>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-sm sm:text-base text-[#a78bfa] font-semibold">
            <a
              href="https://github.com/Cameron8325"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/cameron8325"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <a
              href="/Cameron_Smith_Resume.pdf"
              className="inline-block border-2 border-[#14b8a6] text-[#14b8a6] text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#14b8a6] hover:text-[#0a0e1a] transition"
            >
              Download Resume
            </a>
          </div>
        </article>
      </main>
    </>
  );
}