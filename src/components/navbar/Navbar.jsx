import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
import Gallery from '../../components/gallery/Gallery'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="shirt__navbar">
      <div className="shirt__navbar-links">
        <div className="shirt__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="shirt__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#list">List</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className="shirt__navbar-sign">
        <button type="button">Connect Wallet</button>
      </div>
      <div className="shirt__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="shirt__navbar-menu_container scale-up-center">
          <div className="shirt__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#list">List</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
          <div className="shirt__navbar-menu_container-links-sign">
            <button type="button">Connect Wallet</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;