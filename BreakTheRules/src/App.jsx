import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './components/Acceuil';

function App() {
 

  return (
    <>
    <Router>
      <div>
        {/* Header, Navbar, ou tout autre élément qui est présent sur toutes les pages */}
        
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Acceuil/>} />

          {/* Route pour l'autre page */}
       

          {/* Ajoutez d'autres routes si nécessaire */}
        </Routes>
        {/* Footer, ou tout autre élément qui est présent sur toutes les pages */}
      </div>
    </Router>
    </>
  )
}

export default App
