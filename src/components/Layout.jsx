import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div
      className="text-[#f1f5f9] bg-[#0a0e1a] overflow-x-hidden"
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
    >
      <Navbar />

      {/* Optional: fixed background color layer */}
      {/* <div className="fixed inset-0 -z-10 bg-[#0a0e1a]" /> */}

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-10">
        {children}
      </main>
    </div>
  );
}
