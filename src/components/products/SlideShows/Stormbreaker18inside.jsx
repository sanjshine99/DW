import React, { useState, useEffect } from "react";
import "./Stormbreaker21inside.css";

//exterior
import SB216Ext from "../../../assets/Product renders/SB216Exterior.webp";
import ex181 from "../../../assets/18/18 ex 1.webp";
import ex182 from "../../../assets/18/18 ex 2.webp";
import ex183 from "../../../assets/18/18 ex 3.webp";
import ex184 from "../../../assets/18/18 ex 4.webp";


//layout
import SB186layout from "../../../assets/Product renders/SB18 layout.webp";
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
    images: [SB216Ext, ex181,ex182,ex183,ex184],
    description: "With its sturdy matte finish, our family caravan is not only a delight on the interior but also visually appealing. Crafted to tackle the wide-ranging landscapes and terrains of Australia, the Storm breaker boasts state-of-the-art mechanical systems, including a robust chassis and suspension system. Experience the potency of features such as our durable wheels and family-friendly extras like a collapsible picnic table, creating a caravan adventure that resembles scenes from your favorite movies.",
  },
  {
    name: "Layout",
    images: [SB186layout,SB186layout,SB186layout,SB186layout,SB186layout],
    description: "The 'StormBreaker 18'6' offers a layout meticulously crafted to provide all the amenities you'd find in the 21'6' model but in a more space-efficient design. This caravan is tailored to meet the needs of families on the move, ensuring they don't have to compromise on comfort. Its interior design is thoughtful and inviting, encouraging you to relax and make the most of your journeys, whether it's an extended road trip or a tranquil camping retreat. Despite its compact size, the layout maximizes available space, allowing family members to move around comfortably and ensuring everyone has their designated area. With snug seating arrangements, well-equipped kitchen facilities, and a cozy atmosphere, it creates the perfect environment for crafting cherished family memories. The 'StormBreaker 18'6' is not just a caravan; it's a mobile sanctuary that brings the comfort and coziness of home to your adventures in a more compact package.",
  },
  {
    name: "Inside",
    images: [in181,in182,in183,in184,in185,in216], 
    description: "The Storm breaker provides you with all the worldly comforts you can expect when you’re on the road. With its plush and comfortable sleeping arrangements for the entire family, living quarters and fully equipped kitchen, enjoy every moment of your adventures with our world-class features. We consider everything too; from your smart TV to air conditioning, water heating and angled kitchen bench, you have everything you need to take a piece of home with you on every trip.",
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
