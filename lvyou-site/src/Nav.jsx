import  { useState } from 'react';
import { Home, User, Settings, Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">YourLogo</div>
        <div className="navbar-menu">
          <NavItem href="/" icon={<Home size={18} />} text="Home" />
          <NavItem href="/profile" icon={<User size={18} />} text="Profile" />
          <NavItem href="/settings" icon={<Settings size={18} />} text="Settings" />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="navbar-mobile-menu">
          <NavItem href="/" icon={<Home size={18} />} text="Home" mobile />
          <NavItem href="/profile" icon={<User size={18} />} text="Profile" mobile />
          <NavItem href="/settings" icon={<Settings size={18} />} text="Settings" mobile />
        </div>
      )}
      <style jsx>{`
        .navbar {
          background-color: white;
          border-bottom: 1px solid #e2e8f0;
          padding: 1rem 1.5rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .navbar-logo {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a202c;
        }
        .navbar-menu {
          display: none;
        }
        .navbar-toggle {
          background: none;
          border: none;
          color: #4a5568;
          cursor: pointer;
        }
        .navbar-mobile-menu {
          margin-top: 1rem;
        }
        @media (min-width: 768px) {
          .navbar-menu {
            display: flex;
            gap: 2rem;
          }
          .navbar-toggle {
            display: none;
          }
          .navbar-mobile-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

const NavItem = ({ href, icon, text, mobile }) => (
  <a href={href} className={`nav-item ${mobile ? 'mobile' : ''}`}>
    {icon}
    <span>{text}</span>
    <style jsx>{`
      .nav-item {
        display: flex;
        align-items: center;
        color: #4a5568;
        text-decoration: none;
        transition: color 0.2s ease;
      }
      .nav-item:hover {
        color: #1a202c;
      }
      .nav-item span {
        margin-left: 0.25rem;
        font-size: 0.875rem;
        font-weight: 500;
      }
      .mobile {
        padding: 0.5rem 0;
      }
    `}</style>
  </a>
);

export default Nav;