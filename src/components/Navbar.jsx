import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const baseLinkStyle = `relative block px-4 py-2 transition-colors duration-200 focus:outline-none`;
  const activeLinkStyle = `text-[#14b8a6]`;
  const inactiveLinkStyle = `text-[#f1f5f9] hover:text-[#14b8a6]`;
  const hoverUnderline = `after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#14b8a6] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:content-['']`;

  const navLinks = (
    <>
      <NavLink
        to="/"
        onClick={closeMenu}
        className={({ isActive }) =>
          `${baseLinkStyle} ${hoverUnderline} ${isActive ? activeLinkStyle : inactiveLinkStyle
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/work"
        onClick={closeMenu}
        className={({ isActive }) =>
          `${baseLinkStyle} ${hoverUnderline} ${isActive ? activeLinkStyle : inactiveLinkStyle
          }`
        }
      >
        Work
      </NavLink>
      <NavLink
        to="/about"
        onClick={closeMenu}
        className={({ isActive }) =>
          `${baseLinkStyle} ${hoverUnderline} ${isActive ? activeLinkStyle : inactiveLinkStyle
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        onClick={closeMenu}
        className={({ isActive }) =>
          `${baseLinkStyle} ${hoverUnderline} ${isActive ? activeLinkStyle : inactiveLinkStyle
          }`
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <header className="bg-[#0f172a] text-[#f1f5f9] sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Name */}
        <Link
          to="/"
          aria-label="Go to home page"
          className="text-2xl font-bold tracking-wide text-white hover:text-[#14b8a6] transition-colors duration-200 focus:outline-none visited:text-white active:text-white"
        >
          Cameron Smith
        </Link>


        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 items-center">{navLinks}</div>

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
                  `relative block text-center text-base font-medium transition-colors duration-200 focus:outline-none ${hoverUnderline} ${isActive ? activeLinkStyle : inactiveLinkStyle
                  }`
                }
              >
                {labels[idx]}
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
}
