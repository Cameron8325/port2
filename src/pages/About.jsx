export default function About() {
    return (
      <section className="space-y-20 max-w-4xl mx-auto">
        {/* Intro */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">👋 About Me</h2>
          <p>
            I’m <strong>Cameron Smith</strong> — a full-stack web developer with a background in QA, IT support, and operations.
            I specialize in building software systems that solve real-world problems — apps that are clean, scalable, and used by real people every day.
          </p>
          <p>
            I thrive when engineering backend logic and clean UIs that make workflows easier — whether it’s for clients scheduling services,
            or managers streamlining their business processes.
          </p>
          <p className="text-[#94a3b8] italic">
            My goal? To join a team that values thoughtful engineering and meaningful contribution over flash or hype.
          </p>
        </div>
  
        {/* Values Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">💡 Core Values</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#1e293b] p-5 rounded-xl shadow">
              <h4 className="font-semibold text-lg">Systems Thinking</h4>
              <p className="text-[#94a3b8] text-sm">
                I break problems into parts and build solutions from the bottom up. I don't just build — I design workflows.
              </p>
            </div>
            <div className="bg-[#1e293b] p-5 rounded-xl shadow">
              <h4 className="font-semibold text-lg">Reliability</h4>
              <p className="text-[#94a3b8] text-sm">
                I design features that don’t break under pressure — code that can evolve without crumbling.
              </p>
            </div>
            <div className="bg-[#1e293b] p-5 rounded-xl shadow">
              <h4 className="font-semibold text-lg">Transparency</h4>
              <p className="text-[#94a3b8] text-sm">
                I'm upfront about my strengths, my learning edges, and how I communicate while solving problems.
              </p>
            </div>
            <div className="bg-[#1e293b] p-5 rounded-xl shadow">
              <h4 className="font-semibold text-lg">People-First Dev</h4>
              <p className="text-[#94a3b8] text-sm">
                I focus on building tools that support people — not just impress devs. UX, performance, and purpose matter.
              </p>
            </div>
          </div>
        </div>
  
        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">🛠 Technical Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-[#f1f5f9]">
            <div className="bg-[#0f172a] p-2 rounded text-center">JavaScript</div>
            <div className="bg-[#0f172a] p-2 rounded text-center">Python</div>
            <div className="bg-[#0f172a] p-2 rounded text-center">React</div>
            <div className="bg-[#0f172a] p-2 rounded text-center">Django</div>
            <div className="bg-[#0f172a] p-2 rounded text-center">PostgreSQL</div>
            <div className="bg-[#0f172a] p-2 rounded text-center">Stripe</div>
            <div className="bg-[#0f172a] p-2 rounded text-center">AWS (S3, EC2)</div>
            <div className="bg-[#0f172a] p-2 rounded text-center">REST APIs</div>
            <div className="bg-[#0f172a] p-2 rounded text-center">Git & GitHub</div>
          </div>
        </div>
  
        {/* Resume */}
        <div className="text-center">
          <a
            href="/Cameron_Smith_Resume.pdf"
            className="inline-block border border-[#14b8a6] px-6 py-3 rounded-xl text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white transition"
          >
            Download Full Resume
          </a>
        </div>
  
        {/* Optional Future Footer CTA */}
        {/* <div className="text-center text-sm text-[#94a3b8] mt-12">
          Want to talk shop? I’d love to collaborate on smart tools and real-world systems.
          <br />
          <span className="block mt-2">
            (Contact form coming soon...)
          </span>
        </div> */}
      </section>
    );
  }
  