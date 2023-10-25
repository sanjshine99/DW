import React from "react";
import "./Home.css";
import Video from "./homecomponents/Video_landing";
import Gallery from "./homecomponents/Gallery_landing";
import Reviews from "./homecomponents/CustomerReviews";
import Partners from "./homecomponents/Partners";
import HomeDesc from "./homecomponents/HomeDescription";

function Home() {
  return (
    <div className="container">
      <div className="videocomponent">
        <Video />
      </div>
      <div className="component">
        <HomeDesc />
      </div>
      <div className="component">
        <Gallery />
      </div>
      <Reviews />
      <div className="partnercomponent">
        <Partners />
      </div>
    </div>
  );
}

export default Home;
