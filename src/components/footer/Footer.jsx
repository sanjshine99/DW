import React from 'react';
import './Footer.css';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import tiktok from '../../assets/icons/tik-tok.png';
import youtube from '../../assets/icons/youtube.png';
import envelope from '../../assets/icons/message.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#"><img src={instagram} alt="Instagram" className='icon' /></a>
        <a href="#"><img src={facebook} alt="Facebook" className='icon' /></a>
        <a href="#"><img src={twitter} alt="Twitter" className='icon' /></a>
        <a href="#"><img src={tiktok} alt="TikTok" className='icon' /></a>
        <a href="#"><img src={youtube} alt="YouTube" className='icon' /></a>
        <a href="#"><img src={envelope} alt="Email" className='icon' /></a>
      </div>
      <div className="contact-details">
        <p>123 Main Street, City </p><p>|</p>
        <p>+123 456 7890</p><p>|</p>
        <p>example@email.com</p>
      </div>
    </footer>
  );
};

export default Footer;
