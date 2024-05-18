import React, { useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HomeComponent.css";

gsap.registerPlugin(ScrollTrigger);

function Promovid() {
  return (
    <div className="container">
      <h1 style={{ opacity: 1, transform: "translateY(0)" }}>
        CROSS COUNTRY? WE HEAR YOU!
      </h1>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/945631996?h=7774de72a1&badge=0&autopause=0&player_id=0&app_id=58479"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
        ></iframe>
      </div>
    </div>
  );
}

export default Promovid;
