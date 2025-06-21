import { Typewriter } from "react-simple-typewriter";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import profilePic from "../assets/profile.jpg";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <img
              src={profilePic}
              alt="Profile"
              className="hero-profile-image"
            />

            <h1 className="hero-title">
              <span>Hi, I'm </span>
              <span className="text-gradient">
                <Typewriter
                  words={[
                    "Guru Narayan Dash",
                    "MERN Stack Developer",
                    "Coding Enthusiast",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_" //err
                  typeSpeed={100}
                  deleteSpeed={40}
                  delaySpeed={3000}
                />
              </span>
            </h1>
            <p className="hero-description">
              Enthusiastic fresher MERN stack developer skilled in building
              responsive, clean, and user-focused web applications.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <a
                href="/GURU_NARAYAN_DASH.pdf"
                className="btn-secondary"
                download="Guru_Narayan_Dash_Resume.pdf"
              >
                <FiDownload />
                Download CV
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/1Guru01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href="http://www.linkedin.com/in/guru049"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
              <a href="mailto:gurunarayandash049@gmail.com">
                <FiMail />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="tech-icon">M</div>
              <span>MongoDB</span>
            </div>
            <div className="floating-card card-2">
              <div className="tech-icon">E</div>
              <span>Express</span>
            </div>
            <div className="floating-card card-3">
              <div className="tech-icon">R</div>
              <span>React</span>
            </div>
            <div className="floating-card card-4">
              <div className="tech-icon">N</div>
              <span>Node.js</span>
            </div>
            <div className="center-orb"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
