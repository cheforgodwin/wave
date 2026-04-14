import { Link } from 'react-router-dom';
import { 
  Monitor, 
  CreditCard, 
  Building2, 
  Smartphone, 
  Zap, 
  Lock, 
  Globe, 
  Target, 
  ArrowRight, 
  CheckCircle2,
  Waves,
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';
import '../styles/Home.css';

const services = [
  {
    icon: <Monitor size={32} />,
    title: 'Software Development',
    desc: 'End-to-end custom software engineered for scale, reliability, and real-world performance.'
  },
  {
    icon: <CreditCard size={32} />,
    title: 'Fintech Solutions',
    desc: 'Secure, compliant financial platforms that power payments, savings, and lending at scale.'
  },
  {
    icon: <Building2 size={32} />,
    title: 'System Architecture',
    desc: 'Robust system design and cloud-native infrastructure built for diverse African digital environments.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Web & Mobile Apps',
    desc: 'Beautiful, responsive applications crafted for both web and mobile — iOS and Android.'
  },
];

const whyWave = [
  { icon: <Zap size={28} className="text-wave-cyan" />, title: 'Scalable Systems', desc: 'Built to grow with your business across the continent.' },
  { icon: <Lock size={28} className="text-wave-cyan" />, title: 'Secure Architecture', desc: 'Enterprise-level security baked into every solution.' },
  { icon: <Globe size={28} className="text-wave-cyan" />, title: 'Built for Africa', desc: 'Tailored to local infrastructure, networks, and users in every region.' },
  { icon: <Target size={28} className="text-wave-cyan" />, title: 'User-Focused Design', desc: 'Intuitive experiences that drive adoption and retention.' },
];

const stats = [
  { value: '5+', label: 'Products Launched', icon: <Layers size={20} /> },
  { value: '3+', label: 'Industries Served', icon: <Activity size={20} /> },
  { value: '100%', label: 'African-Built', icon: <Globe size={20} /> },
  { value: '24/7', label: 'Support Target', icon: <TrendingUp size={20} /> },
];

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg-orb hero-orb-1" />
        <div className="hero-bg-orb hero-orb-2" />
        <div className="container hero-content">
          <div className="hero-text animate-slide-left">
            <span className="section-label">Africa's Technology Partner</span>
            <h1>Building Technology<br /><span>Solutions for Africa</span></h1>
            <p>
              Wave is a technology company building scalable digital solutions 
              across fintech, software development, and digital infrastructure — powering the next 
              generation of African innovation.
            </p>
            <div className="hero-actions">
              <Link to="/solutions" className="btn btn-accent">
                Explore Solutions <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn btn-outline-white">View Products</Link>
            </div>
          </div>
          <div className="hero-visual animate-slide-right">
            <div className="hero-card animate-float">
              <div className="hero-card-icon">
                <Waves size={64} strokeWidth={1.5} color="var(--color-wave-cyan)" />
              </div>
              <div className="hero-card-label">Wave Technology</div>
              <div className="hero-card-sub">Scalable · Secure · Pan-African</div>
            </div>
            <div className="hero-badge badge-1">
              <CreditCard size={14} /> NjangiPay Live
            </div>
            <div className="hero-badge badge-2">
              <Zap size={14} /> Scaling Africa
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="container">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div className="stat-item" key={i}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="section about-preview">
        <div className="container about-preview-grid">
          <div className="about-preview-text animate-slide-left">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">A company built on a<br /><span>mission for Africa</span></h2>
            <p>
              Wave is more than a tech company — we are builders, innovators, and problem-solvers 
              committed to transforming how Africa works, saves, and grows. Founded with a vision 
              to bridge the gap between cutting-edge technology and the everyday needs of African 
              individuals and businesses.
            </p>
            <p style={{ marginTop: '16px' }}>
              From fintech platforms to digital infrastructure, every product we build is designed 
              for real impact in real communities across the continent.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '32px' }}>
              Learn Our Story
            </Link>
          </div>
          <div className="about-preview-cards animate-slide-right">
            <div className="about-mini-card">
              <div className="mini-card-icon"><Target size={32} color="var(--color-deep-blue)" /></div>
              <h4>Our Mission</h4>
              <p>Innovate and deliver cutting-edge technology to solve real-world African challenges at scale.</p>
            </div>
            <div className="about-mini-card accent">
              <div className="mini-card-icon"><Globe size={32} color="var(--color-wave-cyan)" /></div>
              <h4>Our Vision</h4>
              <p>To be Africa's most trusted technology partner — powering the digital future of the continent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Build</span>
            <h2 className="section-title">Solutions Built for <span>Real Impact</span></h2>
            <p className="section-subtitle">
              We deliver end-to-end technology services across the full digital spectrum — 
              from concept to production-grade systems across Africa.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/solutions" className="btn btn-primary">See All Services</Link>
          </div>
        </div>
      </section>

      {/* ── Products / NjangiPay ── */}
      <section className="section njangipay-spotlight">
        <div className="hero-bg-orb hero-orb-1" style={{ top: 'auto', bottom: '-100px', right: '-100px', opacity: 0.4 }} />
        <div className="container njangipay-grid">
          <div className="njangipay-visual animate-slide-left">
            <div className="njangipay-mockup">
              <div className="mockup-header">
                <span className="mockup-dot red" />
                <span className="mockup-dot yellow" />
                <span className="mockup-dot green" />
                <span className="mockup-title">NjangiPay</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-card">
                  <div className="mockup-label">Group Balance</div>
                  <div className="mockup-amount">CFA 2,450,000</div>
                </div>
                <div className="mockup-row">
                  <div className="mockup-pill"><CreditCard size={14} /> Contribution</div>
                  <div className="mockup-pill active"><TrendingUp size={14} /> Withdraw</div>
                </div>
                <div className="mockup-list">
                  <div className="mockup-list-item"><span>John D.</span><span className="green">+50,000</span></div>
                  <div className="mockup-list-item"><span>Sarah M.</span><span className="green">+50,000</span></div>
                  <div className="mockup-list-item"><span>Eric T.</span><span className="red">Pending</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="njangipay-text animate-slide-right">
            <span className="section-label">Flagship Product</span>
            <h2 className="section-title">Introducing <span>NjangiPay</span></h2>
            <p>
              NjangiPay is Wave's premier platform for community savings and lending — digitizing 
              the traditional "Njangi" system (also known as Tontine, Susu, or Chama) widely used across Africa. 
              Groups can pool funds, rotate payouts, and access microloans transparently and securely.
            </p>
            <ul className="feature-list">
              <li><CheckCircle2 size={18} className="text-wave-cyan" /> Digital group creation & management</li>
              <li><CheckCircle2 size={18} className="text-wave-cyan" /> Automated payout rotation</li>
              <li><CheckCircle2 size={18} className="text-wave-cyan" /> Secure payment processing</li>
              <li><CheckCircle2 size={18} className="text-wave-cyan" /> Community lending & microloans</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: '32px' }}>
              <Link to="/njangipay" className="btn btn-accent">Learn More</Link>
              <Link to="/products" className="btn btn-outline">All Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Wave ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Wave</span>
            <h2 className="section-title">Built Different. <span>Built for Africa.</span></h2>
            <p className="section-subtitle">
              Every technical decision we make is designed for real African contexts — 
              from unreliable connectivity to mobile-first users across the continent.
            </p>
          </div>
          <div className="why-grid">
            {whyWave.map((w, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="container cta-content">
          <h2>Ready to build something great?</h2>
          <p>Partner with Wave and bring your digital product to life across Africa.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-accent">Start a Conversation</Link>
            <Link to="/solutions" className="btn btn-outline-white">Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
