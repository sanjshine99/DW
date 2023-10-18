import React, { useState } from "react";
import "./PopUp.css";
import Layout from "../../../assets/pdfs/Layout.pdf";

const LayoutPopUp = ({ onClose }) => {
  const MAILCHIMP_FORM_ACTION_URL = process.env.REACT_APP_MAILCHIMP_URL;
  const [email, setEmail] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(MAILCHIMP_FORM_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(new FormData(e.target)),
      });

      if (response.ok) {
        const link = document.createElement("a");
        link.href = Layout;
        link.download = "Layout.pdf";
        link.click();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Layout;
    link.download = "Warranty.pdf";
    link.click();
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h1>Download the Warranty Policy</h1>
        <form
          onSubmit={handleFormSubmit}
          action={MAILCHIMP_FORM_ACTION_URL}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL" className="field">
                Email Address
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required=""
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {/* Rest of your form fields */}
            <div className="download" onClick={handleDownload}>
              <input
                type="submit"
                value="Download"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
        <button className="closeButton" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LayoutPopUp;
