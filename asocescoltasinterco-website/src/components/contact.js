import React, { Component } from "react";
import "../styles/contact.css";
import correo from '../img/correo.png';
import facebook from '../img/facebook.png';
import whatsapp from '../img/whatsapp.png';
import linkedin from '../img/linkedin.png';
import instagram from '../img/instagram.png';

export default class contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="infoDes">
          <h1>Contáctanos</h1>
          <hr />
          <p>
            Ten la confianza de contactarnos mediante cualquiera de los medios
            presentados a continuación para tratar el tema en el cual estás
            interesado, responderemos lo más pronto posible.
          </p>
        </div>
        <div className='infoRed'>
          <div id="correo">
            <h2>Correo</h2>
            <p>
              asoc_escoltasinterco@outlook.com
            </p>
            <img alt='correo' src={correo} />
          </div>
          <div id="facebook">
            <h2>Facebook</h2>
            <p>
              Asociación de<br />Escoltas Intercontinentales
            </p>
          <a href="https://www.facebook.com/groups/3154592981440628/">
            <img alt='facebook' src={facebook} />
            </a>
          </div>
          <div id="instagram">
            <h2>Instagram</h2>
            <p>
              asoc_escoltasinterco
            </p>
            <a href="https://www.instagram.com/asoc_escoltasinterco/">
            <img alt='instagram' src={instagram} />
            </a>
          </div>
          <div id="linkedIn">
            <h2>LinkedIn</h2>
            <p>
              Asociación de<br />Escoltas Intercontinentales
            </p>
          <a href="https://www.linkedin.com/company/asociaci%C3%B3n-de-escoltas-intercontinentales/">
            <img alt='linkedin' src={linkedin} />
            </a>
          </div>
          <div id="whatsapp">
            <h2>WhatsApp</h2>
            <p>
              +52 1 33 3468 6232
            </p>
            <img alt='whatsapp' src={whatsapp} />
          </div>
        </div>
      </div>
    );
  }
}