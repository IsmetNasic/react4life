import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFitnessCenter } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdFitnessCenter className='navbar-icon' />
              FIT4LIFE
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  SERVICES
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
}

export default Navbar;