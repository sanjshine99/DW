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
  const [showStormbreaker, setShowStormbreaker] = useState(false);
  const [showRiptide, setShowRiptide] = useState(false);
  const [resourcesIconRotation, setResourcesIconRotation] =
    useState("rotate(0deg)");
  const [ourRangeCouplesIconRotation, setOurRangeCouplesIconRotation] =
    useState("rotate(0deg)");
  const [ourRangeIconRotation, setOurRangeIconRotation] =
    useState("rotate(0deg)");
  const [stormbreakerIconRotation, setStormbreakerIconRotation] =
    useState("rotate(0deg)");
  const [riptideIconRotation, setRiptideIconRotation] =
    useState("rotate(0deg)");

  const showResources = () => {
    setResourcesVisible(true);
    setResourcesIconRotation("rotate(90deg)");
    setOurRangeIconRotation("rotate(0deg)");
    setOurRangeCouplesIconRotation("rotate(0deg)");
    setStormbreakerIconRotation("rotate(0deg)");
    setRiptideIconRotation("rotate(0deg)");
  };

  const hideResources = () => {
    setResourcesVisible(false);
    setResourcesIconRotation("rotate(0deg)");
  };

  const showOurRange = () => {
    setOurRangeVisible(true);
    setOurRangeIconRotation("rotate(90deg)");
    setResourcesIconRotation("rotate(0deg)");
    setOurRangeCouplesIconRotation("rotate(0deg)");
    setStormbreakerIconRotation("rotate(0deg)");
    setRiptideIconRotation("rotate(0deg)");
  };

  const hideOurRange = () => {
    setOurRangeVisible(false);
    setOurRangeIconRotation("rotate(0deg)");
  };

  const showOurRangeCouples = () => {
    setOurRangeCouplesVisible(true);
    setOurRangeCouplesIconRotation("rotate(90deg)");
    setOurRangeIconRotation("rotate(0deg)");
    setResourcesIconRotation("rotate(0deg)");
    setStormbreakerIconRotation("rotate(0deg)");
    setRiptideIconRotation("rotate(0deg)");
  };

  const hideOurRangeCouples = () => {
    setOurRangeCouplesVisible(false);
    setOurRangeCouplesIconRotation("rotate(0deg)");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleStormbreaker = () => {
    setShowStormbreaker(!showStormbreaker);
    setShowRiptide(false);
    setStormbreakerIconRotation(
      showStormbreaker ? "rotate(0deg)" : "rotate(90deg)"
    );
    setRiptideIconRotation("rotate(0deg)");
  };

  const toggleRiptide = () => {
    setShowRiptide(!showRiptide);
    setShowStormbreaker(false);
    setRiptideIconRotation(showRiptide ? "rotate(0deg)" : "rotate(90deg)");
    setStormbreakerIconRotation("rotate(0deg)");
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
                        style={{ transform: ourRangeIconRotation }}
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
                              <li className="nav-item stormbreaker">
                                <p
                                  className="social"
                                  onClick={toggleStormbreaker}
                                >
                                  STORMBREAKER{" "}
                                  <img
                                    src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                    alt=""
                                    className="greatericon"
                                    style={{
                                      transform: stormbreakerIconRotation,
                                    }}
                                  />
                                </p>
                                <AnimatePresence>
                                  {showStormbreaker && (
                                    <motion.div
                                      className="submenu stombreaker"
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: 20 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <ul className="submenu-list stormbreaker">
                                        <li>
                                          <a
                                            href="/stormbreaker18"
                                            style={{
                                              fontSize: "18px",
                                            }}
                                          >
                                            STORMBREAKER 18`6
                                          </a>
                                          <p
                                            style={{
                                              color: "black",
                                              fontSize: "15px",
                                            }}
                                          >
                                            ( FULL OFF-ROAD: $89,900 )
                                          </p>
                                        </li>
                                        <li>
                                          <a
                                            href="/stormbreaker19"
                                            style={{
                                              fontSize: "18px",
                                            }}
                                          >
                                            STORMBREAKER 19`6
                                          </a>
                                          <p
                                            style={{
                                              color: "black",
                                              fontSize: "15px",
                                            }}
                                          >
                                            ( FULL OFF-ROAD: $92,900 )
                                          </p>
                                        </li>
                                        <li>
                                          <a
                                            href="/stormbreaker21"
                                            style={{
                                              fontSize: "18px",
                                            }}
                                          >
                                            STORMBREAKER 21`6
                                          </a>
                                          <p
                                            style={{
                                              color: "black",
                                              fontSize: "15px",
                                            }}
                                          >
                                            ( FULL OFF-ROAD: $94,900 )
                                          </p>
                                        </li>
                                        <li>
                                          <a
                                            href="/stormbreaker23"
                                            style={{
                                              fontSize: "18px",
                                            }}
                                          >
                                            STORMBREAKER 23`11
                                          </a>
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
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </li>
                              <li className="nav-item riptide">
                                <p className="social" onClick={toggleRiptide}>
                                  RIPTIDE{" "}
                                  <img
                                    src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                                    alt=""
                                    className="greatericon"
                                    style={{ transform: riptideIconRotation }}
                                  />
                                </p>
                                <AnimatePresence>
                                  {showRiptide && (
                                    <motion.div
                                      className="submenu"
                                      initial={{
                                        opacity: 0,
                                        y: showStormbreaker ? 350 : -20,
                                      }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{
                                        opacity: 0,
                                        y: showStormbreaker ? 350 : -20,
                                      }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <ul className="submenu-list riptide">
                                        <li>
                                          <a
                                            href="/riptide22"
                                            style={{ fontSize: "18px" }}
                                          >
                                            Riptide 22
                                          </a>
                                          <p
                                            style={{
                                              color: "black",
                                              fontSize: "15px",
                                            }}
                                          >
                                            ( FULL OFF-ROAD: $98,900 )
                                          </p>
                                        </li>
                                      </ul>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
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
                        style={{ transform: ourRangeCouplesIconRotation }}
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
                        style={{ transform: resourcesIconRotation }}
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
