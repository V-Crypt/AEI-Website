import React, { Component } from 'react';
import image from '../img/AEI_logo.png';
import '../styles/navbar.css';
import {Button } from 'semantic-ui-react';

export default class navbar extends Component {
  render() {
    return (
      <div className="topnav">
        <a href="/">
          <img alt='logo' src={image} />
        </a>
        <a href="/"> {/*Hacer que cuando se clickeen, permanezcan así (active)*/}
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
    );
  }
}
