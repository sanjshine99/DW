import React, {useCallback, useMemo } from 'react';
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


const imageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

const Techspec18 = () => {
  const [refTechSpec, inViewTechSpec] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animatedImage = useCallback(
    (src, alt, text) => (
      <motion.div
        className="image-item"
        variants={imageVariants}
        initial="initial"
        animate={inViewTechSpec ? 'animate' : 'initial'}
      >
        <img
          src={src}
          alt={alt}
          className="galleryoverlayimage"
          height="100px"
          width="100px"
        />
        <h3>{text}</h3>
      </motion.div>
    ),
    [inViewTechSpec]
  );

  const images = useMemo(() => {
    return [
      animatedImage(weight, 'Bespokemodels', 'Tare Approx: 2400kg'),
      animatedImage(Chain, 'Ecofriendly', 'ATM: 3000kg'),
      animatedImage(height, 'Experience', 'Internal Height: 2000mm'),
      animatedImage(length, 'Ratings', 'External Length: 8100mm'),
      animatedImage(aim, 'Ratings', 'Ball Approx: 200kg'),
      animatedImage(eheight, 'Ratings', 'External Height: 3200mm'),
    ];
  }, [animatedImage]);

  return (
    <div className="component" ref={refTechSpec}>
      <h1>TECHNICAL SPECS</h1>
      <div className="ourval">{images}</div>
    </div>
  );
};

export default React.memo(Techspec18);
