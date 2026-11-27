import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <a href="#home" className="footer-logo">
          SM<span>.</span>
        </a>

        <p>
          Building my journey in technology,
          one step at a time.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/shaheer-mustafa-104"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/shaheer-mustafa-cc/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={19} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} Shaheer Mustafa. All rights reserved.</span>

        <a href="#home" className="back-to-top">
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
