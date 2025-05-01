import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-[#0f172a] text-[#f1f5f9] sticky top-0 z-50 shadow-none">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold tracking-wide">Cameron Smith</Link>
        <div className="space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#14b8a6]' : ''}>Home</NavLink>
          <NavLink to="/work" className={({ isActive }) => isActive ? 'text-[#14b8a6]' : ''}>Work</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#14b8a6]' : ''}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#14b8a6]' : ''}>
            Contact
          </NavLink>

        </div>
      </nav>
    </header>
  );
}
