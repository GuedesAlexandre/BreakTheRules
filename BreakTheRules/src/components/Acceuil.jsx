import React from "react";
import "../styles/acceuil.css";
import Navbar from "./Navbar";
import Card from "./card";
import Planet from "../assets/Planet.png";
import MenuMobile from "./MenuMobil";
import Mashallah from "./phrise";
import ChatBot from "./ChatBot";
import '../styles/footer.css';
import LogoNuit from '../assets/logo-nuit.png';


const burgerOpen = () => {
  const Open = () => {
    document.querySelector(".menuMobile").style.transform = "translateX(-100%)";
  };
};

const Acceuil = () => {
  return (
    <>
      <MenuMobile />

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
      <Mashallah/>
      <ChatBot />
      <footer>
      <p id="p1">Fait avec ❤️ par les Démeauxnétisés</p>
      <div className="containfoot">
        <h2>Notre équipe</h2>
        <div className="equipe">
          <div className="equipe1">
            <p>
              Alexandre GUEDES{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/alexandre-guedesmmi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                <a href="https://github.com/GuedesAlexandre" target="_blank" rel="noopener noreferrer">
                  Github
                </a>{' '}
              </span>
              <br />
              Rayane MASMOUDI{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/rayane-masmoudi-9b5991180/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <br />
              Karl ESTAYO{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/karl-estayo-75ba34201/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                <a href="https://GitHub.com/Karlitooo03" target="_blank" rel="noopener noreferrer">
                  Github
                </a>{' '}
              </span>
              <br />
              Timothé HEGE{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/hege-timoth%C3%A9-491341212/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                <a href="https://GitHub.com/Fvrenn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>{' '}
              </span>
              <br />
              Arnaud ROYER{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/royer-arnaud/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                <a href="https://github.com/itsarnaud" target="_blank" rel="noopener noreferrer">
                  Github
                </a>{' '}
              </span>
              <br />
              Steven LE CAM{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/steven-le-cam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                <a href="https://github.com/Eartskip" target="_blank" rel="noopener noreferrer">
                  Github
                </a>{' '}
              </span>
              <br />
              Glenn GUILLARD{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/glenn-guillard-08204724a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                <a href="https://GitHub.com/glenn-guillard-mmi" target="_blank" rel="noopener noreferrer">
                  Github
                </a>{' '}
              </span>
            </p>
          </div>
          <div className="equipe2">
            <p>
              Orlane ESCAVI{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/orlane-escavi-32270a203/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                <a href="https://GitHub.com/Orlanescavi" target="_blank" rel="noopener noreferrer">
                  Github
                </a>{' '}
              </span>
              <br />
              Edens BORGELIN DELICE{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/edens-borgelin-delice-158b9a239/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                <a href="https://github.com/Asefthukom7" target="_blank" rel="noopener noreferrer">
                  Github
                </a>{' '}
              </span>
              <br />
              Hugo GONCALVES FERNANDES{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/hugo-goncalves-fernandes-bb9701299/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <br />
              Noah THIERY{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/noah-thiery-3a720529a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <br />
              Ben-Ylane CHANRANI{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/ben-yl%C3%A2ne-chanrani-01486629b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <br />
              Luxchan VASANTHAN{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/luxchan-vasanthan-40a2222a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <br />
              Ibtissam CHTUOUI{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/ibtissam-chtioui-0b72582a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <br />
              Ylan-tamta TCHUGOMTSEU{' '}
              <span className="thin">
                <a
                  href="https://www.linkedin.com/in/ylan-tamta-tchugomtseu-5199aa299/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            </p>
          </div>
          <div className="ligne"></div>
          <div className="logoNDI">
            <a href="https://www.nuitdelinfo.com/" target="_blank" rel="noopener noreferrer">
              <img src={LogoNuit} alt="Logo Nuit De l'Info" id="NDI" />
            </a>
          </div>
        </div>
      </div>
    </footer>
     
    </>
  );
};

export default Acceuil;
