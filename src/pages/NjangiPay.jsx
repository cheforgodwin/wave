import { Link } from 'react-router-dom';
import { 
  Users, 
  RotateCw, 
  Banknote, 
  Handshake, 
  BarChart3, 
  ShieldCheck, 
  Smartphone, 
  Settings,
  ArrowRight,
  Bell,
  CreditCard,
  TrendingUp,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import '../styles/NjangiPay.css';

const steps = [
  { num: '01', title: 'Create Your Group', desc: 'Set up your Njangi group in minutes — add members, define contribution amounts, and set your cycle schedule.' },
  { num: '02', title: 'Members Contribute', desc: 'Each member contributes their agreed amount digitally on schedule. Automated reminders ensure no one misses a cycle.' },
  { num: '03', title: 'Payouts Rotate', desc: 'The full pooled amount is paid out to the next member in the rotation, managed automatically and transparently.' },
  { num: '04', title: 'Access Loans', desc: 'Members can request microloans from the group pool, reviewed and approved by the group leader securely.' },
];

const features = [
  { icon: <Users size={32} color="var(--color-wave-cyan)" />, title: 'Group Management', desc: 'Create and manage multiple savings groups with custom roles, rules, and permissions.' },
  { icon: <RotateCw size={32} color="var(--color-wave-cyan)" />, title: 'Automated Rotation', desc: 'Payout cycles are automated and transparent — every member knows when their turn is.' },
  { icon: <Banknote size={32} color="var(--color-wave-cyan)" />, title: 'Instant Payments', desc: 'Fast and secure digital payments between members with full transaction records.' },
  { icon: <Handshake size={32} color="var(--color-wave-cyan)" />, title: 'Community Lending', desc: 'Groups can offer microloans to members with custom interest and repayment terms.' },
  { icon: <BarChart3 size={32} color="var(--color-wave-cyan)" />, title: 'Financial Reports', desc: 'Real-time dashboards and export-ready reports for group leaders and members.' },
  { icon: <ShieldCheck size={32} color="var(--color-wave-cyan)" />, title: 'KYC & Security', desc: 'Identity verification and role-based access ensure trust and accountability.' },
  { icon: <Smartphone size={32} color="var(--color-wave-cyan)" />, title: 'Mobile-First', desc: 'Fully responsive and optimized for smartphones across all African networks.' },
  { icon: <Settings size={32} color="var(--color-wave-cyan)" />, title: 'Admin Controls', desc: 'Super admin oversight, fine management, and complete audit trails for every action.' },
];

const problems = [
  { before: 'Manual cash collection', after: 'Digital contributions with instant confirmation' },
  { before: 'No record of who paid', after: 'Full transaction history for all members' },
  { before: 'Trust issues in groups', after: 'Transparent, automated rotation & audit trail' },
  { before: 'No access to credit', after: 'Microloans from group pool with simple approval' },
];

export default function NjangiPay() {
  return (
    <div className="njangipay-page">

      {/* Hero */}
      <section className="nj-hero">
        <div className="nj-hero-orb orb-1" />
        <div className="nj-hero-orb orb-2" />
        <div className="container nj-hero-content">
          <div className="nj-hero-text animate-slide-left">
            <span className="section-label nj-label">Flagship Product</span>
            <h1>NjangiPay</h1>
            <p className="nj-tagline">Community Savings & Lending, Modernized for Africa</p>
            <p className="nj-desc">
              NjangiPay digitizes the age-old African "Njangi" tradition — allowing communities 
              to pool money, rotate payouts, and lend to each other in a fully transparent, 
              secure, and mobile-friendly platform.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-accent">Join NjangiPay</Link>
              <a href="#how-it-works" className="btn btn-outline-white">How It Works</a>
            </div>
          </div>
          <div className="nj-hero-phone animate-slide-right">
            <div className="phone-frame animate-float">
              <div className="phone-screen">
                <div className="phone-topbar">
                  <span className="phone-logo">NjangiPay</span>
                  <Bell size={18} color="var(--color-deep-blue)" />
                </div>
                <div className="phone-balance-card">
                  <div className="phone-bal-label">Group Pool Balance</div>
                  <div className="phone-bal-amount">XAF 4,800,000</div>
                  <div className="phone-bal-sub">8 active members · Cycle 3/12</div>
                </div>
                <div className="phone-section-title">Recent Activity</div>
                <div className="phone-txn">
                  <span className="txn-avatar">JD</span>
                  <div className="txn-info">
                    <span className="txn-name">John Doe</span>
                    <span className="txn-date">Apr 5, 2026</span>
                  </div>
                  <span className="txn-amount green">+50,000</span>
                </div>
                <div className="phone-txn">
                  <span className="txn-avatar">SM</span>
                  <div className="txn-info">
                    <span className="txn-name">Sarah M.</span>
                    <span className="txn-date">Apr 5, 2026</span>
                  </div>
                  <span className="txn-amount green">+50,000</span>
                </div>
                <div className="phone-txn">
                  <span className="txn-avatar">ET</span>
                  <div className="txn-info">
                    <span className="txn-name">Eric T.</span>
                    <span className="txn-date">Pending</span>
                  </div>
                  <span className="txn-amount red">Due</span>
                </div>
                <div className="phone-btn-row">
                  <div className="phone-action-btn"><CreditCard size={12} style={{marginBottom: -2}} /> Contribute</div>
                  <div className="phone-action-btn primary"><Handshake size={12} style={{marginBottom: -2}} /> Request Loan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Problem We Solve</span>
            <h2 className="section-title">Traditional Njangi is <span>Broken. We Fixed It.</span></h2>
            <p className="section-subtitle">The Njangi system is powerful but fragile. Cash-based, trust-driven, and unrecorded — leaving communities vulnerable to disputes and loss.</p>
          </div>
          <div className="problems-grid">
            {problems.map((p, i) => (
              <div className="problem-card" key={i}>
                <div className="problem-before">
                  <XCircle size={18} color="#dc2626" />
                  <span>{p.before}</span>
                </div>
                <div className="problem-arrow"><ArrowRight size={20} /></div>
                <div className="problem-after">
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span>{p.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-alt" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Simple, Clear, <span>Automated</span></h2>
            <p className="section-subtitle">Four simple steps to transform how your community saves and grows together.</p>
          </div>
          <div className="nj-steps">
            {steps.map((s, i) => (
              <div className="nj-step" key={i}>
                <div className="nj-step-num">{s.num}</div>
                <div className="nj-step-body card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                {i < steps.length - 1 && <div className="nj-step-arrow">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Features</span>
            <h2 className="section-title">Everything Your Group <span>Needs</span></h2>
            <p className="section-subtitle">Built to handle the full lifecycle of a community savings group — from creation to payout and beyond.</p>
          </div>
          <div className="nj-features-grid">
            {features.map((f, i) => (
              <div className="nj-feature card" key={i}>
                <div className="nj-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
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
          <h2>Ready to start your Njangi group?</h2>
          <p>Join hundreds of communities already saving smarter with NjangiPay.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-accent">Get Started Today</Link>
            <Link to="/products" className="btn btn-outline-white">All Products</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
