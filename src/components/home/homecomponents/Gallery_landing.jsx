import React, { useCallback } from "react";
import "./HomeComponent.css";
import Bespokemodels from "../../../assets/why choose us/customer-support.webp";
import Ecofriendly from "../../../assets/why choose us/ecology.webp";
import Experience from "../../../assets/why choose us/certification.webp";
import Ratings from "../../../assets/why choose us/customer-review.webp";
import Warranty from "../../../assets/why choose us/warranty.webp";
import Support from "../../../assets/why choose us/technical-support.webp";

const Gallery_landing = () => {
  const handleImageClick = useCallback((message) => {
    alert(message); // Placeholder alert for demonstration
  }, []);

  return (
    <div className="wcontainer">
      <h1>Why Choose Us</h1>
      <div className="image-container_landing">
        <div className="image-item" onClick={() => handleImageClick("Bespoke Models")}>
          <img
            src={Bespokemodels}
            alt="Bespokemodels"
            className="galleryoverlayimage"
            height="100px"
            width="100px"
          />
          <p>Bespokemodels</p>
        </div>
          <div className="image-item">
            <img
              src={Ecofriendly}
              alt="Ecofriendly"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <p>Eco-friendly Options</p>
          </div>
          <div className="image-item">
            <img
              src={Experience}
              alt="Experience"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <p>10+ Years of Manufacturing Experience</p>
          </div>
          <div className="image-item">
            <img
              src={Ratings}
              alt="Ratings"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <p>Ratings</p>
          </div>
          <div className="image-item">
            <img
              src={Warranty}
              alt="Ratings"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <p>3 Year Structural Warranty</p>
          </div>
          <div className="image-item">
            <img
              src={Support}
              alt="Ratings"
              className="galleryoverlayimage"
              height="100px"
              width="100px"
            />
            <p>Top Notch Support</p>
          </div>
          </div>
    </div>
  );
};


export default React.memo(Gallery_landing);
