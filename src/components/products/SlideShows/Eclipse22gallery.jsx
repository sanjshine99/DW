import React, { useState, useEffect } from "react";
import "./Stormbreaker23inside.css";

import Eclipse22crousel from "../mobile-carousels/Eclipse22carousel";

const sections = [
  {
    name: "Exterior",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_1-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_2-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_3-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_4-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_5-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_6-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_7-min.webp",
    ],
    description: "",
  },
  {
    name: "Layout",
    images: [
      "https://deluxcaravan.b-cdn.net/assets/coming%20soon.webp", "https://deluxcaravan.b-cdn.net/assets/coming%20soon.webp", "https://deluxcaravan.b-cdn.net/assets/coming%20soon.webp", "https://deluxcaravan.b-cdn.net/assets/coming%20soon.webp", "https://deluxcaravan.b-cdn.net/assets/coming%20soon.webp", "https://deluxcaravan.b-cdn.net/assets/coming%20soon.webp", "https://deluxcaravan.b-cdn.net/assets/coming%20soon.webp",
    ],
    description: "",
  },
  {
    name: "Inside",
    images: ["https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_1-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_2-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_3-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_4-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_5-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_6-min.webp","https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_7-min.webp",],
    description: "",
  },
];

function Eclipse22gallery() {
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
                      <div className="el__close-btn_19_i">
                        <h3>Close</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mobile-div">
        <Eclipse22crousel />
      </div>
    </>
  );
}

export default Eclipse22gallery;
