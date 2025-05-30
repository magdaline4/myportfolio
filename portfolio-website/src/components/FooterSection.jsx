import { FaInstagram, FaGithub } from 'react-icons/fa';
import '../assests/styles/FooterSection.css'

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-box">
        <span className="footer-label">HAVE PROJECT IN MIND?</span>
        <h2 className="footer-heading">
          Let’s Turn your Ideas<br />into Reality
        </h2>
        <a href="mailto:hello@yourdomain.com" className="footer-email">
          ↳ hello@yourdomain.com
        </a>

        <div className="footer-contact">
          <p>📞 +91 98765 43210</p>
          <div className="footer-icons">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;