
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJs,
} from "react-icons/fa";

import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: <FaPython /> },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <span className="section-label">02 — MY EXPERTISE</span>
        <h2>Tools I work <span>with.</span></h2>
        <p>
          Technologies and programming languages I'm learning
          and using to build my technical foundation.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
