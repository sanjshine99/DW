import React, { useState } from "react";
import "./Strombreaker18insidecarousel.css";

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
import SB186layout2 from "../../../assets/Product renders/18lay2.webp";

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
    images: [SB216Extdes, ex181, ex182, ex183, ex184, ex185, ex186, ex187],
    description: "",
  },
  {
    name: "Layout",
    images: [
      SB186layout,
      SB186layoutdes,
      SB186layout2,
      SB186layout,
      SB186layout2,
      SB186layout,
      SB186layout2,
    ],
    description: "",
  },
  {
    name: "Inside",
    images: [in181, in182, in183, in184, in185, in216],
    description: "",
  },
];

const Slider = () => {
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

export default Slider;
