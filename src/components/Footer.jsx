import { Link } from 'react-router-dom';
import waveLogo from '../assets/image.png';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={waveLogo} alt="Wave Logo" className="footer-logo-img" />
            <span className="footer-logo-text">Wave</span>
          </Link>
          <p className="footer-tagline">Building Technology Solutions for Africa. Scalable, Secure, and Trustworthy.</p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" className="social-link" aria-label="Twitter">Twitter</a>
            <a href="#" className="social-link" aria-label="GitHub">GitHub</a>
          </div>
        </div>

        <div className="footer-nav-col">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Our Insights</Link>
          <Link to="/contact">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-nav-col">
          <h4>What We Build</h4>
          <Link to="/solutions">Services</Link>
          <Link to="/products">All Products</Link>
          <Link to="/njangipay">NjangiPay</Link>
          <Link to="/contact">Custom Systems</Link>
        </div>

        <div className="footer-nav-col">
          <h4>Support</h4>
          <Link to="/contact">Help Center</Link>
          <a href="https://wa.me/237653638145" target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
          <Link to="/about">Privacy Policy</Link>
          <Link to="/about">Terms of Service</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {currentYear} Wave Technology. Built for the African Digital Economy.</p>
        </div>
      </div>
    </footer>
  );
}
