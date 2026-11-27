import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        SM<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#certifications">Certifications</a>
      </div>

      <div className="nav-actions">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
        <FaGithub size={18} />
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
         <FaLinkedin size={18} />
        </a>

        <a href="#contact" className="contact-button">
          Contact Me <span>↗</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;