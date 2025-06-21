import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="bg-decoration bg-decoration-2"></div>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="about-description">
              I'm a passionate MERN stack developer and recent graduate with a
              strong foundation in modern web technologies. My journey in web
              development started with curiosity and has evolved into a deep
              passion for creating innovative digital solutions.
            </p>
            <p className="about-description">
              I specialize in building full-stack applications using MongoDB,
              Express.js, React, and Node.js. My goal is to write clean,
              efficient code that delivers exceptional user experiences and
              solves real-world problems.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Hours of Coding</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies Mastered</div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-card card">
              <h3>My Expertise</h3>
              <div className="services-list">
                <div className="service-item">
                  <div className="service-icon">🎨</div>
                  <div>
                    <h4>Frontend Development</h4>
                    <p>
                      Creating responsive, interactive user interfaces with
                      React
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">⚙️</div>
                  <div>
                    <h4>Backend Development</h4>
                    <p>Building robust APIs and server-side applications</p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">💾</div>
                  <div>
                    <h4>Database Design</h4>
                    <p>Designing efficient database schemas and queries</p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">🚀</div>
                  <div>
                    <h4>Full Stack Solutions</h4>
                    <p>End-to-end development from concept to deployment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
