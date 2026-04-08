import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Package, CircleDollarSign, ChevronDown } from 'lucide-react';
import waveLogo from '../assets/image.png';
import '../styles/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="logo" onClick={closeAll}>
          <img src={waveLogo} alt="Wave Logo" className="logo-img" />
          <span className="logo-text">Wave</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end onClick={closeAll}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeAll}>About</NavLink>
            </li>
            <li>
              <NavLink to="/solutions" onClick={closeAll}>Solutions</NavLink>
            </li>

            {/* Products dropdown */}
            <li className="dropdown-parent" ref={dropdownRef}>
              <button
                className="dropdown-trigger"
                onClick={() => setProductsOpen(!productsOpen)}
                aria-expanded={productsOpen}
              >
                Products
                <ChevronDown className={`chevron ${productsOpen ? 'open' : ''}`} size={16} strokeWidth={2.5} />
              </button>
              <div className={`dropdown-menu ${productsOpen ? 'open' : ''}`}>
                <Link to="/products" className="dropdown-item" onClick={closeAll}>
                  <span className="dropdown-item-icon"><Package size={20} /></span>
                  <div>
                    <strong>All Products</strong>
                    <p>Explore everything Wave builds</p>
                  </div>
                </Link>
                <Link to="/njangipay" className="dropdown-item" onClick={closeAll}>
                  <span className="dropdown-item-icon"><CircleDollarSign size={20} /></span>
                  <div>
                    <strong>NjangiPay</strong>
                    <p>Community savings & lending</p>
                  </div>
                </Link>
              </div>
            </li>

            <li>
              <NavLink to="/blog" onClick={closeAll}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeAll}>Contact</NavLink>
            </li>
          </ul>

          <Link to="/contact" className="btn btn-primary nav-cta" onClick={closeAll}>
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
