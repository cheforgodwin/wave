import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  PenLine, 
  Calendar, 
  Tag, 
  ChevronRight, 
  Plus, 
  X,
  Type,
  ImageIcon,
  Layout
} from 'lucide-react';
import '../styles/Blog.css';

const initialPosts = [
  {
    id: 1,
    title: 'How Technology is Transforming Group Savings in Africa',
    excerpt: 'Traditional "Njangis" have been the backbone of African community finance for generations. Now, digital platforms are making them safer and more efficient.',
    date: 'April 2, 2026',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1591696208162-a977af8e8e60?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'The Future of Scalable Infrastructure for African Startups',
    excerpt: 'Building tech for the African continent requires a unique approach to infrastructure. Here is how Wave is building systems that scale with the continent.',
    date: 'March 25, 2026',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Designing User Experiences for Low-Bandwidth Environments',
    excerpt: 'Accessibility is core to our mission. Learn about our approach to mobile-first design that works anywhere, even on slow connections.',
    date: 'March 18, 2026',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Blog() {
  const [posts, setPosts] = useState(initialPosts);
  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    category: 'Technology',
    image: '',
  });

  const handleCreatePost = (e) => {
    e.preventDefault();
    const post = {
      ...newPost,
      id: posts.length + 1,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      image: newPost.image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800'
    };
    setPosts([post, ...posts]);
    setShowModal(false);
    setNewPost({ title: '', excerpt: '', category: 'Technology', image: '' });
  };

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="section-label">Insights</span>
          <h1>Wave Blog &<br />Perspectives</h1>
          <p>Updates, technical insights, and stories about building technology that moves Africa forward.</p>
          <button className="btn btn-accent" style={{marginTop: '24px'}} onClick={() => setShowModal(true)}>
            <Plus size={18} /> New Insight
          </button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card card" key={post.id}>
                <div className="blog-image-wrap">
                  <img src={post.image} alt={post.title} className="blog-image" />
                  <span className="blog-category">
                    <Tag size={12} style={{marginRight: 4}} /> {post.category}
                  </span>
                </div>
                <div className="blog-content">
                  <div className="blog-date">
                    <Calendar size={14} style={{marginRight: 6}} /> {post.date}
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="blog-link">
                    Read Article <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Create Post Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content card animate-fade-up">
            <div className="modal-header">
              <h3><PenLine size={20} /> Create New Insight</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}><X size={24} /></button>
            </div>
            <form onSubmit={handleCreatePost} className="modal-form">
              <div className="form-group">
                <label><Type size={16} /> Title</label>
                <input 
                  type="text" 
                  value={newPost.title} 
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})} 
                  placeholder="The future of..." 
                  required 
                />
              </div>
              <div className="form-group">
                <label><Layout size={16} /> Category</label>
                <select 
                  value={newPost.category} 
                  onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                >
                  <option>Technology</option>
                  <option>Fintech</option>
                  <option>Design</option>
                  <option>Infrastructure</option>
                </select>
              </div>
              <div className="form-group">
                <label><ImageIcon size={16} /> Image URL (Optional)</label>
                <input 
                  type="url" 
                  value={newPost.image} 
                  onChange={(e) => setNewPost({...newPost, image: e.target.value})} 
                  placeholder="https://..." 
                />
              </div>
              <div className="form-group">
                <label><PenLine size={16} /> Excerpt</label>
                <textarea 
                  value={newPost.excerpt} 
                  onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})} 
                  placeholder="A short summary of your article..." 
                  rows="3" 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary form-btn">Post Insight</button>
            </form>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="container cta-content">
          <h2>Stay updated on our journey</h2>
          <p>Subscribe to our newsletter for the latest tech insights and product updates.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-accent">Subscribe Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
