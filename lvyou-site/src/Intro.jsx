import React from 'react';
import '../src/css/Intro.css';

const FrozenThemeIntro = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-shape-container">
          <svg viewBox="0 0 100 100" className="intro-shape">
            <circle cx="50" cy="50" r="40" className="snowflake" />
          </svg>
        </div>
        <div className="intro-text">
          <h1 className="intro-title">
            Hello,
            <br />
            I'm Ivy,
            <br />
            an autodidact.
          </h1>
          <p className="intro-description">
            And I love traveling, photography, design and programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrozenThemeIntro;