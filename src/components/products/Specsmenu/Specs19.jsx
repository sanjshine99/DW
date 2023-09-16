import React, { Component } from 'react';
import './Specsmenu.css';

class Specs19 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  toggleAccordion(index) {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  }

  render() {
    const data = [
      {
        title: 'INTERIOR',
        content: `Bed - Queen Island with Lift-Up Storage
           Niche - Bedside - Both Sides
           Bunks - 2 Bunks (Length: Top Bunk - 2.1m, Middle Bunk 2.1m)
           Mattress - Innerspring with Pillow-Top
           L - Shape Lounge - with Drop Down Table with TIC Cushion
           Storage - Drawers
           Windows - Double-Glazed
           Door - Triple Lock with Separate Security Screen
           Drawers - On Rollers
           Floor Vinyl - Durable Modern Design
           Hatch Roof - 700mm x 500mm
           Hatch Roof - 450mm x 400mm
           TV - Bracket
           Hinges - Piano
           Pantry - Half (Slide-Out)
           Frame – Meranti/ CNC`,
      },
        {
          title: 'SPLASHBACK, BENCHTOP, CUPBOARD DOORS AND UPHOLSTERY',
          content: `Bench Top - Premium Laminate 
          Bench Top Lid - Over Stove
          Splashback Kitchen - Full Height
          Cupboard Doors - Premium Laminate ( Scratch & UV Resistant ) 
          Cupboard Doors - Premium Laminate ( Scratch & UV Resistant ) `,
      },
        {
          title: 'ELECTRICAL - INTERNAL',
          content: `BM PRO BATTERYPLUS35-II-HA ( Lithium Ready Charger )
          TREK Display 
          Lighting - LED Down lights 
          TV - Co-Ax Point  
          TV - Aerial Point
          Speakers - 2 x Internal
          USB Ports - 1 x in Each Bunk (2), 2 x Bedside & 1 x Lounge 
          Reading Lights
          Sirocco Fan – Main bed    `,
      },
        {
            title: 'ELECTRICAL - EXTERNAL',
            content: ` 2 x LED Annexe Lights
            1 x LED Annexe Light over Tunnel Boot
            LED Tunnel Boot Light
            Blue LED Door Handle Light
            Blue LED Light Bar ( Front & Back)
            12-Pin Car Plug
            12V Weatherproof Cig Socket
            240V Weatherproof Outlet
            2 x 170-Watt Solar Panels
            3 x water Tank Level Probes
            Reverse Camera & Display
            An Antenna
            2 x 100 Amp Deep Cycle Batteries
            Side Markers with Reflector  `,
         },
          {
            title: 'APPLIANCES',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.',
          },
          {
            title: 'PLUMBING',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.',
          },
          {
            title: 'EXTERIOR',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.',
          },
          {
            title: 'PROTECTION',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.',
          },
          {
            title: 'CHASSIS',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.',
          },
          {
            title: 'OVERALL',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.',
          },
          {
            title: 'SUSPENSION',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.',
          },
      ];
      

      return (
        <div className="specs_container">
          <div className="accordion">
            <dl>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <dt>
                    <button
                      className={
                        'accordionTitle' +
                        (this.state.activeIndex === index
                          ? ' accordionTitleActive'
                          : '')
                      }
                      onClick={() => this.toggleAccordion(index)}
                    >
                      {item.title}
                    </button>
                  </dt>
                  <dd
                    className={
                      'accordionItem' +
                      (this.state.activeIndex === index
                        ? ' animateIn'
                        : ' accordionItemCollapsed animateOut')
                    }
                  >
                    <ul className='list'>
                      {item.content.split('\n').map((listItem, subIndex) => (
                        <li key={subIndex}>{listItem.trim()}</li>
                      ))}
                    </ul>
                  </dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        </div>
      );
    }
  }
  
  export default Specs19;