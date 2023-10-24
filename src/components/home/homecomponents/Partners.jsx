import React, { useEffect, useRef } from "react";
import "./HomeComponent.css";
import partner1 from "../../../assets/partners/2022_bmpro-logo-hp.webp";
import partner2 from "../../../assets/partners/Enerdrive-logo.webp";
import partner3 from "../../../assets/partners/logo.webp";
import partner4 from "../../../assets/partners/dometic.webp";
import partner5 from "../../../assets/partners/cruisemaster.webp";
import partner6 from "../../../assets/partners/atrv-min.webp";
import partner7 from "../../../assets/partners/camec-min.webp";

function Partners() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slideTrack = sliderRef.current.querySelector(".slide-track");
      const slides = sliderRef.current.querySelectorAll(".slide");
      const slideWidth = slides[0].offsetWidth;

      let currentIndex = 0;

      const cloneFirstSlide = () => {
        const firstSlide = slides[0].cloneNode(true);
        slideTrack.appendChild(firstSlide);
      };

      const removeLastSlide = () => {
        const lastSlide = slideTrack.lastChild;
        slideTrack.removeChild(lastSlide);
      };

      const animateSlider = () => {
        currentIndex++;
        const translateX = -currentIndex * slideWidth;
        slideTrack.style.transition = "transform 1s linear";
        slideTrack.style.transform = `translateX(${translateX}px)`;

        if (currentIndex === slides.length - 1) {
          setTimeout(() => {
            slideTrack.style.transition = "none";
            slideTrack.style.transform = "translateX(0)";
            currentIndex = 0;
            removeLastSlide();
            cloneFirstSlide();
          }, 1000);
        }
      };

      cloneFirstSlide();
      const animationInterval = setInterval(animateSlider, 2000);

      return () => {
        clearInterval(animationInterval);
      };
    }
  }, []);

  return (
    <>
      <h2 className="partners-heading">Our Premium Partners</h2>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={partner1} width="500" height="200" alt="" />
          </div>
          <div className="slide">
            <img src={partner2} width="500" height="200" alt="" />
          </div>
          <div className="slide">
            <img src={partner3} width="500" height="200" alt="" />
          </div>
          <div className="slide">
            <img src={partner4} width="500" height="auto" alt="" />
          </div>
          <div className="slide">
            <img src={partner5} width="500" height="auto" alt="" />
          </div>
          <div className="slide">
            <img src={partner6} width="500" height="200" alt="" />
          </div>
          <div className="slide">
            <img src={partner7} width="500" height="200" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
