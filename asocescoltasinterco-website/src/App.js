/**
 * App.js tiene el contenido y la estructura de todo el sistema.
 * */

import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio.js'
import Galeria from './components/galeria.js'
import Tienda from './components/tienda.js'
import Contacto from './components/contacto.js'
import 'semantic-ui-css/semantic.min.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function App() {
    return (
        <PayPalScriptProvider options={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID, 'currency': 'MXN' }}>
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
        </PayPalScriptProvider>
    );
}