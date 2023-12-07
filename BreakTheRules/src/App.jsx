import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import "./styles/acceuil.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Acceuil />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
