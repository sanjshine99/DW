import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./HomeComponent.css";
import { gsap } from 'gsap'; 
import landingVideo from "../../../assets/landingVideo.mp4";
import landingImage from "../../../assets/landingImage.jpg";

function VideoLanding() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
    setIsMobile(newWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    gsap.utils.toArray('.revealUp').forEach((elem) => {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: 'back',
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'bottom 20%',
            markers: false, // Set this to true for debug markers
          },
        }
      );
    });
  }, []);

  return (
    <div className="landing_Page_video_container">
      {isMobile ? (
        <img className="mobile-image" src={landingImage} alt="Mobile_Image" />
      ) : (
        <div className="video-overlay">
  <video
    className="landing_page_video"
    src={landingVideo}
    autoPlay
    loop
    muted
  ></video>
  <div className="text-overlay ">
    <h1  className="revealUp">DELUXE CARAVANS</h1>
  </div>
  <div className="link-overlay revealUp">
    <Link to="/blog" className="btn hover-border-1">
      What's new with us!
    </Link>
  </div>
</div>

      )}
    </div>
  );
}

export default VideoLanding;
