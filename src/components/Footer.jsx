import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <p>Wanna build something great ? Let’s Connect</p>
        </div>

        <div className="footer-links">
          <a
            href="mailto:gurunarayandash049@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope /> <span>Email</span>
          </a>
          <a href="tel:+91 7655031130">
            <FaPhone /> <span>Call</span>
          </a>
          <a
            href="https://github.com/1Guru01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
          <a
            href="http://www.linkedin.com/in/guru049"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
        </div>

        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
          <span>Back to Top</span>
        </button>

        <p className="footer-bottom">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
