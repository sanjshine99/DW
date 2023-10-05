import React, { useEffect, useState } from "react";
import "./Stormbreaker19inside.css";
import SB196Ext from "../../../assets/Product renders/SB196Exterior.png";
import SB196layout from "../../../assets/Product renders/SB196 layout.png";


const sections = [
  {
    name: "Exterior",
    images: [SB196Ext, SB196layout],
    description: "Exterior section description goes here.",
  },
  {
    name: "Layout",
    images: [SB196layout, SB196Ext],
    description: "Layout section description goes here.",
  },
  {
    name: "Inside",
    images: [SB196Ext], // Use imported images or URLs consistently
    description: "Inside section description goes here.",
  },
];

function Strombreaker19inside() {

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

    $elsArr.forEach(function ($el) {
      $el.addEventListener("click", function () {
        if (this.classList.contains("s--active")) return;
        $cont.classList.add("s--el-active");
        this.classList.add("s--active");
        activeElement = this;
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
    const maxIndex = sections[activeSection].images.length - 1;
    setActiveImageIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };

  const handlePrevImage = () => {
    const maxIndex = sections[activeSection].images.length - 1;
    setActiveImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };


  return (
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
                {/* Slideshow Container */}
                <div className="slideshow-container">
                  {section.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`mySlides ${
                        imgIndex === activeImageIndex ? "active" : ""
                      }`}
                    >
                      <img src={image} alt={`Image ${imgIndex + 1}`} />
                    </div>
                  ))}
                  <button className="prev" onClick={handlePrevImage}>
                    &#10094; Previous
                  </button>
                  <button className="next" onClick={handleNextImage}>
                    Next &#10095;
                  </button>
                </div>
              </div>
              <div className="el__preview-cont_19_i">
                <h2 className="el__heading_19_i">{section.name}</h2>
              </div>
              <div className="el__content_19_i">
                <div className="el__text_19_i">{section.description}</div>
                <div className="el__close-btn_19_i"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Strombreaker19inside;