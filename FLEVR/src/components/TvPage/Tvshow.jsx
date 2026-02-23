import "./Tvshow.css";
import { useRef, useState } from "react";
import img1 from "../../assets/jd.jpg";
import img2 from "../../assets/jd2.jpg";
import img3 from "../../assets/jd3.jpg";
import img4 from "../../assets/jd4.jpg";

export default function Tvshow() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const shows = [
    {
      img: img1,
      title: "Splitsvilla X6",
      year: "2026 • U/A 16+ • Hindi",
      desc: "32 singles, 2 villas, 1 dilemma! Love or money?",
    },
    {
      img: img2,
      title: "Naagin",
      year: "2025 • Drama",
      desc: "Supernatural revenge saga full of twists.",
    },
    {
      img: img3,
      title: "MasterChef",
      year: "2024 • Cooking",
      desc: "India’s biggest cooking battle.",
    },
    {
      img: img4,
      title: "The 50",
      year: "2026 • Game Show",
      desc: "High stakes survival challenge.",
    },
  ];

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="tvshow">
      <h2 className="tvshow-heading">🔥 Popular Shows</h2>

      <div className="tvshow-wrapper">
        <button className="arrow left" onClick={() => scroll("left")}>❮</button>

        <div className="tvshow-container" ref={scrollRef}>
          {shows.map((show, i) => (
            <div
              key={i}
              className={`tv-card ${activeIndex === i ? "hero-active" : ""}`}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <img src={show.img} alt={show.title} />

              {activeIndex === i && (
                <div className="hero-info">
                  <h2>{show.title}</h2>
                  <p className="meta">{show.year}</p>
                  <p className="desc">{show.desc}</p>
                  <button className="watch-btn">▶ Watch Now</button>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>❯</button>
      </div>
    </section>
  );
}
