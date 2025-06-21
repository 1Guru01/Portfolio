import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Blog Hub",
      description:
        "React BlogHub – A Modern Blog Frontend BlogHub is a fully responsive, interactive blog frontend built using React, Framer Motion, and React Router. Designed with a sleek UI and smooth animations, it offers a seamless reading and navigation experience.",
      image:
        "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT",
        "AXIOS",
        "EMAILJS",
        "REACT-ROUTER",
        "REACT-TYPEWRITER",
      ],
      github: "https://github.com/1Guru01/BlogHub/tree/master",
      live: "https://1guru01.github.io/BlogHub/",
      featured: true,
    },
    {
      id: 2,
      title: "Quiz Master App",
      description:
        "A web-based quiz app featuring timed multiple-choice questions, score tracking, and smooth user interaction.",
      image:
        "https://cdn.pixabay.com/photo/2020/09/23/07/53/quiz-5595288_1280.jpg",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/1Guru01/Quiz-master",
      live: "https://1guru01.github.io/Quiz-master/",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current weather conditions and forecasts with beautiful visualizations.",
      image:
        "https://cdn.pixabay.com/photo/2025/03/31/15/31/mountains-9504977_1280.jpg",
      technologies: ["HTML", "Weather API", "CSS3", "JAVASCRIPT"],
      github: "https://github.com/1Guru01/Weather-Forecast-App",
      live: "https://1guru01.github.io/Weather-Forecast-App/",
      featured: false,
    },
    {
      id: 4,
      title: "Image Gallery",
      description:
        "A responsive and interactive multi-page Image Gallery Website built using HTML, CSS, and JavaScript, featuring 10 unique types of galleries ranging from static to dynamic, interactive layouts.",
      image:
        "https://cdn.pixabay.com/photo/2017/11/08/18/09/gallery-2931180_1280.jpg",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/1Guru01/ImageGallery",
      live: "https://1guru01.github.io/ImageGallery/",
      featured: false,
    },
    {
      id: 5,
      title: "Clock App",
      description:
        "A social media analytics dashboard with data visualization and real-time statistics tracking.",
      image:
        "https://cdn.pixabay.com/photo/2023/03/06/15/45/coffee-7833769_1280.jpg",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/1Guru01/Clock-app",
      live: "https://1guru01.github.io/Clock-app/",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const ProjectCard = ({ project, featured = false }) => (
    <div className={`project-card card ${featured ? "featured-project" : ""}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action"
            >
              <FiGithub />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects">
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="projects-subtitle">
            These projects reflect my hands-on experience and capabilities with
            the MERN stack.
          </p>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>

        <div className="other-projects-section">
          <h3 className="other-projects-title">Other Projects</h3>
          <div className="other-projects">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FiGithub />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
