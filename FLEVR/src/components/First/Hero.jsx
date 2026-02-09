import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      {/* TOP RIGHT */}
      <div className="top-bar">
        <span className="lang">ENGLISH</span>
        <button className="signin">SIGN IN</button>
      </div>

      {/* CENTER CONTENT */}
      <div className="hero-content">
        <h1>FLVER Streaming Platform</h1>
        <p>Start at 199. cancel any time</p>

        <div className="email-box">
          <input type="email" placeholder="Email address" />
          <button>
            Get Started <span>›</span>
          </button>
        </div>

        <a href="#" className="phone-link">
          instead use Phone Number
        </a>
      </div>
    </div>
  );
};

export default Hero;
