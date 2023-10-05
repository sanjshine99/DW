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
        <a href="https://www.instagram.com/deluxecaravansaustralia/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" className='icon' /></a>
        <a href="https://www.facebook.com/deluxecaravansaustralia" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" className='icon' /></a>
        <a href="https://twitter.com/CaravansDeluxe" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" className='icon' /></a>
        <a href="https://www.tiktok.com/@deluxecaravansaustralia" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt="TikTok" className='icon' /></a>
        <a href="https://www.youtube.com/watch?v=a_KE1CVPT48" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" className='icon' /></a>
        <a href="hello@infiniterv.com.au" target="_blank" rel="noopener noreferrer"><img src={envelope} alt="Email" className='icon' /></a>
      </div>
      <div className="contact-details">
        <p>32 Scammel Street, Campbellfield, VIC 3061 </p><p>|</p>
        <p> +61 450 060 938 </p><p>|</p>
        <p>hello@infiniterv.com.au</p>
      </div>
    </footer>
  );
};

export default Footer;
