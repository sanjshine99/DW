import React, { useRef, useEffect, useState } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import Strom18inside from "../products/SlideShows/Stormbreaker18inside";
import { gsap } from "gsap";
import Storm18specs from "./Specsmenu/Specs18";
import SB216img from "../../assets/Product renders/SB186Exterior.webp";
import WarrantyPolicyPopup from "./popup/WarrantyPolicyPopUp";
import LayoutPopUp from "./popup/LayoutPopUp";

function Stormbreaker18() {
  const containerRef = useRef(null);
  const scrollToSpecs = () => {
    // Replace 'specs' with the ID of the div you want to scroll to
    const specsDiv = document.getElementById("specs");
    if (specsDiv) {
      specsDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLayout = () => {
    // Replace 'layout' with the ID of the div you want to scroll to
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
          <img src={SB216img} alt="" />
          <div className="image-overlay">
            <h1 className="Product-header revealUp">Stormbreaker18`6</h1>
            <div className="button-container">
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
        <Strom18inside />
      </div>
      {/* <div className='slideshowcomopnent'>
    </div> */}
      <div className="component">
        <div className="product-container" id="layout">
          <div className="description">
            <p>
              Looking for a more compact caravan than the 18'6 model? Your quest
              for a snug yet stylish travel companion ends here. The 18'6 model
              offers a perfect blend of convenience and comfort, making your
              journeys truly enjoyable. With its space-saving design and
              well-appointed interior, you'll find everything you need for your
              adventures. Don't compromise on quality or features; this compact
              caravan ensures you have all you desire for memorable travels.
              Plus, it's designed with eco-friendly elements to minimize your
              environmental footprint, so you can explore with a clear
              conscience.
            </p>
            <button
              className="btn hover-border-1 revealUp"
              onClick={openWarrantyPopupWarrantyPolicy}
            >
              Warranty Policy
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
              src="https://esceneyf.sirv.com/Spins/18/18.spin"
              width="1000px"
              height="1000px"
              frameborder="0"
              allowFullScreen
              title="Stormbreaker 18'6"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Storm18specs />
      </div>
    </div>
  );
}

export default Stormbreaker18;
