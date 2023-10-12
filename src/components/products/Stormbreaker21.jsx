import React, { useRef, useEffect } from "react";
import "./Products.css";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import Strom21inside from "../products/SlideShows/Stormbreaker21inside";
import { gsap } from "gsap";
import Storm21specs from "./Specsmenu/Specs21";
import SB216img from "../../assets/Product renders/SB216Exterior.png";

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
              Here at Deluxe Caravans, taking the scenic route is what we’re all
              about. With the Storm breaker, every journey is one to remember
              with its world-class interior and top-notch exterior and
              mechanical features. When you take to the road with your favourite
              people, you enjoy a spacious layout with all the facilities you
              expect from a luxury RV experience. We don’t just stop there—we
              make sure your adventures don’t leave a mark on the environment.
              With its eco-friendly features, travel without the guilt but with
              all the joy you deserve.
            </p>
          </div>
          <div className="image">
            <iframe
              src="https://esceneyf.sirv.com/Spins/test2/test2.spin"
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
