import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen text-[#f1f5f9]">
      <Navbar />

      {/* fixed dark bg under the 3rem‐tall navbar
      <div className="fixed inset-x-0 top-12 bottom-0 -z-10 bg-[#0a0e1a]" /> */}

<main className="relative z-10 max-w-6xl mx-auto px-4 py-10">
  {children}
</main>

    </div>
  );
}
