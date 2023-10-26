import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import instagram from "../../../assets/icons/instagramh.webp";
import facebook from "../../../assets/icons/facebookh.webp";
import twitter from "../../../assets/icons/twitterh.webp";
import tiktok from "../../../assets/icons/tik-tokh.webp";
import youtube from "../../../assets/icons/youtubeh.webp";
import greater from "../../../assets/icons/greater.webp";
import lesser from "../../../assets/icons/lesser.webp";
import logo from "../../../assets/Logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef();

  const [ourRangeVisible, setOurRangeVisible] = useState(false);
  const [resourcesVisible, setResourcesVisible] = useState(false);

  const showResources = () => {
    setResourcesVisible(true);
  };

  const hideResources = () => {
    setResourcesVisible(false);
  };

  const showOurRange = () => {
    setOurRangeVisible(true);
  };

  const hideOurRange = () => {
    setOurRangeVisible(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button onClick={toggleMenu} className="open-button">
        Menu
      </button>
      {isOpen && (
        <>
          <div ref={navbarRef}>
            <ul className="navbar-nav">
              <li className="nav-item" onClick={toggleMenu}>
                <Link to="/" className="nav-link">
                  <img src={logo} alt="" height={50} />
                </Link>
              </li>
              <li className="nav-item">
                <p className="social" onClick={showOurRange}>
                  OUR RANGE <img src={greater} alt="" className="greatericon" />
                </p>
                {ourRangeVisible && (
                  <div
                    className={`social-media-container ${
                      ourRangeVisible ? "show" : ""
                    }`}
                  >
                    <button onClick={hideOurRange} className="back-button">
                      <img src={lesser} alt="" className="lessericon" /> Back
                    </button>
                    <ul className="social-media-list">
                      <li>
                        <a href="/stormbreaker18">STORMBREAKER 18`6</a>
                      </li>
                      <li>
                        <a href="/stormbreaker19">STORMBREAKER 19`6</a>
                      </li>
                      <li>
                        <a href="/stormbreaker21">STORMBREAKER 21`6</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="nav-item">
                <p className="social" onClick={showResources}>
                  RESOURCES <img src={greater} alt="" className="greatericon" />
                </p>
                {resourcesVisible && (
                  <div
                    className={`social-media-container ${
                      resourcesVisible ? "show" : ""
                    }`}
                  >
                    <button onClick={hideResources} className="back-button">
                      <img src={lesser} alt="" className="lessericon" /> Back
                    </button>
                    <ul className="social-media-list">
                      <li>
                        <a href="/about">ABOUT US</a>
                      </li>
                      <li>
                        <a href="/blog">UPDATES</a>
                      </li>
                      <li>
                        <a href="/video">VIDEOS</a>
                      </li>
                      <li>
                        <a href="/warranty">WARRANTY POLICY</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* <li className="nav-item">
                <p className="social" onClick={showSocialMedia}>
                  SOCIAL MEDIA &gt;
                </p>
                {socialMediaVisible && (
                  <div
                    className={`social-media-container ${
                      socialMediaVisible ? "show" : ""
                    }`}
                  >
                    <button onClick={hideSocialMedia} className="back-button">
                       <img src={lesser} alt="" className="icon" /> Back
                    </button>

                    <ul className="social-media-list">
                      <li>
                        <a
                          href="https://www.instagram.com/deluxecaravansaustralia/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={instagram} alt="Instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/deluxecaravansaustralia"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={facebook} alt="Facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/CaravansDeluxe"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={twitter} alt="Twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.tiktok.com/@deluxecaravansaustralia"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={tiktok} alt="TikTok" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=a_KE1CVPT48"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={youtube} alt="YouTube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li> */}
              <li className="nav-item" onClick={toggleMenu}>
                <p className="social">
                  <Link to="/tour" className="nav-link">
                    VIRTUAL TOUR
                  </Link>
                </p>
              </li>
              <li className="nav-item" onClick={toggleMenu}>
                <p className="social">
                  <Link to="/contact" className="nav-link">
                    CONTACT
                  </Link>
                </p>
              </li>
            </ul>
          </div>
          <button onClick={toggleMenu} className="close-button">
            Close
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;
