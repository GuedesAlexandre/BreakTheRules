import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "../styles/Game.css"

const Game2 = () => {
    const [selectedDiv, setSelectedDiv] = useState(null);
    const [correctDiv, setCorrectDiv] = useState(3); // Supposons que la div 2 est la bonne réponse
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
            setExplanation("Le CO2 est un gaz à effet de serre. Lorsqu'il est présent en quantités excessives dans l'atmosphère, il contribue à piéger la chaleur du soleil, provoquant un réchauffement de la planète. Les activités humaines, telles que la combustion des combustibles fossiles (charbon, pétrole, gaz naturel) pour la production d'énergie et le transport, sont les principales sources d'émissions de CO2.");
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
              
                <h1>Quel est le principal gaz à effet de serre responsable du réchauffement climatique?</h1>
                <div className={`game-div ${selectedDiv === 1 ? 'selected' : ''}`} onClick={() => handleDivClick(1)}>Azote</div>
                <div className={`game-div ${selectedDiv === 2 ? 'selected' : ''}`} onClick={() => handleDivClick(2)}>Oxygene </div>
                <div className={`game-div ${selectedDiv === 3 ? 'selected' : ''}`} onClick={() => handleDivClick(3)}>Dioxyde de Carbone</div>
                <button className="Valid" onClick={handleValidationClick}>Valider la réponse</button>
                <p className="nice">{responseMessage}</p>
                {explanation && <p className="nice">{explanation}</p>}
                {isAnswerValidated && (
                    <div>
                        {selectedDiv === correctDiv ? (
                            <Link to="/Game3" className="next-question">Question suivante</Link>
                        ) : (
                            <Link to="/Game3"><button className="next-question" onClick={handleValidationClick}>Question suivante</button></Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Game2;