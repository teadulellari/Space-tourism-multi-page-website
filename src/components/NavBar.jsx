import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../styling/navBar.css";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";
import CloseIcon from "../assets/shared/icon-close.svg";
import Logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemName) => {
    setIsOpen(false);
    setActiveItem(itemName);
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
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
                onClick={() => handleItemClick('home')}
              >
                <span className="bold-number">00</span> HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destinations"
                className="nav-link"
                activeClassName="active"
                onClick={() => handleItemClick('destinations')}
              >
                <span className="bold-number">01</span> DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                className="nav-link"
                activeClassName="active"
                onClick={() => handleItemClick('crew')}
              >
                <span className="bold-number">02</span> CREW
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tech"
                className="nav-link"
                activeClassName="active"
                onClick={() => handleItemClick('tech')}
              >
                <span className="bold-number">03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
