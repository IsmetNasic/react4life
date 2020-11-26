import React, { useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <IconContext.Provider value={{ color: '#c23838' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src="/images/fit4life.png" alt="logo" />
              FIT<h1>4</h1>LIFE
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink exact to='/' className='nav-links' onClick={closeMobileMenu}>
                  HOME
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink exact
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  SERVICES
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink exact
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>  
    </>
  );
}

export default Navbar;