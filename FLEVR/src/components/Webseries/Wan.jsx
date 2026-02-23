import React from "react";
import "./Wan.css";

import show1 from "../../assets/jd.jpg";
import show2 from "../../assets/jd2.jpg";
import show3 from "../../assets/jd3.jpg";
import show4 from "../../assets/jd4.jpg";
import show5 from "../../assets/jd6.jpg";
import show6 from "../../assets/jd8.jpg";

const shows = [
  { id: 1, img: show1, tag: "NEW RELEASE" },
  { id: 2, img: show2, tag: "NEW SEASON" },
  { id: 3, img: show3, tag: "TRENDING" },
  { id: 4, img: show4, tag: "" },
  { id: 5, img: show5, tag: "SPICE IT UP" },
  { id: 6, img: show6, tag: "NEW EP SAT-SUN" },
];

const Watch = () => {
  return (
    <div className="watch-section">
      <h2 className="watch-title">Shows You Watched</h2>

      <div className="watch-row">
        {shows.map((show) => (
          <div className="watch-card" key={show.id}>
            <img src={show.img} alt="show" />

            {show.tag && <span className="tag">{show.tag}</span>}

            <div className="overlay">
              <button>▶ Watch Again</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;
