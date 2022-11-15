import React from 'react';
import Navbar from './navbar.js';
import Home from './home.js';
import Footer from './footer.js';

export default function Inicio() {
    return (
        <div className='inicio'>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}