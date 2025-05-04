import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SpaceMap from "../components/SpaceMap";

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

      <div className="fixed inset-x-0 top-12 bottom-0 -z-10 bg-[#0a0e1a]" />

      <main
        id="main-content"
        className="relative z-10 flex items-start justify-center pt-8 md:pt-12 overflow-visible px-6"
      >
        {/* Home-only glowing blob */}
        <div
          className="absolute top-[-100px] right-[-150px]
                     w-[400px] h-[400px]
                     bg-[#00ffe0] opacity-20 blur-3xl rounded-full"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center text-[#e0e6ed]">
          <section className="space-y-8 text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Engineer First.
              <br /> Developer Second.
            </h1>
            <p className="text-lg md:text-xl text-[#94a3b8] max-w-md">
              I build digital systems that power businesses, simplify operations,
              and create real momentum.
            </p>
            <div className="flex gap-6 flex-wrap">
              <Link
                to="/work"
                className="bg-[#00ffe0] text-[#0a0e1a] text-lg font-semibold px-8 py-4 rounded-xl shadow
                           hover:scale-105 hover:bg-[#00dfc0] transition-all duration-300"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#a78bfa] text-[#a78bfa] text-lg font-semibold px-8 py-4 rounded-xl
                           hover:bg-[#a78bfa] hover:text-[#0a0e1a] transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </section>

          {/* Orbit Map (ring removed) */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-[520px] h-[520px] flex items-center justify-center">
              <SpaceMap className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
