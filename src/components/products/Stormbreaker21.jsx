import React, { useRef, useEffect, useState } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import Strom21inside from "../products/SlideShows/Stormbreaker21inside";
import { gsap } from "gsap";
import Storm21specs from "./Specsmenu/Specs21";
import SB216img from "../../assets/Product renders/SB216Exterior.webp";
import WarrantyPolicyPopup from "./popup/WarrantyPolicyPopUp";
import LayoutPopUp from "./popup/LayoutPopUp";

function Stormbreaker21() {
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
            <h1 className="Product-header revealUp">Stormbreaker21`6</h1>
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
        <Strom21inside />
      </div>
      {/* <div className='slideshowcomopnent'>
    </div> */}
      <div className="component">
        <div className="product-container" id="layout">
          <div className="description">
            <p>
              Are you in search of a more spacious family bunk van? Look no
              further; the Storm breaker 21'6 is the answer you've been seeking.
              With this model, you're granted all the remarkable features found
              in the 19'6 version. Each journey becomes a memorable experience,
              thanks to its world-class interior, top-tier exterior, and
              mechanical attributes. When you hit the open road with your
              cherished companions, you're treated to a generously spacious
              layout, complete with all the amenities you'd expect from a luxury
              RV adventure. But we don't stop there—our commitment extends to
              ensuring that your adventures have minimal impact on the
              environment. With its eco-friendly features, you can travel
              without guilt and bask in all the joy you rightfully deserve.
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
              Download Layout
            </button>
            {isLayoutPopupOpen && (
              <LayoutPopUp onClose={closeLayoutPopupLayoutPolicy} />
            )}
          </div>
          <div className="image">
            <iframe
              src="https://esceneyf.sirv.com/Spins/test2/test2.spin"
              title="Stormbreaker21"
              width="1000px"
              height="1000px"
              frameborder="0"
              allowFullScreen
            ></iframe>{" "}
          </div>
        </div>
      </div>
      <div className="component" id="specs">
        <h1>Specs Menu</h1>
        <Storm21specs />
      </div>
    </div>
  );
}

export default Stormbreaker21;
