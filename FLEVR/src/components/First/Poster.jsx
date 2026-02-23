import "./Poster.css";

import img1 from "../../assets/jd.jpg";
import img2 from "../../assets/jd2.jpg";
import img3 from "../../assets/jd3.jpg";
import img4 from "../../assets/jd4.jpg";
import img5 from "../../assets/jd5.webp";
import img6 from "../../assets/jd6.jpg";
import img7 from "../../assets/jd7.webp";
import img8 from "../../assets/jd8.jpg";
import img9 from "../../assets/jd9.jpg";
import img10 from "../../assets/jd10.jpg";

const posters = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];

export default function TrendingSection() {
  return (
    <div className="section">
      <h2 className="heading">TRENDING NOW</h2>

      <div className="slider">
        <div className="slide-track">
          {posters.concat(posters).map((img, i) => (
            <img src={img} key={i} className="poster" />
          ))}
        </div>
      </div>
    </div>
  );
}
