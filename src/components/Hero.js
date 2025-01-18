import React from "react";
import "../styles/Hero.css";
import HeroImg from "./assets/hero.jpeg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <p className="hero-title">What will you create today?</p>

        <div className="hero-input-wrapper desktop-only">
          <div className="hero-input-container">
            <input
              type="text"
              className="hero-input"
              placeholder="Describe what you want to see..."
              maxLength="150"
            />
            <button className="hero-random-button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add the SVG content here */}
              </svg>
              <span>Random</span>
            </button>
          </div>
        </div>
        <div className="hero-buttons mobile-only">
          <a href="https://starryai.onelink.me/zN5c/pv0c0gf6">
            <img
              src="https://r2.starryai.com/public/uploads/2024-09-11/1eea9b7d-a551-452a-bd9c-32ae28289991.png"
              alt="App store"
            />
          </a>
          <a href="https://starryai.onelink.me/zN5c/pv0c0gf6">
            <img
              src="https://r2.starryai.com/public/uploads/2024-09-11/36b8985c-12f3-4be7-9412-b204680a76b6.png"
              alt="Google Playstore"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
