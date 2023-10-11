import React, { useEffect, useState } from "react";
import "./Contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InlineWidget } from "react-calendly";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    gsap.utils.toArray(".revealUp").forEach((elem) => {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom 40%",
            markers: false, // Set this to true for debug markers
          },
        }
      );
    });

    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 0);

    return () => clearTimeout(animationTimeout);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendEmail = () => {
    const { name, email, message } = formData;
    const subject = "Contact Form Submission";
    const mailtoLink = `mailto:xyz@xyz?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact__container revealUp">
      <h1 className={animate ? "lineUp" : ""}>Contact us</h1>
      <div className="contact-container">
       
        <form className="contact__form">
          <div className="input__group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input__group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input__group input__group--message">
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="button" className="send" onClick={handleSendEmail}>
            Send
          </button>
        </form>
        <div className="calendly__form">
          <div className="calendly-inline-widget">
            <InlineWidget
              url="https://calendly.com/deluxecaravans/inspection?primary_color=8b8b8b"
              styles={{ height: "300px", width: "500px", paddingTop: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
