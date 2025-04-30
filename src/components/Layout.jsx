import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="bg-[#0f172a] min-h-screen text-[#f1f5f9]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
    </div>
  );
}
