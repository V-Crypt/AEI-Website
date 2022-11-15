import React, { Component } from 'react';
import '../styles/galery.css';
import Entrenamientos from './modalEntrenamientos.js';
import Kit from './modalKit.js';
import Escoltas from './modalEscoltas.js';

export default class galery extends Component {
    render() {
        return (
            <div className='galery'>
                <Entrenamientos />
                <Kit />
                <Escoltas />
            </div>
        );
    }
}