import "./Trends.css";
import img1 from "../../assets/jd.jpg";
import img2 from "../../assets/jd2.jpg";
import img3 from "../../assets/jd3.jpg";
import img4 from "../../assets/jd4.jpg";
import img5 from "../../assets/jd5.webp";
import img6 from "../../assets/jd6.jpg";
import img7 from "../../assets/jd7.webp";

export default function Trends() {
  const shows = [img1, img2, img3, img4, img5, img6, img7, img2, img3, img4];

  return (
    <section className="trends">
      <h2 className="trends-heading">🔥 Top 10 Trending Today</h2>

      <div className="top10-container">
        {shows.map((img, index) => (
          <div className="top-card" key={index}>
            <span className="big-number">{index + 1}</span>

            <div className="poster-wrapper">
              <img src={img} alt={`show-${index}`} />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
