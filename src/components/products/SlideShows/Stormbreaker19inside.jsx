import React, { useEffect, useState } from "react";
import "./Stormbreaker19inside.css";
//exterior
import SB196Ext from "../../../assets/Product renders/SB196Exterior.webp";
import ex191 from "../../../assets/19/19 ex 1.webp";
import ex192 from "../../../assets/19/19 ex 2.webp";
import ex193 from "../../../assets/19/19 ex 3.webp";
import ex194 from "../../../assets/19/19 ex 4.webp";
import ex195 from "../../../assets/19/19 ex 5.webp";
import ex196 from "../../../assets/19/19 ex 6.webp";
//layout
import SB196layout from "../../../assets/Product renders/SB196 layout.webp";
//interior
import in191 from "../../../assets/19/19 in 1.webp";
import in192 from "../../../assets/19/19 in 2.webp";
import in193 from "../../../assets/19/19 in 3.webp";



const sections = [
  {
    name: "Exterior",
    images: [SB196Ext,ex191,ex192,ex193,ex194,ex195,ex196],
    description: "With its sturdy matte finish, our family caravan is not only a delight on the interior but also visually appealing. Crafted to tackle the wide-ranging landscapes and terrains of Australia, the Storm breaker boasts state-of-the-art mechanical systems, including a robust chassis and suspension system. Experience the potency of features such as our durable wheels and family-friendly extras like a collapsible picnic table, creating a caravan adventure that resembles scenes from your favorite movies.",
  },
  {
    name: "Layout",
    images: [SB196layout,SB196layout,SB196layout,SB196layout,SB196layout,SB196layout,SB196layout ],
    description: "The layout of the 'Stormbreaker 19'6' is crafted to provide all the amenities found in the 21'6' model but in a more compact, space-efficient manner. This caravan is designed to cater to families on the move without compromising on comfort. It offers a thoughtfully designed interior that invites you to relax and make the most of your journeys, whether it's an extended road trip or a tranquil camping retreat. Despite its more compact size, the layout maximizes available space, allowing family members to move around comfortably and ensuring everyone has their own designated area. With snug seating arrangements, well-equipped kitchen facilities, and a cozy atmosphere, it creates the perfect environment for creating cherished family memories. The 'Stormbreaker 19'6' is not just a caravan; it's a mobile sanctuary that delivers the comfort and coziness of home to your adventures in a more compact package.",
  },
  {
    name: "Inside",
    images: [in191,in192,in193,in191,in192,in193,in191], 
    description: "The Storm breaker offers a comprehensive array of comforts that cater to your needs while you're traveling. Embrace the opulent and cozy sleeping accommodations designed to accommodate the entire family, along with well-appointed living spaces and a fully equipped kitchen. Revel in every moment of your journeys with our exceptional features. We take every detail into account, from amenities like a smart TV to the convenience of air conditioning, water heating, and an angled kitchen counter. We ensure that you have everything necessary to bring a touch of home with you on every excursion.",
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

export default Strombreaker19inside;
