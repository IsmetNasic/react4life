import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //Add active class to Navbar


  return (
    <>
        <nav className='navbar'>
          <div className='nav-container'>
          
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
          
            <ul className={click ? 'nav-ul active' : 'nav-ul'}>
              <li className='nav-li'>
                <NavLink exact to='/' className='nav-link' onClick={closeMobileMenu}>
                  HOME
                </NavLink>
              </li>
              <li className='nav-li'>
                <NavLink exact to='/services' className='nav-link' onClick={closeMobileMenu}>
                  SERVICES
                </NavLink>
              </li>
              <li className='nav-li'>
                <NavLink exact to='/about' className='nav-link' onClick={closeMobileMenu}>
                  ABOUT
                </NavLink>
              </li>
        
            </ul>
          </div>
        </nav>
    </>
  );
}

export default Navbar;