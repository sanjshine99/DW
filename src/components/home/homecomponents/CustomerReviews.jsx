import React, { useRef, useState, useEffect } from 'react';
import "./HomeComponent.css"; 
import { gsap } from 'gsap';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      rating: "★★★★★",
      quote: "Just love our Deluxe  Stormbreaker 19.6, tows beautifully behind our Dodge Ram.We have just taken it on our long weekend away with our kids. Nothing went wrong, was very comfortable felt like home. Couldn’t of got a better can 😁 very happy family 😁",
      author: "Jackie Dodd"
    },
    {
      rating: "★★★★★",
      quote: "We built our Deluxe Stormbreaker off road van with Deluxe. It's extremely hard to put into words just how good these Caravans are. I'm a mechanical engineer with extreme OCD - this van ticks all my boxes. Style, value for money, strength, practical, attention to detail. Most importantly for me the customer service.... Lakshan and Ayali kept in contact weekly woth updates through the build with written updates and photos. Deluxe are not a cheap, bulk builder. If you want your boutique forever van this is your team to see. Happy to give 1 on 1 feedback to anyone please leave a message with email here and I'll talk through the seamless process.",
      author: "Nathon Burton"
    },
    {
      rating: "★★★★★",
      quote: "What can I say.   We cannot be happier.  This is our 3rd van now and by far the best yet.  The build quality and finishes.  Ayali and the guys have made the entire experience an absolute dream.  From the day we first spoke with Ayali till the day of delivery we had been updated with photos of the build (never happened with any other manufacturers) time frames and any other information we needed.  I cannot speak more highly of the team at Deluxe.   Thank you guys.",
      author: "Steve VDZ"
    },
    {
      rating: "★★★★★",
      quote: "Wow! We couldn't be happier with the entire process with Ayali and the team at Deluxe. We love our new Stormbreaker! The craftsmanship, quality and inclusions is just amazing. I loved that we got progress photo updates without asking as well. Amazing work guys!",
      author: "Nicole Meehan"
    },
    {
      rating: "★★★★★",
      quote: "We went with the StormBreaker 19’6 Double Bunk. We worked with the team at Deluxe to build our van and we are so glad we found them! The whole process was effortless. Nothing is too hard for the team at Deluxe Caravans and the service they offer is second to none. From build progress photos all the way throughout the build, endless options for additional upgrades and the quality is exemplary! When the time comes for our next caravan build there will be only one stop for us straight to Deluxe! Deluxe service! Deluxe Quality! Deluxe People! Thanks Lachlan any the team for our amazing caravan. Rhys, Tori, Lincoln and Florence aka @_thesydneyswans_ (Insta)",
      author: "Rhys Swan"
    }
  ];

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
    <div className="testimonials-container revealUp">
      <h2>Hear Our Client Stories</h2>
      <Splide
        options={{
          type: 'slide',
          rewind: true,
          perPage: 1,
          perMove: 1,
          gap: '1rem',
          autoplay: true,
          interval: 5000,
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <SplideSlide key={index}>
            <div className="slide__item">
              <p className="slide__heading">{testimonial.rating}</p>
              <blockquote>
                <p className="slide__quote">{testimonial.quote}</p>
                <cite className="slide__cite">- {testimonial.author}</cite>
              </blockquote>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
    </div></div>
  );
}

export default Testimonials;