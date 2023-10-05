import React from 'react';
import './Footer.css';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import tiktok from '../../assets/icons/tik-tok.png';
import youtube from '../../assets/icons/youtube.png';
import logo from '../../assets/Logo.png'; // Replace 'logo.png' with your actual logo image

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Icons Section */}
      <div className="social-icons">
        <div className="social-links">
          <a href="https://www.instagram.com/deluxecaravansaustralia/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className='icon' />
          </a>
          <a href="https://www.facebook.com/deluxecaravansaustralia" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className='icon' />
          </a>
          <a href="https://twitter.com/CaravansDeluxe" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className='icon' />
          </a>
          <a href="https://www.tiktok.com/@deluxecaravansaustralia" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" className='icon' />
          </a>
          <a href="https://www.youtube.com/watch?v=a_KE1CVPT48" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className='icon' />
          </a>
         
        </div>
       
      </div>
      {/* Footer Links Section */}
      <div className="footer-links">
      <div className="logo">
      <a href="/" className="footer-link">
          <img src={logo} alt="Logo" className="footer-logo" /></a>
        </div>
        <div className="footer-links-column">
          <div className="footer-links-header">Caravans</div>
          <a href="/#/stormbreaker19" className="footer-link">Stormbreaker 19`6</a>
          <a href="/#/stormbreaker21" className="footer-link">Stormbreaker 21`6</a>
        </div>
        <div className="footer-links-column">
          <div className="footer-links-header">Resources</div>
          <a href="/#/about" className="footer-link">About us</a>
          <a href="#" className="footer-link">Warranty policy</a>
          <a href="/#/blog" className="footer-link">Blog</a>
          <a href="#" className="footer-link">Video</a>
        </div>
        <div className="footer-links-column">
          <div className="footer-links-header">Contact</div>
          <a href="#" className="footer-link">32 Scammel Street, Campbellfield, VIC 3061</a>
          <a href="#" className="footer-link">+61 450 060 938</a>
          <a href="#" className="footer-link">hello@infiniterv.com.au</a>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="copyright">
      <hr></hr>
        © {new Date().getFullYear()} Copyright: Deluxe Caravans
      </div>
    </footer>
  );
};

export default Footer;
