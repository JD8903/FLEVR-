import React, { useRef } from "react";
import "./Number.css";

import img1 from "../../assets/jd.jpg";
import img2 from "../../assets/jd2.jpg";
import img3 from "../../assets/jd3.jpg";
import img4 from "../../assets/jd4.jpg";
import img5 from "../../assets/jd5.webp";

const movies = [
  {
    img: img1,
    title: "Romantic Drama",
    meta: "2024 • Love Story",
    desc: "Love, betrayal, and second chances collide."
  },
  {
    img: img2,
    title: "Action Thriller",
    meta: "2023 • A • 2h 05m",
    desc: "A deadly mission forces a former agent back into danger."
  },
  {
    img: img3,
    title: "Epic Warrior",
    meta: "2024 • U/A • 2h 30m",
    desc: "A fearless warrior rises against injustice in a fiery revolution."
  },
  {
    img: img4,
    title: "Assassin Story",
    meta: "Action • 2h",
    desc: "One man. One mission. No mercy."
  },
  {
    img: img5,
    title: "Emotional Love",
    meta: "2024 • Drama",
    desc: "A love story tested by time and fate."
  }
];

const Number = () => {
  const rowRef = useRef(null);

  const slide = (dir) => {
    const container = rowRef.current;
    const cardWidth = 220;
    const visibleCards = Math.floor(container.offsetWidth / cardWidth);
    const scrollAmount = visibleCards * cardWidth;

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="poster-section">
      <div className="top-bar">
        <h2>Popular Movies</h2>
        <button className="view-btn">View All</button>
      </div>

      <div className="slider-container">
        <button className="arrow left" onClick={() => slide("left")}>❮</button>

        <div className="poster-row" ref={rowRef}>
          {movies.map((movie, i) => (
            <div className="poster-card" key={i}>
              <img src={movie.img} alt={movie.title} />

              <div className="hover-info">
                <h3>{movie.title}</h3>
                <p className="meta">{movie.meta}</p>
                <p className="desc">{movie.desc}</p>

                <div className="buttons">
                  <button className="watch">▶ Watch</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => slide("right")}>❯</button>
      </div>
    </div>
  );
};

export default Number;
