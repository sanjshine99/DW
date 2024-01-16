import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef();

  const [ourRangeVisible, setOurRangeVisible] = useState(false);
  const [ourRangeCouplesVisible, setOurRangeCouplesVisible] = useState(false);
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

  const showOurRangeCouples = () => {
    setOurRangeCouplesVisible(true);
  };

  const hideOurRangeCouples = () => {
    setOurRangeCouplesVisible(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button onClick={toggleMenu} className="open-button">
        Menu
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="navbar"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.4 }}
            >
              <div ref={navbarRef}>
                <ul className="navbar-nav">
                  <li className="nav-item" onClick={toggleMenu}>
                    <Link to="/" className="nav-link">
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/Logo.webp"
                        alt=""
                        height={50}
                      />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <p className="social" onClick={showOurRange}>
                      FAMILY{" "}
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                        alt=""
                        className="greatericon"
                      />
                    </p>
                    <AnimatePresence>
                      {ourRangeVisible && (
                        <motion.div
                          className={`social-media-container ${
                            ourRangeVisible ? "show" : ""
                          }`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div
                            className={`social-media-container ${
                              ourRangeVisible ? "show" : ""
                            }`}
                          >
                            <button
                              onClick={hideOurRange}
                              className="back-button"
                            >
                              <img
                                src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                                alt=""
                                className="lessericon"
                              />{" "}
                              Back
                            </button>
                            <ul className="range-list">
                              <li
                                style={{
                                  marginBottom: "0px",
                                  marginTop: "50px",
                                }}
                              >
                                <a href="/stormbreaker18">STORMBREAKER 18`6</a>
                                <p
                                  style={{
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                >
                                  ( FULL OFF-ROAD: $89,900 )
                                </p>
                              </li>
                              <li
                                style={{
                                  marginBottom: "0px",
                                }}
                              >
                                <a href="/stormbreaker19">STORMBREAKER 19`6</a>
                                <p
                                  style={{
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                >
                                  ( FULL OFF-ROAD: $92,900 )
                                </p>
                              </li>
                              <li
                                style={{
                                  marginBottom: "0px",
                                }}
                              >
                                <a href="/stormbreaker21">STORMBREAKER 21`6</a>
                                <p
                                  style={{
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                >
                                  ( FULL OFF-ROAD: $94,900 )
                                </p>
                              </li>
                              <li
                                style={{
                                  marginBottom: "0px",
                                }}
                              >
                                <a href="/stormbreaker23">STORMBREAKER 23`11</a>
                                <p
                                  style={{
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                >
                                  ( FULL OFF-ROAD: $96,900)
                                </p>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  <li className="nav-item">
                    <p className="social" onClick={showOurRangeCouples}>
                      COUPLES{" "}
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                        alt=""
                        className="greatericon"
                      />
                    </p>
                    <AnimatePresence>
                      {ourRangeCouplesVisible && (
                        <motion.div
                          className={`social-media-container ${
                            ourRangeVisible ? "show" : ""
                          }`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div
                            className={`social-media-container ${
                              ourRangeCouplesVisible ? "show" : ""
                            }`}
                          >
                            <button
                              onClick={hideOurRangeCouples}
                              className="back-button"
                            >
                              <img
                                src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                                alt=""
                                className="lessericon"
                              />{" "}
                              Back
                            </button>
                            <ul className="range-list">
                              <li
                                style={{
                                  marginBottom: "0px",
                                }}
                              >
                                <a href="/eclipse21">ECLIPSE - 21`6FT</a>
                                <p
                                  style={{
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                >
                                  ( $92,900 )
                                </p>
                              </li>
                              <li
                                style={{
                                  marginBottom: "0px",
                                }}
                              >
                                <a href="/">ECLIPSE - 22FT</a>
                                <p
                                  style={{
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                >
                                  ( COMING SOON )
                                </p>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  <li className="nav-item">
                    <p className="social" onClick={showResources}>
                      RESOURCES{" "}
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                        alt=""
                        className="greatericon"
                      />
                    </p>
                    <AnimatePresence>
                      {resourcesVisible && (
                        <motion.div
                          className={`social-media-container ${
                            resourcesVisible ? "show" : ""
                          }`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <button
                            onClick={hideResources}
                            className="back-button"
                          >
                            <img
                              src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                              alt=""
                              className="lessericon"
                            />{" "}
                            Back
                          </button>
                          <ul className="resources-list">
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
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
                  <li className="nav-item" onClick={toggleMenu}>
                    <ul className="social-media-list">
                      <li>
                        <a
                          href="https://www.instagram.com/deluxecaravansaustralia/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://deluxcaravan.b-cdn.net/assets/icons/instagramh.webp"
                            alt="Instagram"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/deluxecaravansaustralia"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://deluxcaravan.b-cdn.net/assets/icons/facebookh.webp"
                            alt="Facebook"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/CaravansDeluxe"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://deluxcaravan.b-cdn.net/assets/icons/twitterh.webp"
                            alt="Twitter"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.tiktok.com/@deluxecaravansaustralia"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://deluxcaravan.b-cdn.net/assets/icons/tik-tokh.webp"
                            alt="TikTok"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=a_KE1CVPT48"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://deluxcaravan.b-cdn.net/assets/icons/youtubeh.webp"
                            alt="YouTube"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </motion.div>
            <button onClick={toggleMenu} className="close-button">
              Close
            </button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
