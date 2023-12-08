import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "../styles/Game.css"

const Game = () => {
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
            setExplanation("Le réchauffement climatique est l'augmentation à long terme de la température moyenne de la Terre, principalement due aux activités humaines telles que les émissions de gaz à effet de serre, provoquant des changements significatifs dans les conditions météorologiques et le climat mondial. Ces changements ont des impacts graves sur l'environnement, les écosystèmes et les sociétés à travers le monde.");
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
              
                <h1>Qu'est-ce que le réchauffement climatique ? </h1>
                <div className={`game-div ${selectedDiv === 1 ? 'selected' : ''}`} onClick={() => handleDivClick(1)}>Un refroidissement de la planète</div>
                <div className={`game-div ${selectedDiv === 2 ? 'selected' : ''}`} onClick={() => handleDivClick(2)}>Un réchauffement progressif de la planète </div>
                <div className={`game-div ${selectedDiv === 3 ? 'selected' : ''}`} onClick={() => handleDivClick(3)}>Une variation normale de la température</div>
                <button className="Valid" onClick={handleValidationClick}>Valider la réponse</button>
                <p className="nice">{responseMessage}</p>
                {explanation && <p className="nice">{explanation}</p>}
                {isAnswerValidated && (
                    <div>
                        {selectedDiv === correctDiv ? (
                            <Link to="/Game2" className="next-question">Question suivante</Link>
                        ) : (
                            <Link to="/Game2"><button className="next-question" onClick={handleValidationClick}>Question suivante</button></Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Game;