import React from 'react';
import "./NavbarStyles.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='header' >
        <Link to="/" className='underline'>
            <h1>he he hee</h1>
        </Link>
        <ul className='nav-items '>
            <li className='nav-item  item-home'>
                <Link to="/" className='underline menu'>Home</Link>
            </li>
            <li className='nav-item item-about '>
                <Link to="/about" className='underline menu '>About</Link>
            </li>
            <li className='nav-item item-projects'>
                <Link to="/project" className='underline menu '>Projects</Link>
            </li>
            <li className='nav-item item-contact'>
                <Link to="/contact" className='underline menu'>Contact</Link>
            </li>
           
        </ul>
         
    </div>
    <hr/>
    </div>
    
  )
}

export default Navbar