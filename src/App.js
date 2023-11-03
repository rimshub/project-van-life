import React from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './server.js';

function App() {
  return (
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
