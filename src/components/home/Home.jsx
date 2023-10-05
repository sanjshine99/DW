import React from "react";
import "./Home.css";
import Video from "./homecomponents/Video_landing";
import Gallery from "./homecomponents/Gallery_landing";
import Reviews from "./homecomponents/CustomerReviews";
import Partners from "./homecomponents/Partners";

function Home() {
  return (
    <div className="container">
      <Video />
      <Gallery />
      <div className="component">
        <Reviews />
      </div>
      <div className="partnercomponent">
      <h1>Our Premium Partners</h1>
        <Partners />
      </div>
    </div>
  );
}

export default Home;
