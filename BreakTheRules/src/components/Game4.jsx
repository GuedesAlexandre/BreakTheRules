import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "../styles/Game.css"

const Game4 = () => {
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
            setExplanation("Favoriser les énergies renouvelables, comme le solaire et l'éolien, tout en réduisant notre consommation d'énergie, aide à lutter contre le changement climatique en diminuant les émissions de gaz à effet de serre. Cela protège les ressources naturelles, crée des emplois, améliore la qualité de l'air, assure la stabilité énergétique, et peut générer des économies financières à long terme. En adoptant ces mesures, nous contribuons à construire un avenir plus durable et respectueux de l'environnement.");
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
              
                <h1>Comment pouvons nous contribuer à réduire notre empreinte carbonne?</h1>
                <div className={`game-div ${selectedDiv === 1 ? 'selected' : ''}`} onClick={() => handleDivClick(1)}>En utilisant d'avantage d'énergies fossiles</div>
                <div className={`game-div ${selectedDiv === 2 ? 'selected' : ''}`} onClick={() => handleDivClick(2)}>En favorisant les énergies renouvelables  & en réduisant notre conssomation d'énergies</div>
                <div className={`game-div ${selectedDiv === 3 ? 'selected' : ''}`} onClick={() => handleDivClick(3)}>En ignorant les problèmes environnementaux</div>
                <button className="Valid" onClick={handleValidationClick}>Valider la réponse</button>
                <p className="nice">{responseMessage}</p>
                {explanation && <p className="nice">{explanation}</p>}
                {isAnswerValidated && (
                    <div>
                        {selectedDiv === correctDiv ? (
                            <Link to="/Game5" className="next-question">Question suivante</Link>
                        ) : (
                            <Link to="/Game5"><button className="next-question" onClick={handleValidationClick}>Question suivante</button></Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Game4;