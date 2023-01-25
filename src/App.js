import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home"; 
import Projects from "./components/Pages/Projects"; 

function App() {
  return (
    <BrowserRouter>
      <Routes> 
       <Route  path="/Projects" element={<Projects />} />
       <Route  path="/Home" element={<Home />} />
       <Route  path="/" element={<Home />} />

 </Routes>

 
    </BrowserRouter>

  );
}

export default App;
