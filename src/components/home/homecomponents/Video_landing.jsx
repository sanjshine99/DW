import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./HomeComponent.css";
import { gsap } from "gsap";

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
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
          <iframe
            src="https://player.vimeo.com/video/885177288?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&title=0&byline=0&portrait=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100vw",
              height: "auto",
              minHeight: "100%",
            }}
            title="landingVideo"
          ></iframe>
        </div>
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
