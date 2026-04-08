import { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Send,
  User,
  Type,
  HelpCircle,
  Briefcase,
  Users
} from 'lucide-react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">Connect</span>
          <h1>Get in Touch with<br />Wave Technology</h1>
          <p>Have a question or want to discuss a project? Our team is here to help you scale your digital vision.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info animate-slide-left">
            <span className="section-label">Information</span>
            <h2 className="section-title">Let's start a <span>Conversation</span></h2>
            <p>Reach out to us through any of these channels or use the contact form. We typically respond within 24 hours.</p>
            
            <div className="contact-methods">
              <div className="contact-method card">
                <span className="method-icon"><Mail size={24} color="var(--color-deep-blue)" /></span>
                <div>
                  <strong>Email</strong>
                  <p>hello@wavetech.africa</p>
                </div>
              </div>
              <a href="https://wa.me/237653638145" target="_blank" rel="noopener noreferrer" className="contact-method card whatsapp">
                <span className="method-icon"><MessageSquare size={24} color="#25D366" /></span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>Connect instantly on WhatsApp</p>
                </div>
              </a>
              <div className="contact-method card">
                <span className="method-icon"><MapPin size={24} color="var(--color-deep-blue)" /></span>
                <div>
                  <strong>Base</strong>
                  <p>Douala, Cameroon · Africa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container animate-slide-right">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label><User size={16} /> Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label><Mail size={16} /> Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label><HelpCircle size={16} /> Inquiry Type</label>
                <select name="subject" value={formData.subject} onChange={handleChange}>
                  <option>General Inquiry</option>
                  <option>Product Support</option>
                  <option>Project Request</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="form-group">
                <label><MessageSquare size={16} /> Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-btn" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  'Sending Message...'
                ) : (
                  <>Send Message <Send size={18} style={{marginLeft: 8}} /></>
                )}
              </button>
              {status === 'success' && <p className="form-msg success">Your message has been sent successfully!</p>}
              {status === 'error' && <p className="form-msg error">Something went wrong. Please try again or use WhatsApp.</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
