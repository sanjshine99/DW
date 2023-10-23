import React, { useEffect } from 'react';
import "./HomeComponent.css"; 
import { Helmet } from 'react-helmet';

const Testimonials = () => {
  useEffect(() => {
    // Load the ElfSight script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.async = true;

    // Append the script to the body of the document
    document.body.appendChild(script);

    return () => {
      // Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div className="component">
        <div className="testimonials-container">
        {/* Embed ElfSight widget */}
        <div className="elfsight-app-7f936063-48fa-47a2-8c00-cbd189d442f9"></div>
      {/* Add the ElfSight script to the head using Helmet */}
      <Helmet>
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
      </Helmet>
    </div>
    </div>
    </div>
  );
}

export default Testimonials;