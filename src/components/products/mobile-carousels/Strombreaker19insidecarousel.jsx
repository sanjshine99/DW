import React, { useState } from "react";
import "./Strombreaker18insidecarousel.css";

//exterior
import SB196Ext from "../../../assets/Product renders/SB196Exterior.webp";
import SB196Extdes from "../../../assets/Product renders/19des.webp";
import ex191 from "../../../assets/19/19 ex 1.webp";
import ex192 from "../../../assets/19/19 ex 2.webp";
import ex193 from "../../../assets/19/19 ex 3.webp";
import ex194 from "../../../assets/19/19 ex 4.webp";
import ex195 from "../../../assets/19/19 ex 5.webp";
import ex196 from "../../../assets/19/19 ex 6.webp";
//layout
import SB196layout from "../../../assets/Product renders/SB196 layout.webp";
import SB196layoutdes from "../../../assets/Product renders/19laydes.webp";
//interior
import in191 from "../../../assets/19/19 in 1.webp";
import in192 from "../../../assets/19/19 in 2.webp";
import in193 from "../../../assets/19/19 in 3.webp";

const sections = [
  {
    name: "Exterior",
    images: [SB196Extdes, ex191, ex192, ex193, ex194, ex195, ex196],
    description: "",
  },
  {
    name: "Layout",
    images: [
      SB196layout,
      SB196layoutdes,
      SB196layout,
      SB196layout,
      SB196layout,
      SB196layout,
      SB196layout,
    ],
    description: "",
  },
  {
    name: "Inside",
    images: [in191, in192, in193, in191, in192, in193, in191],
    description: "",
  },
];

const Slider19 = () => {
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

export default Slider19;
