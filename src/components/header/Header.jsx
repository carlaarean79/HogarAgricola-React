import { FaUserCircle } from "react-icons/fa";
import React from 'react';
import './Header.css';
import { RiFileSearchFill } from "react-icons/ri";
import { Link } from "react-router-dom";




function Header() {
  return (
    <>
      {/* <div className="container-general">
        <div className="header">
          <div className="div-logo">
            <img src='./src/assets/logo.png' alt='Logo' className='img-logo' />
          </div>
         <div className="cuenta-user">
            <Link to='cuenta' >CUENTA</Link>
            <FaUserCircle />
          </div>
        </div>
        <div className='container-gral-navBar'>
        <div className='link'>
          <Link to='/' >HOME</Link>
          <Link to='Talleres' >SOBRE NOSOTROS</Link>
          <Link to='Talleres' >TALLERES</Link>
        </div>
        <div className='search'>
          <Link to='search' >BUSCAR</Link>
          <RiFileSearchFill />
        </div>
      </div>
      </div> */}
      <>
        <div className='heder'>
          <div className='logo-cuenta'>
            <img src='./src/assets/logo.png' alt='logo'></img>
            <div className='cuenta'> <Link to='cuenta' >CUENTA</Link></div>
          </div>
          <nav>
            <div className='primera'>
              <Link to='/' >HOME</Link>
              <Link to='Talleres' >SOBRE NOSOTROS</Link>
              <Link to='Talleres' >TALLERES</Link>
            </div>
            <div className='segunda'>
              <Link to='search' >BUSCAR</Link>
              <RiFileSearchFill className="icon" />
            </div>
          </nav>
        </div>
      </>
    </>
  );
}

export default Header;


