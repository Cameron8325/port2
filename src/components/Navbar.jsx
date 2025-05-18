import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const linkStyle = `block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#1e293b] hover:text-[#14b8a6]`;

  const navLinks = (
    <>
      <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `${linkStyle} ${isActive ? 'text-[#14b8a6]' : ''}`}>
        Home
      </NavLink>
      <NavLink to="/work" onClick={closeMenu} className={({ isActive }) => `${linkStyle} ${isActive ? 'text-[#14b8a6]' : ''}`}>
        Work
      </NavLink>
      <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `${linkStyle} ${isActive ? 'text-[#14b8a6]' : ''}`}>
        About
      </NavLink>
      <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `${linkStyle} ${isActive ? 'text-[#14b8a6]' : ''}`}>
        Contact
      </NavLink>
    </>
  );

  return (
    <header className="bg-[#0f172a] text-[#f1f5f9] sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Cameron Smith
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#f1f5f9] focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
{menuOpen && (
  <div className="md:hidden px-4 pb-4 pt-2 bg-[#0f172a] text-sm flex flex-col items-center space-y-4">
    {['/', '/work', '/about', '/contact'].map((path, idx) => {
      const labels = ['Home', 'Work', 'About', 'Contact'];
      return (
        <NavLink
          key={path}
          to={path}
          onClick={closeMenu}
          className={({ isActive }) =>
            `relative block text-center text-base font-medium transition-colors duration-200 ${
              isActive ? 'text-[#14b8a6]' : 'text-[#f1f5f9] hover:text-[#14b8a6]'
            }`
          }
        >
          {labels[idx]}
          <span
            className={`block h-[2px] mt-1 transition-all duration-300 ${
              path === window.location.pathname
                ? 'w-10 bg-[#14b8a6] opacity-100 mx-auto'
                : 'w-0 bg-transparent opacity-0 group-hover:w-10 group-hover:bg-[#14b8a6] group-hover:opacity-80 mx-auto'
            }`}
          />
        </NavLink>
      );
    })}
  </div>
)}

    </header>
  );
}
