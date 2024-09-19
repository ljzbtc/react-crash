import '../src/css/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="content">
        <img src="/profile.jpg" alt="Lü You" className="profile-image" />
        <h1>吕由 <span className="pinyin">Lü You</span></h1>
        <h2>English Language Educator</h2>
        <p className="intro-text">
          Dedicated to helping you master English through personalized, 
          culture-rich lessons. Let's embark on this linguistic journey together.
        </p>
        <div className="features">
          <span className="feature-tag">TEFL Certified</span>
          <span className="feature-tag">IELTS Specialist</span>
          <span className="feature-tag">Cultural Immersion</span>
        </div>
        <button className="cta-button">Schedule a Free Consultation</button>
      </div>
    </div>
  );
}

export default HomePage;