import { useNavigate } from 'react-router-dom';
import teamImage from '../assets/team-working.svg';
import '../styles/Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>A Modern Tech Startup for Innovative Digital Solutions</h1>
          <p>Specialized in fintech, travel-tech, and community-driven software</p>
          <button className="hero-btn" onClick={() => navigate('/contact')}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img src={teamImage} alt="Team working with laptops" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
