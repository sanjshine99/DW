import React from "react";
import "../home/Home.css";
import "../home/homecomponents/HomeComponent.css";
import "./About.css";

import AUSTRALIANMADE from '../../assets/ourval/ausmade.webp';
import TEAMWORK from '../../assets/ourval/teamwork.webp';
import QUALITYINNOVATION from '../../assets/ourval/badge.webp';
import TOPNOTCHSUPPORT from '../../assets/ourval/technical-support.webp';
import COMMUNITY from '../../assets/ourval/community.webp';
import ECOFRIENDLYOPTIONS from '../../assets/ourval/ecology.webp';

function About() {
  return (
    <div className="container">
      <div className="component">
        <div className="context">
          <h1>About Us</h1>
          <p className="subheader">
            Discover why we do what we do & why we love it!
          </p>
          <p>
            At Deluxe Caravans, our story starts with an all-consuming passion
            for life on the road. For over 10 years, we’ve helped families enjoy
            the beauty of Australia while creating the joy and kinship you can
            only forge on long road trips together. Our dedication to this stems
            from our wonderful experiences exploring the outback or roasting
            s’mores around a cozy campfire. Being avid travelers to the remotest
            parts of the country and an active part of the caravan industry, we
            know what it takes to create top-of-the-line, bespoke caravans that
            meet your every expectation.
          </p>
        </div>
      </div>
      <div className="component">
        <div className="context">
          <h2>A bit about our caravans</h2>
          <p>
            We understand the importance of building caravans that last
            generations and can be passed on to the next generation of
            caravanning Nomads. From OFF-ROAD to Extreme OFF-GRID capabilities
            that will help you reach destinations unknown. We equip our caravans
            with the latest technology so you don’t miss a beat when traveling.
            Our vast experience in manufacturing through times of change has
            allowed us to adapt and create the ultimate OFF-ROAD caravans
            Australia has to offer. Our Eco-Friendly, Bespoke options give us
            the edge in the competitive market.
          </p>
        </div>
      </div>
      <div className="component">
      <h1>Our Values</h1>
        <div className="ourval"> 
        <div className="image-item">
          <img src={AUSTRALIANMADE} alt="Bespokemodels" className='galleryoverlayimage' height="100px" width="100px" />
            <h3>AUSTRALIAN MADE</h3>
            <p>Everything from the design process to the build of each deluxe caravan is done right here at home.</p>
          </div>
          <div className="image-item">
            <img src={TEAMWORK} alt="Ecofriendly" className='galleryoverlayimage' height="100px" width="100px"/>
            <h3>TEAMWORK</h3>
            <p>Our customers mean the world to us; that’s why we go out of our way to provide the care they deserve.</p>

          </div>
          <div className="image-item">
            <img src={QUALITYINNOVATION} alt="Experience" className='galleryoverlayimage' height="100px" width="100px"/>
            <h3>QUALITY & INNOVATION</h3>
            <p>We don’t believe in cutting corners. Our work is driven by the utmost precision, innovation and quality.</p>

          </div>
          <div className="image-item">
            <img src={TOPNOTCHSUPPORT} alt="Ratings" className='galleryoverlayimage' height="100px" width="100px"/>
            <h3>TOP NOTCH SUPPORT</h3>
            <p>Our team is at the heart of our success. That’s why we give them the support they need to flourish.</p>

          </div>
          <div className="image-item">
            <img src={COMMUNITY} alt="Ratings" className='galleryoverlayimage' height="100px" width="100px"/>
            <h3>COMMUNITY</h3>
            <p>We’re big believers in our local community. At Deluxe Caravans, we support businesses in our area.</p>

          </div>
          <div className="image-item">
            <img src={ECOFRIENDLYOPTIONS} alt="Ratings" className='galleryoverlayimage' height="100px" width="100px"/>
            <h3>ECO FRIENDLY OPTIONS</h3>
            <p>From faux leather to composting toilets, we ensure your carbon footprint on the road is at a minimum.</p>

          </div>
        </div>
        </div>
      </div>
    
  );
}

export default About;
