
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        SM<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
      </div>

      <div className="nav-actions">
        <a href="https://github.com/shaheer-mustafa-104" target="_blank" rel="noreferrer">
          <FaGithub size={18} />
        </a>

        <a href="https://www.linkedin.com/in/shaheer-mustafa-cc/" target="_blank" rel="noreferrer">
          <FaLinkedin size={18} />
        </a>

        <a href="#contact" className="contact-button">
          Contact Me <span>↗</span>
        </a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </nav>
  );
}

export default Navbar;
