import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
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
        { label: <img src={placeholder} alt="Placeholder" />, link: '/stormbreaker21' },
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
    <motion.header
      className="header"
      initial={{ backgroundColor: 'transparent' }}
      whileHover={{ backgroundColor: 'white', color: 'black' }}
      animate={activeMenu ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'transparent' }}
      transition={{ duration: 0.3 }}
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
              className={`menu-item ${activeMenu === menu.label ? 'active' : ''}`}
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
                          transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                        >
                          {subitem.label}
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
          <li className="menu-item">
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
