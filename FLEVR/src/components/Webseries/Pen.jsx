import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Pen.css";

import jd from "../../assets/jd.jpg";
import jd2 from "../../assets/jd2.jpg";
import jd3 from "../../assets/jd3.jpg";
import jd4 from "../../assets/jd4.jpg";
import jd5 from "../../assets/jd5.webp";
import jd6 from "../../assets/jd6.jpg";

export default function Pen() {
  const movies = [
    { img: jd, title: "The Great Shamsuddin Family", year: "2025", age: "U/A 13+", time: "1h 37m", lang: "Hindi", desc: "Family emergencies, long-standing feuds, a hysterical crisis hit one morning.", genres: "Comedy • Family • Dramedy" },
    { img: jd2, title: "Midnight Mission", year: "2024", age: "U/A 16+", time: "2h 10m", lang: "English", desc: "An undercover agent trapped inside enemy territory with no backup.", genres: "Action • Thriller" },
    { img: jd3, title: "Love & Lies", year: "2023", age: "U/A 13+", time: "1h 55m", lang: "Hindi", desc: "A relationship tested by secrets that refuse to stay buried.", genres: "Romance • Drama" },
    { img: jd4, title: "Cyber Hunt", year: "2025", age: "A", time: "2h 05m", lang: "English", desc: "A hacker vs the world’s most powerful AI defense system.", genres: "Sci-Fi • Action" },
    { img: jd5, title: "Haunted Nights", year: "2024", age: "A", time: "1h 48m", lang: "Hindi", desc: "A family moves into a house where shadows have memories.", genres: "Horror • Mystery" },
    { img: jd6, title: "The Last Ride", year: "2023", age: "U/A 13+", time: "2h 01m", lang: "English", desc: "A retired racer returns for one final impossible race.", genres: "Sports • Drama" }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const movie = movies[index];

  return (
    <>
      {/* 🔥 NAVBAR HERO NI BAHAR */}
      <Navbar />

      <section className="hero">
        <div
          className="heroBg"
          style={{ backgroundImage: `url(${movie.img})` }}
        />

        <div className="heroOverlay">
          <div className="heroContent">
            <h1 className="logoTitle">{movie.title}</h1>

            <div className="meta">
              <span>{movie.year}</span>
              <span>{movie.age}</span>
              <span>{movie.time}</span>
              <span>{movie.lang}</span>
            </div>

            <p className="desc">{movie.desc}</p>
            <div className="genres">{movie.genres}</div>

            <button className="watchBtn">▶ Watch Now</button>
          </div>

          <div className="thumbBar">
            {movies.map((m, i) => (
              <img
                key={i}
                src={m.img}
                className={i === index ? "activeThumb" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
