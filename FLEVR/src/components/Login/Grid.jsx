import { useEffect, useState } from "react";
import "./Grid.css";

import img1 from "../../assets/movie.jpg";
import img2 from "../../assets/movies.jpg";
import img3 from "../../assets/moviess.jpg";
import img4 from "../../assets/moviesss.jpg";

const images = [img1, img2, img3, img4];

const Grid = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="right-grid"
      style={{ backgroundImage: `url(${images[index]})` }}
    />
  );
};

export default Grid;
