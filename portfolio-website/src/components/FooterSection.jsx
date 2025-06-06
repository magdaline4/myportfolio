import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../assests/styles/FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-box">
        <span className="footer-label">HAVE PROJECT IN MIND?</span>
        <h2 className="footer-heading">
          Let’s Turn your Ideas<br />into Reality
        </h2>
        <a href="mailto:idamagdaline330@gmail.com" className="footer-email">
          ↳ idamagdaline330@gmail.com
        </a>

        <div className="footer-contact">
          <p>📞 +91 8610803583</p>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/idaselvammagdaline/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/magdaline4" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
