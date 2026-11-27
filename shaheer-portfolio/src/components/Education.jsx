
import { GraduationCap, BriefcaseBusiness } from "lucide-react";
import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="experience">
      <div className="education-heading">
        <span className="section-label">03 — MY JOURNEY</span>
        <h2>Education & <span>Experience.</span></h2>
        <p>
          My academic background and the steps I'm taking
          to grow as a technology professional.
        </p>
      </div>

      <div className="timeline">

        {/* Education */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <GraduationCap size={22} />
          </div>

          <div className="timeline-content">
            <span className="timeline-type">EDUCATION</span>
            <h3>Bachelor of Science in Information Technology</h3>
            <h4>Sindh Univesity - Jamshoro</h4>
            <p>
              Developed a foundation in the feild of Information Technology,
              programming, databases, and modern computing concepts.
            </p>
            <span className="timeline-date">Ungraduated— Batch_2k24</span>
          </div>
        </div>

        {/* Experience */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <BriefcaseBusiness size={22} />
          </div>

          <div className="timeline-content">
            <span className="timeline-type">INTERNSHIP</span>
            <h3>Software Development Intern</h3>
            <h4>Technify Software House</h4>
            <p>
              Gained practical exposure to software development
              and worked on building technical skills through
              hands-on learning and project work.
            </p>
            <span className="timeline-date">Internship Experience</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
