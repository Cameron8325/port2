import React, { useEffect, Suspense } from "react";
import { Link } from "react-router-dom";

// Lazy-load heavy animation
const SpaceMap = React.lazy(() => import("../components/SpaceMap"));

export default function Home() {
  useEffect(() => {
    const traitQueue = [
      "Problem-Solver",
      "Collaborative",
      "Systems Thinker",
      "Initiative-Taker",
      "Pragmatic Engineer",
      "Continuously Learning",
    ];
    let index = 0;
    const interval = setInterval(() => {
      document.querySelectorAll(".tooltip").forEach((el) =>
        el.classList.remove("tooltip-show")
      );
      const label = traitQueue[index];
      const text = Array.from(document.querySelectorAll("svg text")).find(
        (el) => el.textContent === label
      );
      const tooltip = text?.parentElement?.querySelector(".tooltip");
      if (tooltip) tooltip.classList.add("tooltip-show");
      index = (index + 1) % traitQueue.length;
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 z-20 p-2 bg-[#00ffe0] text-[#0a0e1a] rounded"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="relative z-10 min-h-[calc(100vh-3rem)] px-4 sm:px-6 lg:px-8 pt-6 pb-16 overflow-visible"
      >
        <div
          className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#00ffe0] opacity-20 blur-3xl rounded-full sm:h-[400px]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-[#e0e6ed]">
          <section className="space-y-6 sm:space-y-8 text-center md:text-left px-4 sm:px-0 max-w-xl mx-auto md:mx-0">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
            >
              Engineer First.<br /> Developer Second.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#94a3b8]">
              I build digital systems that power businesses, simplify operations,
              and create real momentum.
            </p>

            {/* Mobile-only logo (served from public/ and eagerly loaded) */}
            <div className="md:hidden flex justify-center mt-4">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img
                  src="/logo.webp"
                  alt="MCS.dev logo"
                  className="w-50 h-auto opacity-90"
                  width={200}
                  height={200}
                />
              </picture>
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 mt-4">
              <Link
                to="/work"
                className="btn-primary text-base sm:text-lg font-semibold shadow hover:scale-105 hover:bg-[#00dfc0] transition-all duration-300"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="btn-secondary text-base sm:text-lg font-semibold hover:bg-[#a78bfa] hover:text-[#0a0e1a] transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </section>

          {/* Desktop-only Orbit Map, lazy-loaded */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] flex items-center justify-center">
              <Suspense fallback={null}>
                <SpaceMap className="absolute inset-0 w-full h-full" />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
