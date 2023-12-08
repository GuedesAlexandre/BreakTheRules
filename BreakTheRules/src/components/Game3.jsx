import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "../styles/Game.css"

const Game3 = () => {
    const [selectedDiv, setSelectedDiv] = useState(null);
    const [correctDiv, setCorrectDiv] = useState(2); // Supposons que la div 2 est la bonne réponse
    const [responseMessage, setResponseMessage] = useState('');
    const [explanation, setExplanation] = useState('');
    const [isAnswerValidated, setIsAnswerValidated] = useState(false); // Ajouter un nouvel état

    const handleDivClick = (divIndex) => {
        if (!isAnswerValidated) { // Ajouter cette condition
            setSelectedDiv(divIndex);
            setIsAnswerValidated(false); // Réinitialiser l'état de validation lorsque l'utilisateur sélectionne une nouvelle réponse
        }
    };

    const handleValidationClick = () => {
        if (selectedDiv === correctDiv) {
            setResponseMessage("Bonne réponse !");
            setExplanation("Les voitures et les usines sont parmi les principales sources de pollution atmosphérique, émettant divers polluants qui peuvent avoir des impacts néfastes sur l'environnement et la santé humaine. ");
        } else {
            setResponseMessage("Mauvaise réponse !");
            setExplanation('Vous vous êtes trompé la planète se désagrège');
        }
        setIsAnswerValidated(true); // Mettre à jour l'état de validation lorsque l'utilisateur valide sa réponse
    };

    return (
        <div>
            <Navbar/>
            <div className='Gamecontainer'>
              
                <h1>Quel est la source principale des émissions de dioxyde de carbonne d'origine humaine? </h1>
                <div className={`game-div ${selectedDiv === 1 ? 'selected' : ''}`} onClick={() => handleDivClick(1)}>Les usines nucléaires</div>
                <div className={`game-div ${selectedDiv === 2 ? 'selected' : ''}`} onClick={() => handleDivClick(2)}>Les voitures et les usines </div>
                <div className={`game-div ${selectedDiv === 3 ? 'selected' : ''}`} onClick={() => handleDivClick(3)}>les feux de forêt</div>
                <button className="Valid" onClick={handleValidationClick}>Valider la réponse</button>
                <p className="nice">{responseMessage}</p>
                {explanation && <p className="nice">{explanation}</p>}
                {isAnswerValidated && (
                    <div>
                        {selectedDiv === correctDiv ? (
                            <Link to="/Game4" className="next-question">Question suivante</Link>
                        ) : (
                            <Link to="/Game4"><button className="next-question" onClick={handleValidationClick}>Question suivante</button></Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Game3;