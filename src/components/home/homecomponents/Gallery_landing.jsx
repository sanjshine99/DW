import React from 'react';
import './HomeComponent.css';
import Bespokemodels from '../../../assets/why choose us/customer-support.webp';
import Ecofriendly from '../../../assets/why choose us/ecology.webp';
import Experience from '../../../assets/why choose us/certification.webp';
import Ratings from '../../../assets/why choose us/customer-review.webp';
import img1 from '../../../assets/images/1.webp';
import img2 from '../../../assets/images/2.webp';
import img5 from '../../../assets/images/5.webp';
import img7 from '../../../assets/images/7.webp';
import img8 from '../../../assets/images/8.webp';
import img9 from '../../../assets/images/9.webp';
import img10 from '../../../assets/images/10.webp';
import img11 from '../../../assets/images/11.webp';
import img13 from '../../../assets/images/13.webp';
import img14 from '../../../assets/images/14.webp';




class Gallery_landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        img1,
        img2,
        img5,
        img7,
        img8,
        img9,
        img10,
        img11,
        img13,
        img14,
   
      ],
      currentIndex: 0, // Current index of the displayed image
    };
  }

  componentDidMount() {
    // Start the animation loop
    this.animationInterval = setInterval(this.animateImages, 2000); // Change the interval as desired
  }

  componentWillUnmount() {
    // Clear the animation interval when the component unmounts
    clearInterval(this.animationInterval);
  }

  animateImages = () => {
    this.setState((prevState) => {
      // Calculate the next index and reset to 0 if it exceeds the image count
      const nextIndex = (prevState.currentIndex + 1) % prevState.images.length;

      return {
        currentIndex: nextIndex,
      };
    });
  };
  

  render() {
    const { images, currentIndex } = this.state;

    
    return (
      <div className="container">
    <div className="component">
      <div className="gallery_landing_container">
        <div className="text-overlay-gallery">
          <h1>Why Choose Us</h1>
        </div>
        <div className="image-container">
          <div className="image-item">
          <img src={Bespokemodels} alt="Bespokemodels" className='galleryoverlayimage' height="100px" width="100px" />
            <p>Bespokemodels</p>
          </div>
          <div className="image-item">
            <img src={Ecofriendly} alt="Ecofriendly" className='galleryoverlayimage' height="100px" width="100px"/>
            <p>Ecofriendly</p>
          </div>
          <div className="image-item">
            <img src={Experience} alt="Experience" className='galleryoverlayimage' height="100px" width="100px"/>
            <p>10+ years of manufacturing Experience</p>
          </div>
          <div className="image-item">
            <img src={Ratings} alt="Ratings" className='galleryoverlayimage' height="100px" width="100px"/>
            <p>Ratings</p>
          </div>
          <div className="image-item">
            <img src={Ratings} alt="Ratings" className='galleryoverlayimage' height="100px" width="100px"/>
            <p>3 year structural warranty</p>
          </div>
        </div>
        <div className="waterfall-container">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className={`waterfall-item ${index === currentIndex ? 'current' : ''}`}
              style={{
                backgroundImage: `url(${imageUrl})`,
                animationDelay: `${index * 1}s`, // Adjust the delay as needed
              }}
            ></div>
          ))}
        </div>
      </div>
      </div></div>
    );
  }
}

export default Gallery_landing;
