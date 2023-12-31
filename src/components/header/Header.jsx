import { FaUserCircle } from "react-icons/fa";
import React, { useState } from 'react';
import './Header.css';
import { RiFileSearchFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import NavBarTalleres from "../NavBarTallereres/NavBarTalleres";




function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
const [isOpen, setIsOpen] = useState(false);

const open = () => {
  setIsOpen(!isOpen)
}
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (

    <>
      <div className='header'>
        <div className='logo-cuenta'>
          <div className="nav_toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
                </div>
          <img src='./src/assets/logo.png' alt='logo'></img>
          <div className='cuenta'>
            <Link to='cuenta' >CUENTA</Link><FaUserCircle className="icon" />
          </div>
        </div>
      </div>
      <div className={`header-nav ${menuVisible && isOpen ? 'visible'  : ''}`} >
        <nav>
          <div className={`primera ${menuVisible && isOpen  ? 'visible' : ''}`}>
            <Link to='/' >HOME</Link>
            <Link to='Talleres' >SOBRE NOSOTROS</Link>
            <Link to='Talleres' className="talleres">TALLERES</Link>
          </div>
          <div className={`segunda ${menuVisible && isOpen  ? 'visible' : ''}`}>
            <Link to='search' >BUSCAR</Link>
            <RiFileSearchFill className="icon" />
          </div>
        </nav>
        <div className={`tercera ${menuVisible ? 'visible' : ''}`}>
          <Link to='crochet' >CROCHET</Link>
          <Link to='macrame' >MACRAME</Link>
          <Link to='porcelana' >PORCELANA</Link>
          <Link to='pintura-madera' >PINTURA</Link>
          <Link to='reciclado' >RECICLADO</Link>
          <Link to='peluqueria'>PELUQUERIA</Link>
        </div>
      </div>
    </>

  );
}

export default Header;


