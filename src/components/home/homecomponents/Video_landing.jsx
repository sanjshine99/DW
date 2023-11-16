import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./HomeComponent.css";
import { gsap } from "gsap";
import landingVideo from "../../../assets/landingVideo.mp4";

function VideoLanding() {
  const revealUpAnimation = useMemo(() => {
    return () => {
      gsap.utils.toArray(".revealUp").forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            scrollTrigger: {
              trigger: elem,
              start: "top 80%",
              end: "bottom 20%",
              markers: false, // Set this to true for debug markers
            },
          }
        );
      });
    };
  }, []);

  useEffect(() => {
    revealUpAnimation();
  }, [revealUpAnimation]);

  return (
    <div className="landing_Page_video_container">
      <div className="video-overlay">
        <video
          className="landing_page_video"
          src={landingVideo}
          autoPlay
          loop
          muted
        ></video>
        <div className="text-overlay">
          <h1 className="revealUp">DELUXE CARAVANS</h1>
          <div className="link-overlay revealUp">
            <Link to="/blog" className="btn hover-border-1">
              Latest Insights
            </Link>
            <Link to="/appointment" className="btn hover-border-1">
              Schedule a visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoLanding;
