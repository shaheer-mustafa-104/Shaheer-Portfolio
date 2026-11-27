import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";
import MyPicture from "../assets/shaheer.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="availability-dot"></span>
          Aspiring Cloud Computing Professional
        </div>

        <h1>
          Hi, I'm <br />
          Shaheer <span>Mustafa.</span>
        </h1>

        <h2>Building my journey into the cloud.</h2>

        <p className="hero-description">
          I'm a BS Information Technology Student Ungraduate exploring cloud computing,
          modern web technologies and scalable digital solutions.
          I enjoy learning, building and turning ideas into reality.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-button">
            Let's Connect <ArrowUpRight size={18} />
          </a>

          <a href="#about" className="secondary-button">
            Explore More
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/shaheer-mustafa-104" target="_blank" rel="noreferrer">
            <FaGithub size={18} />
          </a>

          <a href="https://www.linkedin.com/in/shaheer-mustafa-cc/" target="_blank" rel="noreferrer">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>

      <div className="hero-image-area">
        <div className="portrait-frame">
          <div className="portrait-placeholder">
            <img src={MyPicture}
              className="my-picture"
            />
          </div>

          <div className="portrait-label">
            <span>01 / PORTFOLIO</span>
            <span>SHAHEER MUSTAFA</span>
          </div>
        </div>

        <div className="floating-card">
          <span className="floating-icon">✳</span>
          <div>
            <strong>Learning & Growing</strong>
            <p>One step at a time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;