import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <span className="section-label">05 — GET IN TOUCH</span>

        <h2>
          Have a project in <span>mind?</span>
          <br />
          Let's talk.
        </h2>

        <p>
          I'm always interested in connecting with people,
          exploring opportunities, and learning about new projects.
          Feel free to reach out.
        </p>

        <a
          href="mailto:shaheermustafa450@gmail.com"
          className="contact-email-button"
        >
          <Mail size={18} />
          Send Me an Email
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="contact-socials">
        <a
          href="https://github.com/shaheer-mustafa-104"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={19} />
          GitHub
          <ArrowUpRight size={15} />
        </a>

        <a
          href="https://www.linkedin.com/in/shaheer-mustafa-cc/"
          target="_blank"
          rel="noreferrer"
        >
         <FaLinkedin size={19} />
          LinkedIn
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
