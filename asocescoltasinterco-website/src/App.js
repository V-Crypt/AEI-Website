import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio.js'
import Galeria from './components/galeria.js'
import Tienda from './components/tienda.js'
import Contacto from './components/contacto.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/' element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
