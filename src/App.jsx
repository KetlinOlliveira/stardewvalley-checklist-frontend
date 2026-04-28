import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre'; // Certifique-se que este import está aqui
import MuralComunidade from './components/MuralComunidade';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota da Página Inicial */}
        <Route path="/" element={<Home />} />
        
        {/* Rota do Guia Interativo */}
        <Route path="/guia" element={<MuralComunidade />} />
        
        {/* Rota da Página Sobre - AGORA APONTANDO PARA O COMPONENTE REAL */}
        <Route path="/sobre" element={<Sobre />} /> 
      </Routes>
    </Router>
  );
}

export default App;