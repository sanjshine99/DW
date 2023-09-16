import React from 'react';
import "./HomeComponent.css"; 
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      rating: "★★★★✰",
      quote: "How lucky we were to have stumbled across the Deluxe brand! We were thrilled to take delivery of our first caravan - a Deluxe Alpha - In late 2020. The entire process from Initial price enquiry to taking delivery of the van was seemless. Our point of contact was readily avallable to answer any questions and also kept in contact with progress photos of the bulld. The Alpha layout is family friendly, the appliances are of great quality and the finishes Inside the van are luxurious. We also love the look of the body of the van, which really turns heads. We could not be happier!.",
      author: "ANGELA AND DAN CARMICHAEL"
    },
    {
      rating: "★★★✰✰",
      quote: "We Love our Deluxe raptor family caravan, roomy modern design features. Comfy roomy bunks, big enough for adults, especially amazing for our growing boys. A washing machine, and out door shower, amazing feature especially after a day at the beach, before retiring to the Indoor ensuite.. road tripping is amazing in our deluxe van!!! Highly recommend",
      author: "TRACI LEANNE"
    },
    {
      rating: "★★★★✰",
      quote: "After a lot of research Into many Australian caravan bullders we decided to go ahead with a 21.6ft triple bunk 'Alpha' from Deluxe Caravans. From start to finish the process was made easy with their great Ideas, communication and regular updates of the bulld Including photos. They helped us customise this van to exactly what we wanted. While The standard Inclusions and colour choices ticked most items off our 'want list' we had other needs met through their optional extras. Such as the external kitchen, extra water tank capacity, extra solar, large compressor fridge, lithium batteries, dust suppression system, 4 bike rack, full off- road Independent suspension, upgraded gvm and more. Purchasing this caravan has been a great decision for our family, we use it regularly and in the near future plan to take it for a extended trip across the country.",
      author: "LUKE & NICOLE"
    },
    {
      rating: "★★★★✰",
      quote: "Set ourselves with a Deluxe Alpha Family Tourer! Fantastic company to deal with from start to finish. We added heaps of extras throughout the build and nothing was a hassle. The warranty claim was also handled exceptionally well. We will definitely be building again with Deluxe Caravans in the future.",
      author: "MICHAEL AND AMY LONG"
    },
    {
      rating: "★★★★✰",
      quote: "We saw our first Deluxe Caravan whilst away in 2019 and was Instantly impressed. We then started looking for a new van, checking out all of the major brands and nothing came close to the quality and value of the Deluxe Van. Every extra that we wanted in a caravan that was an added extra with other suppliers, already came with the Deluxe and for a better price then any other caravan suppliers starting price. We got our Deluxe Alpha 12 months ago and could not be happler. Every caravan park we pull into we always have people wanting to look through and are amazed with the van. If your looking for the best quality and valued van on the market, make sure you check out Deluxe Caravans as that's what we recommend to family and friends.",
      author: "LUCAS & BEC WHITE"
    }
  ];

  return (
    <div className="testimonials-container">
      <h2>Happy Campers' Stories</h2>
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
  );
}

export default Testimonials;