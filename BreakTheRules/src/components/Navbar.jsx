import React from "react";
import "../styles/acceuil.css";
import logo from "../assets/Logo.svg";
import Sea from "../assets/Sea.svg";
import burger from "../assets/burger-bar.png";

const Navbar = () => {
  const Open = () => {
    document.querySelector(".menuMobile").style.transform = "translateX(0)";
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="links">
            <li>Home</li>
            <li>Game</li>
            <li>Projects</li>
            <li>About us</li>
          </ul>
          <div className="addons">
            <button className="btn">Contact</button>
            <img src={Sea}></img>
          </div>
          <img src={burger} id="burger" onClick={Open}></img>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
