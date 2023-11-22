import React from 'react';
import { useInView } from 'react-intersection-observer';
import './HomeComponent.css';

function HomeDescription() {
  const stagger = 0.5; // Adjust this value to control the delay between paragraphs.

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when the component comes into view.
    threshold: 0.2, // Adjust this threshold as needed.
    rootMargin: '0px 0px -200px 0px', // Adjust the rootMargin as needed.
  });

  return (
    <div
      className="container"
      style={{
        opacity: inView ? 1 : 0,
        transition: 'opacity 1.5s',
      }}
      ref={ref}
    >
      <div className="desccomponent">
        <h1 style={{ opacity: 1, transform: 'translateY(0)' }}>
          CROSS COUNTRY? WE HEAR YOU!
        </h1>
        <p style={{ opacity: 1, transform: 'translateY(0)', transitionDelay: stagger * 1 + 's' }}>
          Hitting the road for a cross-country adventure or a quick escape from suburbia should be an experience you enjoy.
        </p>
        <p style={{ opacity: 1, transform: 'translateY(0)', transitionDelay: stagger * 2 + 's' }}>
          What you're looking for is a getaway with modern comforts and amenities with your loved ones; a place that feels like home—even if it's on wheels.
        </p>
        <p style={{ opacity: 1, transform: 'translateY(0)', transitionDelay: stagger * 3 + 's' }}>
          At Deluxe Caravans, we help you fall in love with life on the road. With our range of luxury caravans for families, couples, and free-spirited nomads, take on the great outdoors with all the comfort and safety you deserve.
        </p>
      </div>
    </div>
  );
}

export default HomeDescription;
