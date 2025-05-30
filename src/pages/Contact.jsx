import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const [cardRef, isVisible] = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://your-api-endpoint.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const err = await res.text();
        throw new Error(err);
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
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
        className="relative z-10 min-h-[calc(100vh-3rem)] px-4 sm:px-6 lg:px-8 py-8 sm:py-20 overflow-visible"
      >
        <div
          className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#00ffe0] opacity-20 blur-3xl rounded-full sm:w-[400px] sm:h-[400px]"
          aria-hidden="true"
        />

        <article
          ref={cardRef}
          className={`relative z-10 max-w-md sm:max-w-xl mx-auto bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-2xl shadow-inner p-6 sm:p-10 space-y-6 text-center transition-opacity duration-700 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
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

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-white" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffe0]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffe0]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 bg-[#0f172a] text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffe0]"
              />
            </div>

            <button
              type="submit"
              className="block w-full sm:w-auto px-6 py-3 bg-[#14b8a6] text-[#0a0e1a] font-semibold rounded-xl hover:bg-[#10a29a] transition mx-auto"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm font-medium text-[#94a3b8] mt-2 text-center">{status}</p>
            )}
          </form>

          <p className="text-lg sm:text-xl font-medium">
            <a
              href="mailto:webdev.mcs@gmail.com"
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

          </div>

          <div>
            <a
              href="/resume.pdf"
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
