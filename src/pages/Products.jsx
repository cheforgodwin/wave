import { Link } from 'react-router-dom';
import { 
  CircleDollarSign, 
  Bus, 
  Wrench,
  ArrowRight
} from 'lucide-react';
import '../styles/Products.css';

const products = [
  {
    id: 'njangipay',
    name: 'NjangiPay',
    icon: <CircleDollarSign size={64} color="var(--color-wave-cyan)" />,
    tag: 'Flagship · Live',
    tagStyle: 'live',
    description: 'A digital platform that modernizes the traditional African "Njangi" community savings system. Enables groups to pool funds, rotate payouts, manage contributions, and access microloans — all in one secure platform.',
    features: ['Group savings management', 'Automated payout rotation', 'Community lending & microloans', 'KYC & identity verification', 'Transaction history & reports', 'Admin & member roles'],
    link: '/njangipay',
    linkLabel: 'Learn More',
  },
  {
    id: 'ravai',
    name: 'Ravai',
    icon: <Bus size={64} color="var(--color-wave-cyan)" />,
    tag: 'In Development',
    tagStyle: 'dev',
    description: 'A smart travel booking platform designed for African bus networks and inter-city transportation. Ravai simplifies seat reservation, ticketing, and travel management for passengers and operators alike.',
    features: ['Real-time bus availability', 'Instant booking & confirmation', 'Multiple payment options', 'Operator dashboard', 'Customer support integration', 'Mobile-first design'],
    link: '/contact',
    linkLabel: 'Get Notified',
  },
  {
    id: 'wave-suite',
    name: 'Wave Suite',
    icon: <Wrench size={64} color="var(--color-wave-cyan)" />,
    tag: 'Enterprise',
    tagStyle: 'enterprise',
    description: 'A comprehensive suite of business software tools for African SMEs and enterprises — covering workflow automation, analytics, team management, and API integrations for scalable digital operations.',
    features: ['Customizable workflows', 'Advanced analytics dashboard', 'Cloud-based infrastructure', 'API integration hub', 'Team collaboration tools', 'Role-based access control'],
    link: '/contact',
    linkLabel: 'Request Demo',
  },
];

export default function Products() {
  return (
    <div className="products-page">

      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">What We've Built</span>
          <h1>Products That Power<br />Digital Africa</h1>
          <p>From community fintech to enterprise tools — every product Wave builds is designed to solve real problems at scale across the African continent.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Products</span>
            <h2 className="section-title">Explore the <span>Wave Portfolio</span></h2>
            <p className="section-subtitle">Each product is built with care, engineered for scale, and optimized for African markets and users.</p>
          </div>

          <div className="products-list">
            {products.map((p, i) => (
              <div className={`product-item card ${i % 2 === 1 ? 'reverse' : ''}`} key={p.id}>
                <div className="product-visual">
                  <div className="product-icon-wrap">
                    {p.icon}
                  </div>
                  <span className={`product-tag tag-${p.tagStyle}`}>{p.tag}</span>
                </div>
                <div className="product-info">
                  <h2>{p.name}</h2>
                  <p className="product-desc">{p.description}</p>
                  <div className="product-features-grid">
                    {p.features.map((f, j) => (
                      <div className="product-feature" key={j}>
                        <span className="product-check">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link to={p.link} className="btn btn-primary" style={{ marginTop: '28px' }}>
                    {p.linkLabel} →
                  </Link>
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
          <h2>Have a product idea?</h2>
          <p>We incubate, co-build, and launch products with partners across Africa. Let's talk.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-accent">Start a Conversation</Link>
            <Link to="/solutions" className="btn btn-outline-white">Our Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
