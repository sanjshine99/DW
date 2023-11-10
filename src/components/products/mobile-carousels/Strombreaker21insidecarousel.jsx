import React, { useState } from "react";
import "./Strombreaker18insidecarousel.css";

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

const Slider21 = () => {
  const [activeImageIndices, setActiveImageIndices] = useState(
    Array(sections.length).fill(0)
  );

  const [showOverlays, setShowOverlays] = useState(
    Array(sections.length).fill(true)
  );

  const [lastClickedSection, setLastClickedSection] = useState(null);

  const handleOverlayTouch = (sectionIndex) => {
    setShowOverlays((prev) => {
      const newOverlays = [...prev];
      newOverlays[sectionIndex] = false;
      if (lastClickedSection !== null && lastClickedSection !== sectionIndex) {
        newOverlays[lastClickedSection] = true;
      }
      setLastClickedSection(sectionIndex);
      return newOverlays;
    });
  };

  const handleNextImage = (sectionIndex) => {
    const currentSection = sections[sectionIndex];
    if (activeImageIndices[sectionIndex] < currentSection.images.length - 1) {
      setActiveImageIndices((prevIndices) => {
        const newIndices = [...prevIndices];
        newIndices[sectionIndex] += 1;
        return newIndices;
      });
    }
  };

  const handlePrevImage = (sectionIndex) => {
    if (activeImageIndices[sectionIndex] > 0) {
      setActiveImageIndices((prevIndices) => {
        const newIndices = [...prevIndices];
        newIndices[sectionIndex] -= 1;
        return newIndices;
      });
    }
  };

  return (
    <div className="slider-container">
      {sections.map((section, sectionIndex) => (
        <div key={section.name} className="slider-section">
          {showOverlays[sectionIndex] && (
            <div
              className="slider-overlay"
              onClick={() => handleOverlayTouch(sectionIndex)}
            >
              <h1 className="slider-heading">{section.name}</h1>
            </div>
          )}

          <div className="slider-inner">
            <img
              src={section.images[activeImageIndices[sectionIndex]]}
              alt={`Img ${activeImageIndices[sectionIndex] + 1}`}
            />

            {!showOverlays[sectionIndex] && (
              <div className="slider-controls">
                <button
                  className="slider-prev"
                  onClick={() => handlePrevImage(sectionIndex)}
                >
                  Previous
                </button>
                <button
                  className="slider-next"
                  onClick={() => handleNextImage(sectionIndex)}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider21;
