import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import '../../App.css';
import logo from '../../assets/Logo.png'
import placeholder from '../../assets/place holder.png'

const Header = () => {
  const [expandedMenus, setExpandedMenus] = useState({});

  const handleMenuHover = (menu) => {
    setExpandedMenus((prevExpandedMenus) => ({
      ...prevExpandedMenus,
      [menu]: true,
    }));
  };

  const handleMenuLeave = (menu) => {
    setExpandedMenus((prevExpandedMenus) => ({
      ...prevExpandedMenus,
      [menu]: false,
    }));
  };

  return (
    <header className="header">
  <div className="header-logo"><Link to="/"><img src={logo} alt="" height={50}/></Link></div>
  <nav className="header-nav">
    <div className="header-menu" onMouseEnter={() => handleMenuHover('ourRange')} onMouseLeave={() => handleMenuLeave('ourRange')}>
      Our Range
    </div>
    <div className="header-menu" onMouseEnter={() => handleMenuHover('Resources')} onMouseLeave={() => handleMenuLeave('Resources')}>
      Resources
    </div>
    <div className="header-menu" onMouseEnter={() => handleMenuHover('Discover')} onMouseLeave={() => handleMenuLeave('Discover')}>
    Discover
    </div>
    <div className="header-menu"> <Link to="/contact">
       <p>Contact </p>
       </Link></div>
  </nav>

  {expandedMenus['ourRange'] && (
     <div className={`sub-menu ${expandedMenus['ourRange'] ? 'expanded' : ''}`} onMouseEnter={() => handleMenuHover('ourRange')} onMouseLeave={() => handleMenuLeave('ourRange')}>
     <div>
       <Link to="/stormbreaker19">
       <img src={placeholder} alt="" />
       </Link>
     </div>
     <div>
       <Link to="/stormbreaker21">
       <img src={placeholder} alt="" />
       </Link>
     </div>
   </div>
  )}

  {expandedMenus['Resources'] && (
    <div className={`sub-menu ${expandedMenus['Resources'] ? 'expanded' : ''}`} onMouseEnter={() => handleMenuHover('Resources')} onMouseLeave={() => handleMenuLeave('Resources')}>
      <div>
       <Link to="/about">
       <p>About </p>
       </Link>
     </div>
     <div>
       <Link to="/blog">
       <p>blog </p>
       </Link>
     </div>
     <div>
       <Link to="/">
       <p>Warrenty Policy </p>
       </Link>
     </div>
    </div>
  )}

   {expandedMenus['Discover'] && (
    <div className={`sub-menu ${expandedMenus['Discover'] ? 'expanded' : ''}`} onMouseEnter={() => handleMenuHover('Discover')} onMouseLeave={() => handleMenuLeave('Discover')}>
      <div>social 1</div>
      <div>social 2</div>
      <div>social 3</div>
      <div>social 4</div>
      <div>social 5</div>
      <div>social 6</div>
    </div>
  )}
</header>

  );
  
};

export default Header;
