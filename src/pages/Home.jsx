import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a0e1a] overflow-hidden">
      {/* Animated Background Blob */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#00ffe0] to-[#a78bfa] rounded-full filter blur-3xl opacity-30 animate-pulse-slow" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Text */}
        <div className="space-y-8 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#e0e6ed] leading-tight">
            Engineer First.  
            <br />
            Developer Second.
          </h1>
          <p className="text-lg md:text-xl text-[#94a3b8] max-w-md">
            I build digital systems that power businesses, simplify operations, and create real momentum.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 flex-wrap">
            <Link
              to="/work"
              className="bg-[#00ffe0] text-[#0a0e1a] text-lg font-semibold px-8 py-4 rounded-xl shadow hover:scale-105 hover:bg-[#00dfc0] transition-all duration-300"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#a78bfa] text-[#a78bfa] text-lg font-semibold px-8 py-4 rounded-xl hover:bg-[#a78bfa] hover:text-[#0a0e1a] transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Right - Placeholder or Graphic */}
        <div className="hidden md:flex justify-center items-center">
          {/* You could replace this with an SVG animation, Lottie file, or clean illustration later */}
          <div className="w-80 h-80 bg-[#0f172a] rounded-full flex items-center justify-center text-[#94a3b8] text-xl">
            {/* Placeholder: */}
            Animated Graphic Coming
          </div>
        </div>
      </div>
    </section>
  );
}
