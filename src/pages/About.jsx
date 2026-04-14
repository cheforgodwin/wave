import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Handshake, 
  Globe, 
  Puzzle, 
  Star, 
  Target, 
  Eye, 
  Settings,
  Rocket,
  ShieldCheck,
  Award
} from 'lucide-react';
import '../styles/About.css';

const values = [
  { icon: <Lightbulb size={32} color="var(--color-wave-cyan)" />, title: 'Innovation', desc: 'We constantly push boundaries, exploring new technologies and reimagining what is possible for African digital markets.' },
  { icon: <Handshake size={32} color="var(--color-wave-cyan)" />, title: 'Integrity', desc: 'Transparency and honesty guide every decision we make — with our clients, users, and each other.' },
  { icon: <Globe size={32} color="var(--color-wave-cyan)" />, title: 'Impact', desc: 'We measure success by the positive change we create. Every product must solve a real problem for real people.' },
  { icon: <Puzzle size={32} color="var(--color-wave-cyan)" />, title: 'Inclusivity', desc: 'We build products that work for everyone — regardless of location, income, or technical background.' },
  { icon: <Star size={32} color="var(--color-wave-cyan)" />, title: 'Excellence', desc: 'We hold ourselves to the highest standard in engineering, design, and customer service.' },
];

const milestones = [
  { year: '2022', title: 'Wave Founded', desc: 'Wave was established with a mission to build scalable tech solutions for Africa.', icon: <Rocket size={20} /> },
  { year: '2023', title: 'NjangiPay Launched', desc: 'Our flagship product went live, digitalizing community savings across Cameroon and planning for regional expansion.', icon: <Award size={20} /> },
  { year: '2024', title: 'Platform Expansion', desc: 'Expanded fintech infrastructure with lending, KYC, and AI-powered features for broader African markets.', icon: <ShieldCheck size={20} /> },
  { year: '2025+', title: 'Africa-Wide Scale', desc: 'Growing presence across multiple African markets and industries.', icon: <Globe size={20} /> },
];

export default function About() {
  return (
    <div className="about-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">Our Story</span>
          <h1>We Build Africa's<br />Digital Future</h1>
          <p>A technology company rooted in Africa, building scalable and trustworthy digital solutions that empower people and businesses to thrive across the continent.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container about-story-grid">
          <div className="animate-slide-left">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">More than a tech company —<br /><span>a force for change</span></h2>
            <p>
              Wave is a technology company based in Africa building scalable digital solutions 
              across multiple industries, including fintech, software development, and digital 
              infrastructure. We believe that technology should be a tool for empowerment — 
              accessible, reliable, and built for real-world African conditions.
            </p>
            <p style={{ marginTop: '16px' }}>
              Our team brings together engineers, designers, and product thinkers united by 
              a single purpose: to create software that makes a lasting difference. We are 
              building for cities like Douala, Nairobi, Accra, Lagos, and 
              every other growing hub of digital transformation across Africa.
            </p>
          </div>
          <div className="about-story-visual animate-slide-right">
            <div className="story-stat-card">
              <div className="story-stat">
                <span className="story-stat-value">5+</span>
                <span className="story-stat-label">Products Built</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-value">3+</span>
                <span className="story-stat-label">Industries Served</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-value"><Globe size={28} /></span>
                <span className="story-stat-label">Africa First</span>
              </div>
            </div>
            <div className="about-quote">
              <p>"Building technology that works for Africa, not just in Africa."</p>
              <span>— Wave Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Purpose</span>
            <h2 className="section-title">Mission & <span>Vision</span></h2>
          </div>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon"><Target size={40} color="var(--color-wave-cyan)" /></div>
              <h3>Our Mission</h3>
              <p>
                To innovate and deliver cutting-edge technology that solves real-world problems 
                facing individuals, communities, and businesses across Africa — with products that 
                are scalable, secure, and deeply user-focused.
              </p>
            </div>
            <div className="mv-card accent">
              <div className="mv-icon"><Eye size={40} color="white" /></div>
              <h3>Our Vision</h3>
              <p>
                To be Africa's most trusted technology partner — powering digital transformation 
                across the continent through innovative products that connect people, drive economic 
                growth, and create lasting impact at scale.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon"><Settings size={40} color="var(--color-wave-cyan)" /></div>
              <h3>Our Approach</h3>
              <p>
                We combine global engineering standards with deep African local knowledge. Every product 
                we build is tested for real African conditions — from low-bandwidth environments 
                to diverse device ecosystems — ensuring true accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Values</span>
            <h2 className="section-title">The Principles That <span>Guide Us</span></h2>
            <p className="section-subtitle">These values are not aspirational — they are operational. They shape how we build, hire, and serve.</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card card" key={i}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">From Idea to <span>Impact</span></h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-connector">
                  <div className="timeline-dot">{m.icon}</div>
                  {i < milestones.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content card">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="container cta-content">
          <h2>Want to work with us?</h2>
          <p>We're always open to continental partnerships, collaborations, and great conversations.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-accent">Get in Touch</Link>
            <Link to="/solutions" className="btn btn-outline-white">Our Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
