

import React from 'react';
import './acceuil.css';
import logo from './logo.svg';
import Sea from './Sea.svg'

const Navbar = () => {
    return (
        <>
        <header>
        <nav className="navbar">
            <div className='logo'><img src={logo} alt="Logo" /></div>
            <ul class="links">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            <div className='addons'>
            <button className="btn">Contact</button>
            <img src={Sea}></img>
            </div>
        </nav>
        </header>
        </>
    );
}

export default Navbar;
