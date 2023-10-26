import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import logo from "../../assets/Logo.webp";
import instagram from "../../assets/icons/instagramh.webp";
import facebook from "../../assets/icons/facebookh.webp";
import twitter from "../../assets/icons/twitterh.webp";
import tiktok from "../../assets/icons/tik-tokh.webp";
import youtube from "../../assets/icons/youtubeh.webp";
import SB186 from "../../assets/stormbreaker186.webp";
import SB196 from "../../assets/stormbreaker196.webp";
import SB216 from "../../assets/stormbreaker216.webp";
import Navbar from "./mobileNavbar/Navbar";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
    setIsMobile(newWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const menuData = [
    {
      label: "OUR RANGE",
      submenu: [
        {
          label: <img src={SB186} alt="stormbreaker18" style={{ maxWidth: "33.33vw", Height: "17vh",maxHeight: "20vh" }} />,
          link: "/stormbreaker18",
          text: "Stormbreaker 18`6",
          price: "FULL OFF-ROAD: $89,900",
        },
        {
          label: <img src={SB196} alt="stormbreaker19"  style={{maxWidth: "33.33vw", Height: "17vh",maxHeight: "20vh"}}/>,
          link: "/stormbreaker19",
          text: "Stormbreaker 19`6",
          price: "FULL OFF-ROAD: $92,900",
        },
        {
          label: <img src={SB216} alt="stormbreaker21"  style={{ maxWidth: "33.33vw", Height: "17vh",maxHeight: "20vh"}}/>,
          link: "/stormbreaker21",
          text: "Stormbreaker 21`6",
          price: "FULL OFF-ROAD: $94,900",
        },
      ],
    },
    {
      label: "RESOURCES",
      submenu: [
        { label: "ABOUT US", link: "/about" },
        { label: "UPDATES", link: "/blog" },
        { label: "VIDEOS", link: "/video" },
        { label: "WARRANTY POLICY", link: "/warranty" },
      ],
    },
    {
      label: "DISCOVER",
      submenu: [
        {
          label: (
            <a
              href="https://www.instagram.com/deluxecaravansaustralia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="iconh" />
            </a>
          ),
          link: "https://www.instagram.com/deluxecaravansaustralia/",
        },
        {
          label: (
            <a
              href="https://www.facebook.com/deluxecaravansaustralia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" className="iconh" />
            </a>
          ),
          link: "https://www.facebook.com/deluxecaravansaustralia",
        },
        {
          label: (
            <a
              href="https://twitter.com/CaravansDeluxe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="iconh" />
            </a>
          ),
          link: "https://twitter.com/CaravansDeluxe",
        },
        {
          label: (
            <a
              href="https://www.tiktok.com/@deluxecaravansaustralia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok} alt="TikTok" className="iconh" />
            </a>
          ),
          link: "https://www.tiktok.com/@deluxecaravansaustralia",
        },
        {
          label: (
            <a
              href="https://www.youtube.com/watch?v=a_KE1CVPT48"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="YouTube" className="iconh" />
            </a>
          ),
          link: "https://www.youtube.com/watch?v=a_KE1CVPT48",
        },
      ],
    },
  ];

  return (
    <div>
      {isMobile ? (
        <>
          {" "}
          <Navbar />
        </>
      ) : (
        <motion.header
          className="header"
          initial={{ backgroundColor: "transparent" }}
          whileHover={{ backgroundColor: "white", color: "black" }}
          animate={
            activeMenu
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "transparent" }
          }
          transition={{ duration: 0.5 }}
        >
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="" height={50} />
            </Link>
          </div>
          <nav className="header-nav">
            <ul className="menu">
              {menuData.map((menu, index) => (
                <motion.li
                  key={index}
                  className={`menu-item ${
                    activeMenu === menu.label ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMenuHover(menu.label)}
                  onMouseLeave={handleMenuLeave}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button>
                    <span>{menu.label}</span>
                  </button>
                  <AnimatePresence>
                    {activeMenu === menu.label && menu.submenu && (
                      <motion.div
                        className="sub-menu"
                        initial={{ opacity: 1, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {menu.submenu.map((subitem, subIndex) => (
                          <Link key={subIndex} to={subitem.link}>
                            <motion.div
                              className="sub-menu-item"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{
                                duration: 0.3,
                                delay: subIndex * 0.1,
                              }}
                            >
                              {subitem.label}
                              <h3>{subitem.text}</h3>
                              <h5>{subitem.price}</h5>
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
                     
                <li className="menu-item">
                <Link to="/tour">
                  <button>VIRTUAL TOUR</button>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact">
                  <button>CONTACT</button>
                </Link>
              </li>
            </ul>
          </nav>
        </motion.header>
      )}
    </div>
  );
};

export default Header;