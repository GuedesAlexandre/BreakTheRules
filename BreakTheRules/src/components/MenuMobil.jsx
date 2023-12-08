import React, { useState } from "react";
import "../styles/acceuil.css";

const MenuMobile = () => {
  const handleCloseButtonClick = () => {
    document.querySelector(".menuMobile").style.transform = "translateX(100%)";
  };

  return (
    <>
      <div className="menuMobile">
        <div id="close" onClick={handleCloseButtonClick}>
          ✕
        </div>
        <div className="navLink">Home</div>
        <div className="navLink">Game</div>
        <div className="navLink">Projects</div>
        <div className="navLink">About us</div>
      </div>
    </>
  );
};

export default MenuMobile;
