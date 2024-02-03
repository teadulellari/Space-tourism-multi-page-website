import React, { useState } from 'react';
import "../styling/navBar.css";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";
import CloseIcon from "../assets/shared/icon-close.svg";
import Logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
       <nav className={isOpen ? 'show' : ''}>

        <img className="logo" src={Logo} alt="logo" />
        <img
            className={`hamburger-icon ${isOpen ? 'hide' : ''}`}
            src={HamburgerIcon}
            alt="hamburger icon"
            onClick={toggleMenu}
          />
          <div className='backdrop'>
          <img
            className={` backdrop close-icon ${isOpen ? '' : 'hide'}`}
            src={CloseIcon}
            alt="close icon"
            onClick={toggleMenu}
          />
           <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
           <li><span className="bold-number">00</span> HOME</li>
            <li>01 DESTINATION</li>
            <li>02 CREW</li>
            <li>03 TECHNOLOGY</li>
           </ul>
          </div>
        
          
        
      </nav>
    </>
  );
};

export default Navbar;
