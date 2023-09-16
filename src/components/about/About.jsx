import React from 'react'
import '../home/Home.css';
import '../home/homecomponents/HomeComponent.css';
import './About.css'

function About() {
  return (
    <div className='container'>
    
      <div className="component">
        <div className='context'>
        <h1>About Us</h1>
        <p class="subheader">Discover why we do what we do & why
            we love it!</p>
            <p>At Deluxe Caravans, our story starts with an all-consuming passion for life on the road. For over 10 years, 
              we’ve helped families enjoy the beauty of Australia while creating the joy and kinship you can only forge on long road 
              trips together. Our dedication to this stems from our wonderful experiences exploring the outback or roasting s’mores around 
              a cozy campfire. Being avid travelers to the remotest parts of the country and an active part of the caravan industry, we 
              know what it takes to create top-of-the-line, bespoke caravans that meet your every expectation.</p>
      </div>
      </div>
      <div className="component">
      <div className='context'> 
       <h2>A bit about our caravans</h2>
       <p>We understand the importance of building caravans that last generations and can be passed on to the next generation of caravanning Nomads. 
        From OFF-ROAD to Extreme OFF-GRID capabilities that will help you reach destinations unknown. We equip our caravans with the latest technology 
        so you don’t miss a beat when traveling. Our vast experience in manufacturing through times of change has allowed us to adapt and create the 
        ultimate OFF-ROAD caravans Australia has to offer. Our Eco-Friendly, Bespoke options give us the edge in the competitive market.</p>
      </div>
       </div>
      <div className="component">
       Our Values
      </div>
    </div>
  )
}

export default About