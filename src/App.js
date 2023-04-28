import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home"; 
import Projects from "./components/Pages/Projects"; 

function App() {
  return (
    <HashRouter>
      <Routes> 
       <Route exact path="/Projects" element={<Projects />} />
       <Route  exact path="/Home" element={<Home />} />
       <Route  exact path="/" element={<Home />} />

 </Routes>

 
    </HashRouter>
   

  );
}

export default App;
