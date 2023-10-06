import React, { useRef, useState, useEffect } from 'react';
import './Products.css';
import '../home/Home.css';
import '../home/homecomponents/HomeComponent.css';
import can from '../../assets/c.gltf';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Strom19inside from '../products/SlideShows/Stormbreaker19inside';
import { gsap } from 'gsap';
import Storm19specs from './Specsmenu/Specs19';
import SB196img from '../../assets/Product renders/SB196Exterior.png';

function Stormbreaker19() {
  const containerRef = useRef(null);

  const scrollToSpecs = () => {
    const specsDiv = document.getElementById('specs');
    if (specsDiv) {
      specsDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLayout = () => {
    const layoutDiv = document.getElementById('layout');
    if (layoutDiv) {
      layoutDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [gltf, setGltf] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(can, (gltf) => {
      setGltf(gltf);
    });
  }, []);

  useEffect(() => {
    gsap.utils.toArray('.revealUp').forEach((elem) => {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: 'back',
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'bottom 20%',
            markers: false, // Set this to true for debug markers
          },
        }
      );
    });
  }, []);

  return (
    <div className="container">
    <div className="component">
      <div className="background-image">
        <img src={SB196img} alt="" />
        <div className="image-overlay">
          <h1 className='Product-header revealUp'>Stormbreaker19`6</h1>
          <div className="button-container">
            <button onClick={scrollToLayout} className="btn hover-border-1 revealUp">Layout</button>
            <button onClick={scrollToSpecs} className="btn hover-border-1 revealUp">Specs</button>
          </div>
        </div>
      </div>
    </div>

      <div className='slideshowcomopnent'>
        <Strom19inside />
        </div>
        <div className='slideshowcomopnent'>
    </div>
      <div className="component">
      <div class="product-container" id='layout'>
      <div class="description">
      <p>Are you looking for a smaller family bunk van? Then this is model is the answer. With the Storm breaker 19’6, you get all the features of the 21’6 model. Every journey is one to remember with its world-class interior and top-notch exterior and mechanical features. When you take to the road with your favourite people, you enjoy a spacious layout with all the facilities you expect from a luxury RV experience. We don’t just stop there—we make sure your adventures don’t leave a mark on the environment. With its eco-friendly features, travel without the guilt but with all the joy you deserve.</p>
        </div>
    <div class="image">
    <iframe src="https://esceneyf.sirv.com/Spins/SB196/SB196.spin" width="1000px" height="1000px" frameborder="0" allowfullscreen></iframe>  </div>
</div>
      </div>
      <div className="component" id='specs'>
        <h1>Specs Menu</h1>
        <Storm19specs/>
      </div>
    </div>
  )
}

export default Stormbreaker19;
