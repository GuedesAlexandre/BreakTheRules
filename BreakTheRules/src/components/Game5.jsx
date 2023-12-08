import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "../styles/Game.css"

const Game5 = () => {
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
            setExplanation("Le réchauffement climatique a des effets particulièrement marqués sur les régions arctiques. Ces effets sont multiples et ont des conséquences significatives sur l'écosystème, le climat, les communautés locales et la cryosphère .");
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
              
                <h1>Quels sont les effets du réchauffement climatique sur les régions arctiques? </h1>
                <div className={`game-div ${selectedDiv === 1 ? 'selected' : ''}`} onClick={() => handleDivClick(1)}>Le rechauffement climatique n'a aucun effet</div>
                <div className={`game-div ${selectedDiv === 2 ? 'selected' : ''}`} onClick={() => handleDivClick(2)}>Il peut entraîner la fonte accélérée de la banquise et des perturbations écologiques  </div>
                <div className={`game-div ${selectedDiv === 3 ? 'selected' : ''}`} onClick={() => handleDivClick(3)}>Les régions arctiques bénéficient du réchauffement climatique</div>
                <button className="Valid" onClick={handleValidationClick}>Valider la réponse</button>
                <p className="nice">{responseMessage}</p>
                {explanation && <p className="nice">{explanation}</p>}
                {isAnswerValidated && (
                    <div>
                        {selectedDiv === correctDiv ? (
                            <Link to="/" className="next-question">Question suivante</Link>
                        ) : (
                            <Link to="/"><button className="next-question" onClick={handleValidationClick}>Question suivante</button></Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Game5;