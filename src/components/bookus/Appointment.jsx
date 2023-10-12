import React from 'react';
import { InlineWidget } from "react-calendly";
import './Appointment.css';
function Appointment() {
  return (
    <div className="calendly_container">
    <div className="calendly_component">
    <h1 className='title'>Schedule a visit with us</h1>
    <div className="calendly__form">
          <div className="calendly-inline-widget">
            <InlineWidget
              url="https://calendly.com/deluxecaravans/inspection?primary_color=8b8b8b"
              styles={{ height: "70vh", width: "100vw", paddingTop: "auto" }}
            />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Appointment