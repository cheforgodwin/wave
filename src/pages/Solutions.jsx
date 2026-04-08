import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Smartphone, 
  CreditCard, 
  Link as LinkIcon, 
  Building2, 
  Lock 
} from 'lucide-react';
import '../styles/Solutions.css';

const services = [
  {
    icon: <Monitor size={32} />,
    title: 'Custom Software Development',
    desc: 'We design and build bespoke software systems tailored to your exact business requirements — from MVPs to enterprise-grade platforms built for scale.',
    features: ['Full-cycle product development', 'Agile delivery sprints', 'Code quality & documentation', 'Post-launch support'],
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Web & Mobile App Development',
    desc: 'From responsive web applications to native iOS and Android apps, we deliver high-performance digital experiences that users love.',
    features: ['React & Next.js frontends', 'React Native / Flutter mobile', 'Progressive Web Apps (PWA)', 'App Store deployment'],
  },
  {
    icon: <CreditCard size={32} />,
    title: 'Fintech System Development',
    desc: 'Secure, compliant financial technology built for Africa — payments, wallets, lending platforms, savings products, and more.',
    features: ['Payment gateway integration', 'Digital wallet systems', 'Lending & savings platforms', 'KYC / AML compliance'],
  },
  {
    icon: <LinkIcon size={32} />,
    title: 'API & Backend Systems',
    desc: 'Robust, high-performance backend services and APIs that power your applications with reliability, speed, and scale.',
    features: ['RESTful & GraphQL APIs', 'Microservices architecture', 'Database design & optimization', 'Real-time data systems'],
  },
  {
    icon: <Building2 size={32} />,
    title: 'System Design & Architecture',
    desc: 'Strategic infrastructure planning and cloud architecture that ensures your platform is built to scale, survive, and succeed from day one.',
    features: ['Cloud architecture (AWS/GCP)', 'Scalability & load planning', 'Security-first design', 'DevOps & CI/CD pipelines'],
  },
  {
    icon: <Lock size={32} />,
    title: 'Security & Compliance',
    desc: 'End-to-end security hardening, regulatory compliance review, and vulnerability assessments to protect your platform and users.',
    features: ['Security audits & pen testing', 'Data encryption strategies', 'Regulatory compliance', 'Incident response planning'],
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We start by understanding your goals, users, and technical requirements through in-depth discovery workshops.' },
  { step: '02', title: 'Design', desc: 'We create system architecture blueprints and UI/UX prototypes before a single line of code is written.' },
  { step: '03', title: 'Build', desc: 'Our engineers build iteratively in short sprints, delivering working software for review at every stage.' },
  { step: '04', title: 'Launch', desc: 'We deploy to production with robust monitoring, ensuring a smooth go-live and reliable ongoing performance.' },
];

export default function Solutions() {
  return (
    <div className="solutions-page">

      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">What We Do</span>
          <h1>Technology Solutions<br />Built for Scale</h1>
          <p>From concept to production-ready systems — we deliver full-spectrum software services with precision, quality, and an African-first mindset.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Everything You Need to <span>Build & Grow</span></h2>
            <p className="section-subtitle">A complete suite of technology services to bring your digital product from idea to impact.</p>
          </div>
          <div className="solutions-grid">
            {services.map((s, i) => (
              <div className="solution-card card" key={i}>
                <div className="solution-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="solution-features">
                  {s.features.map((f, j) => (
                    <li key={j}><span className="sol-check">✓</span>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our <span>Delivery Process</span></h2>
            <p className="section-subtitle">A clear, collaborative process that keeps you informed and in control at every step.</p>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <div className="process-card" key={i}>
                <div className="process-step">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {i < process.length - 1 && <div className="process-arrow">→</div>}
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
          <h2>Let's build your next product</h2>
          <p>Tell us what you're building and we'll figure out the best way to bring it to life.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-accent">Start a Project</Link>
            <Link to="/products" className="btn btn-outline-white">See Our Work</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
