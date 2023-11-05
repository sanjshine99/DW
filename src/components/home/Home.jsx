import React, { useState } from "react";
import "./Home.css";
import Video from "./homecomponents/Video_landing";
import Gallery from "./homecomponents/Gallery_landing";
import Reviews from "./homecomponents/CustomerReviews";
import Partners from "./homecomponents/Partners";
import HomeDesc from "./homecomponents/HomeDescription";
import Model from "../popup-ad/model";

function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="ad-model">
        <Model isOpen={isOpen} onClose={handleCloseModal} />
      </div>
      <div className="videocomponent">
        <Video />
      </div>
      <div className="component">
        <HomeDesc />
      </div>
      <div className="component">
        <Gallery />
      </div>
      <div className="component">
        <Reviews />
      </div>
      <div className="partnercomponent">
        <Partners />
      </div>
    </div>
  );
}

export default Home;
