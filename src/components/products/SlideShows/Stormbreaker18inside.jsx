import React, { useState, useEffect } from "react";
import "./Stormbreaker21inside.css";

//exterior
import SB216Ext from "../../../assets/Product renders/SB186Exterior.webp";
import SB216Extdes from "../../../assets/Product renders/18des.webp";
import ex181 from "../../../assets/18/18 ex 1.webp";
import ex182 from "../../../assets/18/18 ex 2.webp";
import ex183 from "../../../assets/18/18 ex 3.webp";
import ex184 from "../../../assets/18/18 ex 4.webp";
import ex185 from "../../../assets/18/18 ex 5.webp";
import ex186 from "../../../assets/18/18 ex 6.webp";
import ex187 from "../../../assets/18/18 ex 7.webp";


//layout
import SB186layout from "../../../assets/Product renders/SB18 layout.webp";
import SB186layoutdes from "../../../assets/Product renders/18laydes.webp";
//interior
import in181 from "../../../assets/18/18 in 1.webp";
import in182 from "../../../assets/18/18 in 2.webp";
import in183 from "../../../assets/18/18 in 3.webp";
import in184 from "../../../assets/18/18 in 4.webp";
import in185 from "../../../assets/18/18 in 5.webp";
import in216 from "../../../assets/18/18 in 6.webp";

const sections = [
  {
    name: "Exterior",
    images: [SB216Extdes, ex181,ex182,ex183,ex184,ex185,ex186,ex187],
    description: "",
  },
  {
    name: "Layout",
    images: [SB186layout,SB186layoutdes,SB186layout,SB186layout,SB186layout,SB186layout],
    description: "",
  },
  {
    name: "Inside",
    images: [in181,in182,in183,in184,in185,in216], 
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
    <div className="cont_19_i s--inactive">
      <div className="cont__inner_19_i">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`el_19_i ${activeSection === index ? "s--active" : ""}`}
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
  );
}

export default Strombreaker21inside;
