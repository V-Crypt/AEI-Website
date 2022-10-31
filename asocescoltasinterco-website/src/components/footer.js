import React, { Component } from 'react';
import image from '../img/shield.png';
import '../styles/footer.css';
import { Button } from 'semantic-ui-react';

export default class footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div id='logo'>
          <img alt='escudo' src={image} />
        </div>
        <div id='menu'>
          <a href="/">
            <Button content="Inicio" />
          </a>
          <a href="/galeria">
            <Button content="Galeria" />
          </a>
          <a href="/tienda">
            <Button content="Tienda" />
          </a>
          <a href="/contacto">
            <Button content="Contacto" />
          </a>
        </div>
        <div id='hr1'>
          <hr />
        </div>
        <div id='hr2'>
          <hr />
        </div>
        <div id='hr3'>
          <hr />
        </div>
        <div id='hr4'>
          <hr />
        </div>
        <div id='copyright'>
          <p>Copyright © 2022 Asociación de Escoltas Intercontinentales</p>
        </div>
      </div>
    );
  }
}