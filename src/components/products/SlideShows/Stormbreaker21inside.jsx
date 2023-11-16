import React, { useState, useEffect } from "react";
import "./Stormbreaker21inside.css";

//exterior
import SB216Ext from "../../../assets/Product renders/SB216Exterior.webp";
import SB216Extdes from "../../../assets/Product renders/21des.webp";
import ex211 from "../../../assets/21/21 ex 1.webp";
import ex212 from "../../../assets/21/21 ex 2.webp";
import ex213 from "../../../assets/21/21 ex 3.webp";
import ex214 from "../../../assets/21/21 ex 4.webp";
import ex215 from "../../../assets/21/21 ex 5.webp";
//layout
import SB216layout from "../../../assets/Product renders/SB216 layout.webp";
import SB216layoutdes from "../../../assets/Product renders/21laydes.webp";
import SB216layout2 from "../../../assets/Product renders/21lay2.webp";
//interior
import in211 from "../../../assets/21/21 in 1.webp";
import in212 from "../../../assets/21/21 in 2.webp";
import in213 from "../../../assets/21/21 in 3.webp";
import in214 from "../../../assets/21/21 in 4.webp";
import in215 from "../../../assets/21/21 in 5.webp";

import Strombreaker21insidecarousel from "../mobile-carousels/Strombreaker21insidecarousel";

const sections = [
  {
    name: "Exterior",
    images: [SB216Extdes, ex211, ex212, ex213, ex214, ex215],
    description: "",
  },
  {
    name: "Layout",
    images: [
      SB216layout,
      SB216layoutdes,
      SB216layout2,
      SB216layout,
      SB216layout2,
      
    ],
    description: "",
  },
  {
    name: "Inside",
    images: [in211, in212, in213, in214, in215, in211],
    description: "",
  },
];

function Strombreaker21inside() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    var $cont = document.querySelector(".cont_19_i");
    var $elsArr = [].slice.call(document.querySelectorAll(".el_19_i"));
    var $closeBtnsArr = [].slice.call(
      document.querySelectorAll(".el__close-btn_19_i")
    );

    setTimeout(function () {
      $cont.classList.remove("s--inactive");
    }, 200);

    let activeElement = null;

    $elsArr.forEach(function ($el, index) {
      $el.addEventListener("click", function () {
        if (this.classList.contains("s--active")) return;
        $cont.classList.add("s--el-active");
        this.classList.add("s--active");
        activeElement = this;
        setActiveSection(index);
      });
    });

    $closeBtnsArr.forEach(function ($btn) {
      $btn.addEventListener("click", function (e) {
        e.stopPropagation();
        $cont.classList.remove("s--el-active");
        if (activeElement) {
          activeElement.classList.remove("s--active");
          activeElement = null;
        }
      });
    });
  }, []);

  const handleNextImage = () => {
    if (
      activeSection !== null &&
      sections[activeSection] &&
      sections[activeSection].images
    ) {
      const maxIndex = sections[activeSection].images.length - 1;
      setActiveImageIndex((prevIndex) =>
        prevIndex < maxIndex ? prevIndex + 1 : 0
      );
    }
    console.log(activeImageIndex);
  };

  const handlePrevImage = () => {
    if (
      activeSection !== null &&
      sections[activeSection] &&
      sections[activeSection].images
    ) {
      const maxIndex = sections[activeSection].images.length - 1;
      setActiveImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : maxIndex
      );
    }
    console.log(activeImageIndex);
  };

  return (
    <>
      <div className="desktop-div">
        <div className="cont_19_i s--inactive">
          <div className="cont__inner_19_i">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`el_19_i ${
                  activeSection === index ? "s--active" : ""
                }`}
              >
                <div className="el__overflow_19_i">
                  <div className="el__inner_19_i">
                    <div className="el__bg_19_i">
                      <div className="mySlides active">
                        <img
                          src={section.images[activeImageIndex]}
                          alt={`Image ${activeImageIndex + 1}`}
                        />
                      </div>
                    </div>
                    <div className="el__preview-cont_19_i">
                      <h2 className="el__heading_19_i">{section.name}</h2>
                    </div>
                    <div className="el__content_19_i">
                      <button className="prev" onClick={handlePrevImage}>
                        &#10094; Previous
                      </button>
                      <button className="next" onClick={handleNextImage}>
                        Next &#10095;
                      </button>
                      <div className="el__text_19_i">{section.description}</div>
                      <div className="el__close-btn_19_i"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mobile-div">
        <Strombreaker21insidecarousel />
      </div>
    </>
  );
}

export default Strombreaker21inside;