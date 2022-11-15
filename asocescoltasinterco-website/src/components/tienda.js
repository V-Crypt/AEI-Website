import React from 'react';
import Navbar from './navbar.js';
import Shop from './shop.js';
import Footer from './footer.js';

export default function Tienda() {
    return (
        <div className='tienda'>
            <Navbar />
            <Shop />
            <Footer />
        </div>
    )
}