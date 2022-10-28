import React from "react";

import { Grid, Image, Segment } from "semantic-ui-react";
import "../styles/contact.css";

export default function contact() {
  return (
    <div className="contact">
      <div style={{ textAlign: "center" }}>Hola 2</div>

      <div class="contenedorcontactos">
        <div class="contactanos">
          Contactanos
        </div>
        <div class = "lineacontacto">
          <hr>
          </hr>
        </div>
        <header class="TenlaConfianza">
          Ten la confianza de contactarnos mediante cualquiera de los medios presentados a continuación para tratar el tema en el cual estás interesado, trateremos de responder lo más pronto posible.
        </header>
        <div class="contactoCorreo">
          Hola
        </div>
        <div class="contactoFacebook">
          Hola
        </div>
        <div class="contactoWhatsapp">
          Hola
        </div>
        <div class="contactoLinkedIn">
          Hola
        </div>
        <div class="contactoInstagram">
          Hola
        </div>
        

      </div>
    </div>
  );
}
