import React, { Component } from 'react';
import image from '../img/AEI_logo.png';
import '../styles/navbar.css';
import { Button } from 'semantic-ui-react';

export default class navbar extends Component {
  render() {
    return (
      <div className="topNav">
        <img alt='logo' src={image} />
        <a href="/contacto">
          <Button content="Contacto" />
        </a>
        <a href="/tienda">
          <Button content="Tienda" />
        </a>
        <a href="/galeria">
          <Button content="Galeria" />
        </a>
        <a href="/"> {/*Nota: Cuando se clickeen que permanezcan active*/}
          <Button content="Inicio" />
        </a>
      </div>
    );
  }
}
