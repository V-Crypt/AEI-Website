import React, { Component } from "react";
import "../styles/contact.css";

export default class footer extends Component {
  render() {
    return (
      <div className="contact">
        <div className="primerDiv">
          <div class="contenedorcontactos">
            <div class="contactanos">
              <h1>Contáctanos</h1>
              <div class="lineacontacto">
                <hr />
              </div>
              <p>
                Ten la confianza de contactarnos mediante cualquiera de los medios
                presentados a continuación para tratar el tema en el cual estás
                interesado, trateremos de responder lo más pronto posible.
              </p>
            </div>
          </div>
        </div>
        <div id='info'>
          <div id="contactoCorreo">
            <h2>Correo</h2>
            <p>
              asoc_escoltasinterco@outlook.com
            </p>
          </div>
          <div id="contactoFacebook">
            <h2>Facebook</h2>
            <p>
              Asociación de Escoltas Intercontinentales
            </p>
          </div>
          <div id="contactoWhatsapp">
            <h2>WhatsApp</h2>
            <p>
              +52 1 33 3468 6232
            </p>
          </div>
          <div id="contactoLinkedIn">
            <h2>LinkedIn</h2>
            <p>
              Asociación de Escoltas Intercontinentales
            </p>
          </div>
          <div id="contactoInstagram">
            <h2>Instagram</h2>
            <p>
              asoc_escoltasinterco
            </p>
          </div>
        </div>
      </div>
    );
  }
}