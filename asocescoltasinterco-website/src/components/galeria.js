/**
 * galeria.js tiene la estructura de la secci�n "Galeria".
 * */

import React from 'react';
import Navbar from './navbar.js';
import Galery from './galery.js';
import Footer from './footer.js';

export default function Galeria() {
    return (
        <div className='galeria'>
            <Navbar />
            <Galery />
            <Footer />
        </div>
    )
}