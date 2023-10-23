import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../home/Home.css';
import '../../home/homecomponents/HomeComponent.css';
import './Techspec.css';
import aim from '../../../assets/techspec/aim (1).webp';
import Chain from '../../../assets/techspec/chain.webp';
import height from '../../../assets/techspec/height.webp';
import weight from '../../../assets/techspec/kilogram.webp';
import length from '../../../assets/techspec/length.webp';
import eheight from '../../../assets/techspec/exheight.webp';

function Techspec21() {
  const [refTechSpec, inViewTechSpec] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="component" ref={refTechSpec}>
      <h1>TECHNICAL SPECS</h1>
      <div className="ourval">
        <motion.div
          className="image-item"
          variants={imageVariants}
          initial="initial"
          animate={inViewTechSpec ? "animate" : "initial"}
        >
          <img
            src={weight}
            alt="Bespokemodels"
            className="galleryoverlayimage"
            height="100px"
            width="100px"
          />
          <h3>Tare Approx: 2850kg</h3>
        </motion.div>
        <motion.div
          className="image-item"
          variants={imageVariants}
          initial="initial"
          animate={inViewTechSpec ? "animate" : "initial"}
        >
          <img
            src={Chain}
            alt="Ecofriendly"
            className="galleryoverlayimage"
            height="100px"
            width="100px"
          />
          <h3>ATM: 3500kg</h3>
        </motion.div>
        <motion.div
          className="image-item"
          variants={imageVariants}
          initial="initial"
          animate={inViewTechSpec ? "animate" : "initial"}
        >
          <img
            src={height}
            alt="Experience"
            className="galleryoverlayimage"
            height="100px"
            width="100px"
          />
          <h3>Internal Height: 2000mm</h3>
        </motion.div>
        <motion.div
          className="image-item"
          variants={imageVariants}
          initial="initial"
          animate={inViewTechSpec ? "animate" : "initial"}
        >
          <img
            src={length}
            alt="Ratings"
            className="galleryoverlayimage"
            height="100px"
            width="100px"
          />
          <h3>External Length: 9150mm</h3>
        </motion.div>
        <motion.div
          className="image-item"
          variants={imageVariants}
          initial="initial"
          animate={inViewTechSpec ? "animate" : "initial"}
        >
          <img
            src={aim}
            alt="Ratings"
            className="galleryoverlayimage"
            height="100px"
            width="100px"
          />
          <h3>Ball Approx: 220kg</h3>
        </motion.div>
        <motion.div
          className="image-item"
          variants={imageVariants}
          initial="initial"
          animate={inViewTechSpec ? "animate" : "initial"}
        >
          <img
            src={eheight}
            alt="Ratings"
            className="galleryoverlayimage"
            height="100px"
            width="100px"
          />
          <h3>External Height: 3200mm</h3>
        </motion.div>
      </div>
    </div>
  );
}

export default Techspec21;
