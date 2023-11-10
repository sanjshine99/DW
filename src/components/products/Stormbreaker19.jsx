import React, { useRef, useEffect, useState } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import Strom19inside from "../products/SlideShows/Stormbreaker19inside";
import { gsap } from "gsap";
import Storm19specs from "./Specsmenu/Specs19";
import Techspec19 from "./techspecs/Techspec19";
import SB196img from "../../assets/Product renders/SB196Exterior.webp";
import WarrantyPolicyPopup from "./popup/WarrantyPolicyPopUp";
import LayoutPopUp from "./popup/LayoutPopUp";

function Stormbreaker19() {
  const containerRef = useRef(null);

  const scrollToSpecs = () => {
    const specsDiv = document.getElementById("specs");
    if (specsDiv) {
      specsDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLayout = () => {
    const layoutDiv = document.getElementById("layout");
    if (layoutDiv) {
      layoutDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
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
  }, []);

  const [isWarrantyPopupOpen, setWarrantyPopupOpen] = useState(false);
  const [isLayoutPopupOpen, setLayoutPopupOpen] = useState(false);

  const openWarrantyPopupWarrantyPolicy = () => {
    setWarrantyPopupOpen(true);
  };

  const closeWarrantyPopupWarrantyPolicy = () => {
    setWarrantyPopupOpen(false);
  };

  const openLayoutPopupLayoutPolicy = () => {
    setLayoutPopupOpen(true);
  };

  const closeLayoutPopupLayoutPolicy = () => {
    setLayoutPopupOpen(false);
  };

  return (
    <div className="container">
      <div className="component">
        <div className="background-image">
          <img src={SB196img} alt="" />
          <div className="image-overlay">
            <div className="button-container">
              <h1 className="Product-header revealUp">Stormbreaker19`6</h1>
              <button
                onClick={scrollToLayout}
                className="btn hover-border-1 revealUp"
              >
                Layout
              </button>
              <button
                onClick={scrollToSpecs}
                className="btn hover-border-1 revealUp"
              >
                Specs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="slideshowcomopnent">
        <Strom19inside />
      </div>
      {/* <div className='slideshowcomopnent'>
    </div> */}
      <div className="component">
        <div className="product-container" id="layout">
          <div className="description">
            <p>
              Searching for a compact family bunk caravan? Look no further. The
              Stormbreaker 19'6 is the perfect solution, offering all the
              features of the 21'6 model. Every journey becomes a memorable
              experience with its premium built interior, exterior, and
              mechanical attributes. When you hit the open road with your loved
              ones, you'll enjoy a spacious layout and all the amenities you'd
              expect from a luxury RV. But our commitment doesn't end there- we
              ensure your adventures leave no environmental footprint. With
              eco-friendly features, you can travel without guilt and experience
              all the joy you deserve.
            </p>
            <div className="package-details">
            <p>
                <h2>NOW WITH ALL 2024 ORDERS, OFF-GRID PACKAGE INCLUSIONS: </h2>
              </p>
              <p>
              <h3>WORTH $5000 !</h3>
              </p>
              <ul>
  <li>DOMETIC FRESH JETAIRCON</li>
  <li>188L DOMETIC COMPRESSOR FRIDGE</li>
  <li>3 X 170W SOLAR PANELS</li>
  <li>2 X 100AH LITHIUM BATTERIES</li>
</ul>

            </div>
            <p>
              {/* <button className="virtual-btn">
                <a href="/tour">Have a look at STORMBREAKER 18`6</a>
              </button> */}
            </p>
            <button
              className="btn hover-border-1 revealUp"
              onClick={openWarrantyPopupWarrantyPolicy}
            >
              Upgrade List
            </button>
            {isWarrantyPopupOpen && (
              <WarrantyPolicyPopup onClose={closeWarrantyPopupWarrantyPolicy} />
            )}

            <button
              className="btn hover-border-1 revealUp"
              onClick={openLayoutPopupLayoutPolicy}
            >
              Download Brochure
            </button>
            {isLayoutPopupOpen && (
              <LayoutPopUp onClose={closeLayoutPopupLayoutPolicy} />
            )}
          </div>
          <div className="image">
            <iframe
              src="https://esceneyf.sirv.com/Spins/SB196/SB196.spin"
              title="Stormbreaker 19'6"
              width="1000px"
              height="1000px"
              frameborder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="component" id="specs">
        <Techspec19 />
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Storm19specs />
      </div>
    </div>
  );
}

export default Stormbreaker19;
