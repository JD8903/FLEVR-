import React, { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";
import "./Slider.css";

const Slider = () => {
  const carouselRef = useRef(null);
  const carouselInstance = useRef(null);

  useEffect(() => {
    // Initialize Bootstrap Carousel manually
    carouselInstance.current = new Carousel(carouselRef.current, {
      interval: 5000,   // 5 seconds autoplay
      wrap: true,
      touch: true,
    });

    // Cleanup on unmount
    return () => {
      carouselInstance.current?.dispose();
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="carousel slide slider"
      onMouseEnter={() => carouselInstance.current?.pause()}
      onMouseLeave={() => carouselInstance.current?.cycle()}
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="https://i.pinimg.com/1200x/ae/be/de/aebedea565116005359ffa4b29344622.jpg"
            className="d-block w-100"
            alt="Slide One"
          />
          <div className="carousel-caption">
            <h2>JUMANJI- THE NEXT LEVEL</h2>
            <button>PLAY</button>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/1200x/d8/9f/1b/d89f1b5bee0eccd8dc197562b2b53840.jpg"
            className="d-block w-100"
            alt="Slide Two"
          />
          <div className="carousel-caption">
            <h2>AVATAR</h2>
            <button>PLAY</button>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/1200x/fd/a9/cc/fda9cc96a0957f38323a50490f55129e.jpg"
            className="d-block w-100"
            alt="Slide Three"
          />
          <div className="carousel-caption">
            <h2>SQUID GAME</h2>
            <button>PLAY</button>
          </div>
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        onClick={() => carouselInstance.current?.prev()}
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        onClick={() => carouselInstance.current?.next()}
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Slider;
