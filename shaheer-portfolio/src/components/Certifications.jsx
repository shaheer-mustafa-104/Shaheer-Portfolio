
import { Award, ExternalLink } from "lucide-react";
import "./Certifications.css";

const certifications = [
  {
    title: "Cloud Computing Fundamentals",
    issuer: "Add your certificate provider",
    year: "2026",
    description:
      "Foundational knowledge of cloud computing concepts and services.",
    link: "",
  },
  {
    title: "Python Programming",
    issuer: "Add your certificate provider",
    year: "2026",
    description:
      "Programming fundamentals, Python syntax and problem solving.",
    link: "",
  },
];

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-heading">
        <span className="section-label">04 — ACHIEVEMENTS</span>
        <h2>Learning & <span>Certifications.</span></h2>
        <p>
          Courses and certifications that represent my
          continuous learning journey.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((certificate) => (
          <div className="certificate-card" key={certificate.title}>
            <div className="certificate-top">
              <div className="certificate-icon">
                <Award size={25} />
              </div>

              <span className="certificate-year">
                {certificate.year}
              </span>
            </div>

            <h3>{certificate.title}</h3>
            <span className="certificate-issuer">
              {certificate.issuer}
            </span>

            <p>{certificate.description}</p>

            {certificate.link && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                View Certificate <ExternalLink size={15} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
