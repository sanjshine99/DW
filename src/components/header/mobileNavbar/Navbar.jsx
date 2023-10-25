import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import instagram from "../../../assets/icons/instagramh.webp";
import facebook from "../../../assets/icons/facebookh.webp";
import twitter from "../../../assets/icons/twitterh.webp";
import tiktok from "../../../assets/icons/tik-tokh.webp";
import youtube from "../../../assets/icons/youtubeh.webp";
import logo from "../../../assets/Logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [socialMediaOpen, setSocialMediaOpen] = useState(false);
  const [ourRangeOpen, setOurRangeOpen] = useState(false);
  const [resoucesOpen, setResoucesOpen] = useState(false);
  const navbarRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSocialMedia = () => {
    setSocialMediaOpen(!socialMediaOpen);
  };

  const toggleOurRange = () => {
    setOurRangeOpen(!ourRangeOpen);
  };
  const toggleResouces = () => {
    setResoucesOpen(!resoucesOpen);
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
                <p className="social" onClick={toggleOurRange}>
                  OUR RANGE
                </p>
                {ourRangeOpen && (
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
                )}
              </li>
              <li className="nav-item">
                <p className="social" onClick={toggleResouces}>
                  RESOURCES
                </p>
                {resoucesOpen && (
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
                )}
              </li>
              <li className="nav-item">
                <p className="social" onClick={toggleSocialMedia}>
                  SOCIAL MEDIA
                </p>
                {socialMediaOpen && (
                  <ul className="social-media-list">
                    <li>
                      <a
                        href="https://www.instagram.com/deluxecaravansaustralia/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={instagram} alt="Instagram" />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/deluxecaravansaustralia"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={facebook} alt="Facebook" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/CaravansDeluxe"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={twitter} alt="Twitter" />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@deluxecaravansaustralia"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={tiktok} alt="TikTok" />
                        TikTok
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=a_KE1CVPT48"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={youtube} alt="YouTube" />
                        YouTube
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item" onClick={toggleMenu}>
                <Link to="/tour" className="nav-link">
                  VIRTUAL TOUR
                </Link>
              </li>
              <li className="nav-item" onClick={toggleMenu}>
                <Link to="/contact" className="nav-link">
                  CONTACT
                </Link>
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
