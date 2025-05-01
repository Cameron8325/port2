import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* fixed dark bg under navbar (3rem height) */}
      <div className="fixed inset-x-0 top-12 bottom-0 -z-10 bg-[#0a0e1a]" />

      <section
        className="relative z-10 min-h-[calc(100vh-3rem)]
                   flex items-center justify-center
                   overflow-visible px-6"
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

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center text-[#e0e6ed]">
          <div className="space-y-8 text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Engineer First.
              <br />
              Developer Second.
            </h1>
            <p className="text-lg md:text-xl text-[#94a3b8] max-w-md">
              I build digital systems that power businesses, simplify operations,
              and create real momentum.
            </p>
            <div className="flex gap-6 flex-wrap">
              <Link
                to="/work"
                className="
                  bg-[#00ffe0] text-[#0a0e1a] text-lg font-semibold
                  px-8 py-4 rounded-xl shadow hover:scale-105
                  hover:bg-[#00dfc0] transition-all duration-300
                "
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="
                  border-2 border-[#a78bfa] text-[#a78bfa] text-lg
                  font-semibold px-8 py-4 rounded-xl hover:bg-[#a78bfa]
                  hover:text-[#0a0e1a] transition-all duration-300
                "
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="w-80 h-80 bg-[#0f172a] rounded-full flex items-center justify-center text-[#94a3b8] text-xl">
              Animated Graphic Coming
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
