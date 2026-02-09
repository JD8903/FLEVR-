import React from "react";
import "./reasons.css";
import { Tv, Download, MonitorSmartphone, Smile } from "lucide-react";

const Reasons = () => {
  return (
    <div className="reasons-section">
      <h2 className="reasons-title">More reasons to join</h2>

      <div className="reasons-container">
        <div className="reason-card">
          <Tv className="reason-icon" />
          <h3>Enjoy on your TV</h3>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            Blu-ray players and more.
          </p>
        </div>

        <div className="reason-card">
          <Download className="reason-icon" />
          <h3>Download your shows to watch offline</h3>
          <p>
            Save your favourites easily and always have something to watch.
          </p>
        </div>

        <div className="reason-card">
          <MonitorSmartphone className="reason-icon" />
          <h3>Watch everywhere</h3>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet,
            laptop and TV.
          </p>
        </div>

        <div className="reason-card">
          <Smile className="reason-icon" />
          <h3>Create profiles for kids</h3>
          <p>
            Send kids on adventures with their favourite characters in a
            space made just for them — free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
