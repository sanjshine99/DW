import React from 'react';
import './HomeComponent.css';
import Bespokemodels from '../../../assets/why choose us/customer-support.png';
import Ecofriendly from '../../../assets/why choose us/ecology.png';
import Experience from '../../../assets/why choose us/certification.png';
import Ratings from '../../../assets/why choose us/customer-review.png';

import img1 from '../../../assets/images/g1.png';
import img2 from '../../../assets/images/g2.png';
import img3 from '../../../assets/images/g3.png';

class Gallery_landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        img1,
        img2,
        img3,
        // Add more image URLs here
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
      <div className="gallery_landing_container">
        <div className="text-overlay-gallery">
          <h1>Why Choose Us</h1>
        </div>
        <div className="image-container">
          <div className="image-item">
            <img src={Bespokemodels} alt="Bespokemodels" className='galleryoverlayimage' />
            <p>Bespokemodels</p>
          </div>
          <div className="image-item">
            <img src={Ecofriendly} alt="Ecofriendly" className='galleryoverlayimage'/>
            <p>Ecofriendly</p>
          </div>
          <div className="image-item">
            <img src={Experience} alt="Experience" className='galleryoverlayimage'/>
            <p>Experience</p>
          </div>
          <div className="image-item">
            <img src={Ratings} alt="Ratings" className='galleryoverlayimage'/>
            <p>Ratings</p>
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
    );
  }
}

export default Gallery_landing;
