import React, { useState } from "react";
import "./PopUp.css";

const WarrantyPolicyPopup = ({ onClose }) => {
  const MAILCHIMP_FORM_ACTION_URL = process.env.REACT_APP_MAILCHIMP_URL;
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false); // Track email validity

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
        console.log("Form submitted successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    // Check if the input is a valid email using a simple regex pattern
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      emailValue
    );
    setIsEmailValid(isValid);
  };

  const alertElement = document.querySelector(".alert");
  const download = document.querySelector(".download");
  const requiredEmail = document.querySelector(".required-email");
  const field = document.querySelector(".field");

  const handleDownload = () => {
    alertElement.classList.add("show");
    download.style.display = "none";
    requiredEmail.style.display = "none";
    field.style.display = "none";
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h1>Download Our Brochure and Upgrade List</h1>
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
                Please enter your email here!
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required-email"
                id="mce-EMAIL"
                required=""
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="download" onClick={handleDownload}>
              <input
                type="submit"
                value="Download"
                name="subscribe"
                id="mc-embedded-subscribe"
                className={`button ${isEmailValid ? "" : "disabled"}`} // Add the "disabled" class when email is not valid
                disabled={!isEmailValid} // Disable the button when the email is not valid
              />
            </div>
            <div class="alert">
              A team member will email the upgrade list shortly.
            </div>
          </div>
        </form>
        <button className="closeButton" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default WarrantyPolicyPopup;
