import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Your local CSS
import instagram from "../../assets/icons/instagram.webp";
import facebook from "../../assets/icons/facebook.webp";
import twitter from "../../assets/icons/twitter.webp";
import tiktok from "../../assets/icons/tik-tok.webp";
import youtube from "../../assets/icons/youtube.webp";
import logo from "../../assets/Logo.webp";


const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Icons Section */}

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="logo">
          <Link to="/" className="footer-link">
            <img
              src={logo}
              alt="Logo"
              className="footer-logo"
              height="100px"
              width="120px"
            />
          </Link>
        </div>
        <div className="footer-links-column">
          <div className="footer-links-header">Caravans</div>
          <Link to="/stormbreaker18" className="footer-link">
            Stormbreaker 18`6
          </Link>
          <Link to="/stormbreaker19" className="footer-link">
            Stormbreaker 19`6
          </Link>
          <Link to="/stormbreaker21" className="footer-link">
            Stormbreaker 21`6
          </Link>
        </div>
        <div className="footer-links-column">
          <div className="footer-links-header">Resources</div>
          <Link to="/about" className="footer-link">
            About us
          </Link>
          <Link to="/blog" className="footer-link">
            UPDATES
          </Link>
          <Link to="/video" className="footer-link">
            Videos
          </Link>
          <Link to="/tour" className="footer-link">
            Virtual tour
          </Link>
          <Link to="/warranty" className="footer-link">
            Warranty policy
          </Link>
        </div>
        <div className="footer-links-column">
          <div className="footer-links-header">Contact</div>
          <a
            href="https://maps.app.goo.gl/kv9EtFoKUDLt5m8P7"
            className="footer-link"
          >
            32 Scammel Street, Campbellfield, VIC 3061
          </a>
          <a href="tel:+61450060938" className="footer-link">
            +61 450 060 938
          </a>
          <a href="mailto:hello@infiniterv.com.au" className="footer-link">
            hello@infiniterv.com.au
          </a>
        </div>
      </div>

      <hr className="footer-hr" />

      {/* Copyright and Social Icons Section */}
      <div className="copyright-and-social">
        <div className="copyright">
          © {new Date().getFullYear()} Copyright: Deluxe Caravans
        </div>
        <div className="social-icons">
          <div className="social-links">
            <a
              href="https://www.instagram.com/deluxecaravansaustralia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="icon" />
            </a>
            <a
              href="https://www.facebook.com/deluxecaravansaustralia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" className="icon" />
            </a>
            <a
              href="https://twitter.com/CaravansDeluxe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="icon" />
            </a>
            <a
              href="https://www.tiktok.com/@deluxecaravansaustralia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok} alt="TikTok" className="icon" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=a_KE1CVPT48"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="YouTube" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
