import React from "react";
import "../styles/acceuil.css";
import logo from '../assets/Logo.svg';
import Sea from '../assets/Sea.svg'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <> 
        <header>
            <nav className="navbar">
                <div className='logo'><img src={logo} alt="Logo" /></div>
                <ul class="links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/Game"><li>Game</li></Link>
                <Link to="/Projets"><li>Projects</li></Link>
        
               
            

                
                </ul>
                <div className='addons'>
                <button className="btn">Contact</button>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"><img src={Sea}></img></a>
                </div>
            </nav>
        </header>
        </>
    );
}

export default Navbar;
