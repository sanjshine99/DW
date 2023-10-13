import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import instagram from "../../../assets/icons/instagramh.webp";
import facebook from "../../../assets/icons/facebookh.webp";
import twitter from "../../../assets/icons/twitterh.webp";
import tiktok from "../../../assets/icons/tik-tokh.webp";
import youtube from "../../../assets/icons/youtubeh.webp";
import SB196 from "../../../assets/stormbreaker196.webp";
import SB216 from "../../../assets/stormbreaker216.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event) => {
    if (isOpen) {
      toggleMenu();
    }
  };

  const menuItems = [
    {
      label: "Our Range",
      nested: true,
      items: [
        {
          label: <img src={SB196} alt="Placeholder" className="navbar-image" />,
          link: "/stormbreaker19",
        },
        {
          label: <img src={SB216} alt="Placeholder" className="navbar-image" />,
          link: "/stormbreaker21",
        },
      ],
    },
    {
      label: "Resources",
      nested: true,
      items: [
        { label: "About", link: "/about" },
        { label: "Blog", link: "/blog" },
        { label: "Video", link: "/video" },
        { label: "Warranty Policy", link: "/" },
      ],
    },
    {
      label: "Discover",
      nested: true,
      items: [
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
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="dropdown-menu">
      <motion.header>
        <motion.button
          layout
          onClick={toggleMenu}
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="open-button"
        >
          Menu
        </motion.button>
        {isOpen && (
          <>
            <motion.div
              ref={navbarRef}
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.5,
                staggerChildren: 0.1,
              }}
              onClick={handleClick}
            >
              <ul>
                {menuItems.map((item, index) => (
                  <motion.li key={index} layout>
                    <Link to={item.href}>{item.label}</Link>
                    {item.nested && (
                      <motion.ul layout>
                        {item.items.map((nestedItem, nestedIndex) => (
                          <motion.li key={nestedIndex} layout>
                            <Link to={nestedItem.link}>{nestedItem.label}</Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.button
              layout
              onClick={toggleMenu}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="close-button"
            >
              Close
            </motion.button>
          </>
        )}
      </motion.header>
    </div>
  );
};

export default Navbar;
