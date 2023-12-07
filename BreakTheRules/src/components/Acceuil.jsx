import React from "react";
import "../styles/acceuil.css";
import Navbar from "./Navbar";

const Acceuil = () => {
  return (
    <div id="acueil">
      <div id="sombre">
        <Navbar />
        <h1>
          We want to <br />
          change the rules
        </h1>
      </div>
    </div>
  );
};

export default Acceuil;
