import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../../App.css';
import logo from '../../assets/Logo.png';
import placeholder from '../../assets/place holder.png';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const menuData = [
    {
      label: 'Our Range',
      submenu: [
        { label: <img src={placeholder} alt="Placeholder" />, link: '/stormbreaker19' },
        { label:<img src={placeholder} alt="Placeholder" />, link: '/stormbreaker21' },
      ],
    },
    {
      label: 'Resources',
      submenu: [
        { label: 'About', link: '/about' },
        { label: 'Blog', link: '/blog' },
        { label: 'Warranty Policy', link: '/' },
      ],
    },
    {
      label: 'Discover',
      submenu: [
        { label: 'Social 1', link: '/' },
        { label: 'Social 2', link: '/' },
        { label: 'Social 3', link: '/' },
        { label: 'Social 4', link: '/' },
        { label: 'Social 5', link: '/' },
        { label: 'Social 6', link: '/' },
      ],
    },
  ];

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="" height={50} />
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="menu">
          {menuData.map((menu, index) => (
            <li
              key={index}
              className={`menu-item ${activeMenu === menu.label ? 'active' : ''}`}
              onMouseEnter={() => handleMenuHover(menu.label)}
              onMouseLeave={handleMenuLeave}
            >
              <button>
                <span>{menu.label}</span>
              </button>
              {activeMenu === menu.label && menu.submenu && (
                <div className="sub-menu">
                  {menu.submenu.map((subitem, subIndex) => (
                    <Link key={subIndex} to={subitem.link}>
                      <div className="sub-menu-item">{subitem.label}</div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li className="menu-item">
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
