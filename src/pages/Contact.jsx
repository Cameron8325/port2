export default function Contact() {
    return (
      <section className="max-w-3xl mx-auto space-y-16 text-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">📬 Get in Touch</h2>
          <p className="text-[#94a3b8] text-lg">
            I'm open to freelance projects, full-time roles, or just chatting about building better tools and systems.
          </p>
        </div>
  
        <div className="bg-[#1e293b] rounded-xl p-10 space-y-6 shadow-md">
          <p className="text-xl">📧 Email Me:</p>
          <a
            href="mailto:cameron8325@gmail.com"
            className="inline-block text-2xl text-[#14b8a6] hover:underline"
          >
            cameron8325@gmail.com
          </a>
        </div>
  
        {/* Future Real Form (Optional Later) */}
        {/* <div className="bg-[#1e293b] rounded-xl p-10 space-y-6 shadow-md">
          <form method="POST" action="your-form-handler-url">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#0f172a] text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[#0f172a] text-white"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-[#0f172a] text-white"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#6366f1] text-white px-6 py-3 rounded-lg hover:bg-[#4f46e5] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div> */}
      </section>
    );
  }
  