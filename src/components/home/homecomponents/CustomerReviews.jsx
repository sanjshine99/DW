import React, { useEffect } from "react";
import "./HomeComponent.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Testimonials = () => {
  useEffect(() => {
    const setSplideHeight = () => {
      const splideTrack = document.querySelector('.splide__track');
      if (splideTrack) {
        const currentSlide = splideTrack.querySelector('.splide__slide.is-active');
        if (currentSlide) {
          const slideHeight = currentSlide.clientHeight;
          const splide = document.querySelector('.splide');
          if (splide) {
            splide.style.height = `${slideHeight}px`;
          }
        }
      }
    };

    setSplideHeight();
    const handleResize = () => setSplideHeight();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const testimonialsData = [
    {
      rating: "★★★★★",
      quote: `We absolutely love our Deluxe Caravan!
      We ordered our van blind as we live in QLD and couldn’t make the trip to VIC, Lakshan FaceTimed us and did a walk through and answered any questions we had before ordering. We enjoyed regular updates and progress photos via email weekly of our van build. We made the trip to VIC to pick up our van and the quality has absolutely exceeded our expectations! As we are about to travel Australia indefinitely we wanted a good quality off road caravan that was custom to our needs, we viewed many brands at multiple expos and decided on Deluxe Caravans who has outdone themselves. Their customer support is second to none! We are so excited to have our new van and can’t wait for the adventures we will have in it.
      We would recommend Deluxe Caravans to anyone!
      If you would like to check out our caravan, our travel page it is Rippin Around Oz.`,
      author: "Darci Dixon (Darci Dixon mua)",
      glink:'https://g.co/kgs/Z79Ymnf'
    },
    {
      rating: "★★★★★",
      quote: `We love our new Deluxe Caravan. Well built and the finish to the van is spot on. Lakshan is great to deal with and is happy to make changes and upgrades to the van without any drama. value for money and quality without paying for the name. A++++++`,
      author: "Brett Miller",
      glink:'https://g.co/kgs/vPrPHNC'
    },
    {
      rating: "★★★★★",
      quote: `We placed our order early sept and received it early dec. In that time we changed our build in excess of 6-8 times! Nothing was ever a problem with our last changes being done as framing was starting. It’s a testament to the team that with all of these changes they didn’t get a single thing wrong in the entire build. They accommodated our every request whether it was run of the mill or something a bit different. The build quality is second to none. Lachlan allowed us our own time to go right over the build when we arrived and supplied in progress photos as the build was happening. There wasn’t a thing out of place. After having the van and taking it out we couldn’t be happier with our choice to use Deluxe to build our van.
      The only change we would possibly make if we were to go again is to upgrade the chassis to 4t rated. With quality comes weight. While we aren’t overweight and have a couple hundred kilos wriggle room if you were planning to live in or do a lot of big trips it would give you extra piece of mind. But 10/10 recommend. These guys aren’t on the “top rated” by a lot of people but it’s purely because they are still getting exposure. The van is just as good or better than some of the topped priced vans in the country. I must mention too the best change we made was upgrading to a king bed! It’s not something you see offered often and it makes the van amazingly comfortable and just like being at home!`,
      author: "Karney Chester",
      glink:'https://g.co/kgs/1hf1gwY'
    },
    {
      rating: "★★★★★",
      quote: `Great caravans, beautifully finished at a great price. Service was exceptional. Very happy.`,
      author: "Anthony R Perkins",
      glink:'https://g.co/kgs/qX14t9t'
    },
    {
      rating: "★★★★★",
      quote: `From the first contact Lachlan and Deluxe had perfect customer service. 
      They were really knowledgeable about their product, the caravan industry and what would be the best fit for us. 
      Since we have received handover for our 19’6 storm breaker it has travelled amazingly with us as we travel full time and we have had great support for any questions we had! Highly recommend!`,
      author: "Nikki Briton",
      glink:'https://g.co/kgs/XVVasy'
    },
    {
      rating: "★★★★★",
      quote: `We went with the StormBreaker 19’6 Double Bunk. We worked with the team at Deluxe to build our van and we are so glad we found them! The whole process was effortless. Nothing is too hard for the team at Deluxe Caravans and the service they offer is second to none. From build progress photos all the way throughout the build, endless options for additional upgrades and the quality is exemplary! When the time comes for our next caravan build there will be only one stop for us straight to Deluxe!
      Deluxe service! Deluxe Quality! Deluxe People! Thanks Lachlan any the team for our amazing caravan. Rhys, Tori, Lincoln and Florence aka @_thesydneyswans_ (Insta)`,
      author: "Rhys Swan",
      glink:'https://g.co/kgs/2aP1Rr'
    },
    {
      rating: "★★★★★",
      quote: `Absolutely love our Deluxe Caravan! We went with the 21'6 Storm Breaker and we're so happy with it. 
      Such great craftsmanship and the service from Lachlan and the team has been amazing. Highly recommended 😁🙌🏼`,
      author: "Luke Morris",
      glink:'https://g.co/kgs/ej6jUy'
    },
    {
      rating: "★★★★★",
      quote: `After owning a Deluxe Caravan for 2.5 years that never skipped a beat we decided to upgrade to their Stormbreaker Double Bunk design halfway into our lap of Australia. 
      We made multiple custom requests and nothing was too much for the team! We created a 23’ version of the Stormbreaker which is completely gasless ‘Off-Grid’ & FULL 'Off-Road', 
      with an aluminium frame, honeycomb floor & flat floor chassis to name only a few of the features. 
      Lakshan & Ayali were in regular contact during the build with updates and photos! The van is 5 star in quality, workmanship and finishes whilst being amazing value for money. 
      We are more than excited to give our Teko Tuff Ride Airbag Suspension & Victron Solar System a workout as we continue our lap. 
      We cannot thank the team at Deluxe enough for making it a stress free experience and delivering our van on time. 
      Definitely recommend, please do not hesitate to ask us any questions.
      Many Thanks for our beautiful home on wheels :)
      Owen, Jacqui, Tynan & Mahli`,
      author: "Jacqui Plum",
      glink:'https://g.co/kgs/dMLM9b'
    },
    {
      rating: "★★★★★",
      quote: `Very happy with our new 21 stormbreaker. 
      Communication and customer service has been great.
      The workmanship on the caravan is of high standard and it's very comfortable with plenty of storage space for us to live in as a family travelling full time. 
      HIGHLY RECOMMENDED`,
      author: "Kerryn North",
      glink:'https://g.co/kgs/p3tkyf'
    },
    {
      rating: "★★★★★",
      quote: `We built our Deluxe Stormbreaker off road van with Deluxe. It's extremely hard to put into words just how good these Caravans are. I'm a mechanical engineer with extreme OCD - this van ticks all my boxes. Style, value for money, strength, practical, attention to detail. Most importantly for me the customer service.... Lakshan and Ayali kept in contact weekly woth updates through the build with written updates and photos. Deluxe are not a cheap, bulk builder. If you want your boutique forever van this is your team to see. Happy to give 1 on 1 feedback to anyone please leave a message with email here and I'll talk through the seamless process.`,
      author: "Nathon Burton",
      glink:'https://g.co/kgs/THjp5q'
    },
    {
      rating: "★★★★★",
      quote: `Wow! We couldn't be happier with the entire process with Ayali and the team at Deluxe. 
      We love our new Stormbreaker! The craftsmanship, quality and inclusions is just amazing. I loved that we got progress photo updates without asking as well. 
      Amazing work guys!
      `,
      author: "Nicole Meehan",
      glink:'https://g.co/kgs/ryq8yn'
    },
    {
      rating: "★★★★★",
      quote: `What can I say.   We cannot be happier.  This is our 3rd van now and by far the best yet.  
      The build quality and finishes.  Ayali and the guys have made the entire experience an absolute dream.  From the day we first spoke with Ayali till the day of delivery we had been updated with photos of the build (never happened with any other manufacturers) time frames and any other information we needed.  I cannot speak more highly of the team at Deluxe.   Thank you guys.`,
      author: "Steve VDZ",
      glink:'https://g.co/kgs/8HNy2a'
    } ,
    {
      rating: "★★★★★",
      quote: `Just love our Deluxe  Stormbreaker 19.6, tows beautifully behind our Dodge Ram.
      We have just taken it on our long weekend away with our kids. Nothing went wrong, was very comfortable felt like home. Couldn’t of got a better can 😁 very happy family 😁`,
      author: "Jackie dodd",
      glink:'https://g.co/kgs/RRcXth'
    } ,
    {
      rating: "★★★★★",
      quote: `What an amazing experience this has been. 
      Delux have been so helpful throughout and answered all my questions. 
       We are off for our first Xmas trip and will definitely update with journey. Thanks Lakshan and crew.`,
      author: "Mel Mclellan",
      glink:'https://g.co/kgs/ErtdJi'
    }
    
  ];

  return (
    <div >
      <div className='reviewhead'>
      <h2>
        <span style={{ color: '#4285F4' }}>G</span>
        <span style={{ color: '#EA4335' }}>o</span>
        <span style={{ color: '#FBBC05' }}>o</span>
        <span style={{ color: '#4285F4' }}>g</span>
        <span style={{ color: '#34A853' }}>l</span>
        <span style={{ color: '#EA4335' }}>e</span>
        &nbsp;Rating
      </h2>
      <p style={{ color: '#ffffff' }}>5.0 <span className='revstar' role="img" aria-label="star">★★★★★</span></p>
    </div>
      <div className="reviewdesc">
        <Splide
          options={{
            type: 'slide',
            rewind: true,
            perPage: 1,
            perMove: 1,
            autoplay: true,
            interval: 5000,
            width:'100vw',
            height:'auto',
            pagination:false,
            lazyLoad:true,
            arrows:false,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
          <SplideSlide key={index}>
          <div className="slide__item">
            <p className="slide__heading">{testimonial.rating}</p>
            <blockquote className="slide__quote"><a href={testimonial.glink} target="_blank">
              {testimonial.quote.split('\n').map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</a>
            </blockquote>
            <cite className="slide__cite">- {testimonial.author}</cite>
          </div>
        </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default React.memo(Testimonials);