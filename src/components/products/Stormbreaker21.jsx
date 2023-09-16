import React, { useRef,useState, useEffect, } from 'react';
import './Products.css';
import '../home/Home.css';
import '../home/homecomponents/HomeComponent.css';
import can from '../../assets/c.gltf';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Strom21inside from '../products/SlideShows/Stormbreaker21inside';
import Strom21outside from '../products/SlideShows/Strombreaker21outside';
import Storm21specs from './Specsmenu/Specs21';

function Stormbreaker21() {
  const containerRef = useRef(null);
  const scrollToSpecs = () => {
    // Replace 'specs' with the ID of the div you want to scroll to
    const specsDiv = document.getElementById('specs');
    if (specsDiv) {
      specsDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLayout = () => {
    // Replace 'layout' with the ID of the div you want to scroll to
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


  return (
    <div className="container">
    <div className="component">
      <div>
        <h1 className='Product-header'>Stormbreaker21</h1>
        <div className="button-container">
          <button onClick={scrollToLayout} className="btn hover-border-1">Layout</button>
          <button onClick={scrollToSpecs} className="btn hover-border-1">Specs</button>
        </div>
      </div>
    </div>

    <div className='slideshowcomopnent'>
     <Strom21inside/>
    </div>
    <div className='slideshowcomopnent'>
    <Strom21outside/>
    </div>
      <div className="component">
      <div class="product-container" id='layout'>
         <div class="description">
         Are you looking for a smaller family bunk van? Then this is model is the answer. With the Storm breaker 19’6, you get all the features of the 21’6 model. Every journey is one to remember with its world-class interior and top-notch exterior and mechanical features. When you take to the road with your favourite people, you enjoy a spacious layout with all the facilities you expect from a luxury RV experience. We don’t just stop there—we make sure your adventures don’t leave a mark on the environment. With its eco-friendly features, travel without the guilt but with all the joy you deserve.
        </div>
    <div class="image">
    <Canvas style={{ width: '1000px', height: '600px', background: '#000000' ,maxWidth: '100%',maxHeight: '100%',borderRadius: '20px' , marginBottom:'30px' }}>
              <ambientLight intensity={10} />
              <directionalLight position={ [10, -1, 30] } intensity={100} />
              <directionalLight position={[-3, 0, 1]} intensity={200} />
              <directionalLight position={[1, 0, 1]} intensity={100} />
              <directionalLight position={[0, 3, 2]} intensity={400} />
              <directionalLight position={[0, 3, -5]} intensity={400} />
                <OrbitControls minDistance={3} maxDistance={5} />
                {gltf && <primitive object={gltf.scene} />}
                </Canvas>
  </div>
</div>
      </div>
      <div className="component" id='specs'>
        <h1>Specs Menu</h1>
        <Storm21specs/>
      </div>
    </div>
  )
}

export default Stormbreaker21;