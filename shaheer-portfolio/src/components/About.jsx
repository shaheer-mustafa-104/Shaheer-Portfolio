
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        <span className="section-label">01 — ABOUT ME</span>
        <h2>A little about <span>my journey.</span></h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Shaheer Mustafa, a Software Engineering graduate
            with a growing interest in Cloud Computing.
          </p>

          <p>
            I'm passionate about technology, learning new skills,
            and understanding how modern applications are built
            and deployed. My goal is to develop the knowledge and
            practical experience needed to become a Cloud
            Computing Professional.
          </p>
        </div>

        <div className="about-details">
          <div>
            <span>Education</span>
            <h3>B.E. Software Engineering</h3>
          </div>

          <div>
            <span>Professional Interest</span>
            <h3>Cloud Computing</h3>
          </div>

          <div>
            <span>Current Focus</span>
            <h3>Learning & Building</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
