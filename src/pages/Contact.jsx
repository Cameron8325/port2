import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const [cardRef, isVisible] = useScrollReveal();

  return (
    <>
      {/* fixed dark bg under navbar (3rem height) */}
      <div className="fixed inset-x-0 top-12 bottom-0 -z-10 bg-[#0a0e1a]" />

      <section className="relative z-10 min-h-[calc(100vh-3rem)] px-6 py-20 overflow-visible">
        {/* Top-right glow blob */}
        <div
          className="
            absolute top-[-100px] right-[-150px]
            w-[400px] h-[400px]
            bg-[#00ffe0] opacity-20 blur-3xl rounded-full
            animate-pulse-slow
          "
        />

        {/* Scroll-revealed Contact Card */}
        <div
          ref={cardRef}
          className={`relative z-10 max-w-xl mx-auto bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-2xl shadow-inner p-10 space-y-8 text-center transition-opacity duration-700 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="text-5xl font-extrabold">📬 Contact</h2>

          <p className="text-lg text-[#94a3b8]">
            Want to collaborate, hire, or ask a question? I'm open to freelance,
            full-time, and creative technical work.
          </p>

          <p className="text-xl font-medium">
            <a
              href="mailto:cameron8325@gmail.com"
              className="text-[#00ffe0] hover:underline"
            >
              cameron8325@gmail.com
            </a>
          </p>

          <div className="flex justify-center gap-6 text-sm text-[#a78bfa] font-semibold">
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
              className="inline-block border-2 border-[#14b8a6] text-[#14b8a6] text-lg font-semibold px-8 py-4 rounded-xl hover:bg-[#14b8a6] hover:text-[#0a0e1a] transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
