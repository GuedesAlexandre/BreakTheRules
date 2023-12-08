import React, { createRef, useState } from "react";
import '../styles/chat.css';
import arrow from '../assets/arrow.png'
function ChatBot() {
  const questions = [
    {
      id: 0,
      question:
        "Comment le changement climatique peut-il influencer la biodiversité ?",
      reponse: "En provoquant la disparition de certaines espèces.",
    },
    {
      id: 1,
      question: "Qu'est-ce que le réchauffement climatique ?",
      reponse: "Un réchauffement progressif de la Terre.",
    },
    {
      id: 2,
      question:
        "Quels secteurs sont généralement considérés comme les plus émetteurs de gaz à effet de serre ?",
      reponse: "Secteur des transports et de l'industrie.",
    },
    {
      id: 3,
      question:
        "Quelle est la principale source d'émissions de dioxyde de carbone dans le secteur de l'énergie ?",
      reponse: "C'est le Charbon.",
    },
  ];
  const questionEnd = "Besoin de plus de précisions ?";

  const [currentQuestion, setCurrentQuestion] = useState(null);

  // conversationContainer.scrollTop = conversationContainer.scrollHeight;

  const positionWindow = createRef()
  const imageRef = createRef();

  function expandChat() {
    if (positionWindow.current.style.transform === `translateY(95%)`) {
        positionWindow.current.style.transform = 'translateY(0)';
        imageRef.current.style.transform = `rotate(0deg)`;
    } else {
        positionWindow.current.style.transform = 'translateY(95%)';
        imageRef.current.style.transform = `rotate(180deg)`;
    }
  }

  

  return (
    <div className="position-window" ref={positionWindow}>
      <div className="position-bulle">
        <div id="bulle">
          <img id="chat" ref={imageRef} src={arrow} alt="icon chat" onClick={expandChat}/>
        </div>
      </div>
      <div class="content-Chatbot" id="conversation-container">
        <p id="conversation">Bonjour ! Comment puis-je vous aider ?</p>
        <div class="btn-container">
          {questions.map(({ question, id }) => (
            <button key={id} onClick={() => setCurrentQuestion(id)}>
              {question}
              <br />
              {questionEnd}
            </button>
          ))}
        </div>
        {currentQuestion && (
          <div className="reponse">{questions[currentQuestion].reponse}</div>
        )}
      </div>
    </div>
  );
}

export default ChatBot;
