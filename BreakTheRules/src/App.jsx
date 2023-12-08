import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import "./styles/acceuil.css";
import Game from "./components/Game";
import Game2 from "./components/Game2";
import Game3 from "./components/Game3";
import Game4 from "./components/Game4";
import Game5 from "./components/Game5";
import Conclusion from "./components/Conclusion";


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/Game" element={<Game/>}/>
            <Route path="/Game2" element={<Game2/>}/>
            <Route path="/Game3" element={<Game3/>} />
            <Route path="/Game4" element={<Game4/>}/>
            <Route path="/Game5" element={<Game5/>}/>
            <Route path="/Conclusion" element={<Conclusion/>}></Route>

            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
