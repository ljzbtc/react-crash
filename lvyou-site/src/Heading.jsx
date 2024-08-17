import { useState } from 'react';

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="heading">
      <div className="heading-container">
        <h1 className="heading-title">Your Website Title</h1>
        <nav className="heading-menu">
          <NavItem href="/" text="Home" />
          <NavItem href="/profile" text="Profile" />
          <NavItem href="/settings" text="Settings" />
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="heading-toggle"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen && (
        <nav className="heading-mobile-menu">
          <NavItem href="/" text="Home" mobile />
          <NavItem href="/profile" text="Profile" mobile />
          <NavItem href="/settings" text="Settings" mobile />
        </nav>
      )}
      <style jsx>{`
        .heading {
          background-color: white;
          border-bottom: 1px solid #e2e8f0;
          padding: 1rem 1.5rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        .heading-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .heading-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
        }
        .heading-menu {
          display: none;
        }
        .heading-toggle {
          background: none;
          border: none;
          color: #4a5568;
          cursor: pointer;
          font-size: 1.5rem;
        }
        .heading-mobile-menu {
          margin-top: 1rem;
        }
        @media (min-width: 768px) {
          .heading-menu {
            display: flex;
            gap: 2rem;
          }
          .heading-toggle {
            display: none;
          }
          .heading-mobile-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

const NavItem = ({ href, text, mobile }) => (
  <a href={href} className={`nav-item ${mobile ? 'mobile' : ''}`}>
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
        font-size: 0.875rem;
        font-weight: 500;
      }
      .mobile {
        padding: 0.5rem 0;
      }
    `}</style>
  </a>
);

export default Heading;