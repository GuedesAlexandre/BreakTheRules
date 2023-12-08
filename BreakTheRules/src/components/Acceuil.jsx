import React from "react";
import "../styles/acceuil.css";
import Navbar from "./Navbar";
import Card from "./card";
import Planet from "../assets/Planet.png";
<<<<<<< HEAD
import MenuMobile from "./MenuMobil";

const burgerOpen = () => {
  const Open = () => {
    document.querySelector(".menuMobile").style.transform = "translateX(-100%)";
  };
};
=======
import Mashallah from "./phrise";
>>>>>>> ee3369e (bien lourd ma partie)

const Acceuil = () => {
  return (
    <>
      <MenuMobile />

<<<<<<< HEAD
      <div id="Acueil">
        <Navbar />
        <div className="hash1">
          <h1>
            We want to <br />
            change the rules
          </h1>
          <div className="buttoncontain">
            <button className="btn-discover">Discover</button>
            <button className="btn-info">
              Information
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
              >
                <path
                  d="M9.70625 7.29377C10.0969 7.6844 10.0969 8.31877 9.70625 8.7094L3.70625 14.7094C3.31563 15.1 2.68125 15.1 2.29063 14.7094C1.9 14.3188 1.9 13.6844 2.29063 13.2938L7.58438 8.00002L2.29375 2.70627C1.90313 2.31565 1.90313 1.68127 2.29375 1.29065C2.68438 0.900024 3.31875 0.900024 3.70938 1.29065L9.70938 7.29065L9.70625 7.29377Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <Card />
      </div>
      <div class="Title">
        <h2>Le monde brûle</h2>
      </div>
      <div id="heroplanet">
        <div class="contain-planet">
          <p class="text">Nous n'en avons qu'une seule protégeons-la !</p>
        </div>
      </div>
      <div class="Title2">
        <h2>The truth on the way</h2>
      </div>
      <div className="boite">
        <div className="Box-Container">
          <div className="Box1">
            <p className="textbatard">
              La préservation de notre planète est une responsabilité collective
              cruciale. Ce QCM vous invite à explorer les fondements de
              l'écologie, afin de sensibiliser et d'éduquer sur les actions
              nécessaires pour construire un avenir durable et respectueux de
              notre environnement.
            </p>
          </div>
=======
   </div>
 <Mashallah/>
   
>>>>>>> ee3369e (bien lourd ma partie)

          <div className="Box2">
            <p class="text2">
              Exploration écologique : Testez vos connaissances pour un avenir
              durable
            </p>
            <div class="button-containerbis">
              <button className="btn-discover2">Discover</button>
              <button className="btn-info">
                Information
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                >
                  <path
                    d="M9.70625 7.29377C10.0969 7.6844 10.0969 8.31877 9.70625 8.7094L3.70625 14.7094C3.31563 15.1 2.68125 15.1 2.29063 14.7094C1.9 14.3188 1.9 13.6844 2.29063 13.2938L7.58438 8.00002L2.29375 2.70627C1.90313 2.31565 1.90313 1.68127 2.29375 1.29065C2.68438 0.900024 3.31875 0.900024 3.70938 1.29065L9.70938 7.29065L9.70625 7.29377Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acceuil;
