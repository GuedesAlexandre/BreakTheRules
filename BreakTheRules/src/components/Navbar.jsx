import React from "react";
import "../styles/acceuil.css";
import logo from '../assets/Logo.svg';
import Sea from '../assets/Sea.svg'

const Navbar = () => {
    return (
        <>
        <header>
            <nav className="navbar">
                <div className='logo'><img src={logo} alt="Logo" /></div>
                <ul class="links">
                <li>Home</li>
                <li>Game</li>
                <li>Projects</li>
        
                <li>About us</li>

                
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
