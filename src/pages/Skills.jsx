import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 85, icon: <FaReact /> },
        { name: "JavaScript", level: 90, icon: <SiJavascript /> },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80, icon: <FaNodeJs /> },
        { name: "Express.js", level: 85, icon: <SiExpress /> },
        { name: "MongoDB", level: 75, icon: <SiMongodb /> },
        { name: "REST APIs", level: 85, icon: "🔗" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 80, icon: <FaGitAlt /> },
        { name: "Postman", level: 85, icon: "📬" },
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "npm/Yarn", level: 80, icon: "📦" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ "--progress": `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-showcase">
          <h3>Technologies I Work With</h3>
          <div className="tech-icons">
            <div className="tech-icon-item">
              <SiMongodb />
              <span>MongoDB</span>
            </div>
            <div className="tech-icon-item">
              <SiExpress />
              <span>Express</span>
            </div>
            <div className="tech-icon-item">
              <FaReact />
              <span>React</span>
            </div>
            <div className="tech-icon-item">
              <FaNodeJs />
              <span>Node.js</span>
            </div>
            <div className="tech-icon-item">
              <SiJavascript />
              <span>JavaScript</span>
            </div>
            <div className="tech-icon-item">
              <FaGitAlt />
              <span>Git</span>
            </div>
            <div className="tech-icon-item">
              <SiTailwindcss />
              <span>Tailwind</span>
            </div>
            <div className="tech-icon-item">
              <FaDatabase />
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
