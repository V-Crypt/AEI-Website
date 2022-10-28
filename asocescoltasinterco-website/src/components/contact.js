import React from "react";

import { Grid, Image, Segment } from "semantic-ui-react";
import "../styles/contact.css";

export default function contact() {
  return (
    <div className="contact">
      <div class="contenedorcontactos">
        <div class="contactanos">Contactanos</div>
        <div class="lineacontacto">
          <hr></hr>
        </div>
        <header class="TenlaConfianza">
          Ten la confianza de contactarnos mediante cualquiera de los medios
          presentados a continuación para tratar el tema en el cual estás
          interesado, trateremos de responder lo más pronto posible.
        </header>
        <div class="contactoCorreo">Correo</div>
        <div class="contactoFacebook">Facebook</div>
        <div class="contactoWhatsapp">WhatsApp</div>
        <div class="contactoLinkedIn">LinkedIn</div>
        <div class="contactoInstagram">Instagram</div>
        {/* <div class="contactoCorreo2">Correo</div> */}
      </div>
    </div>
  );
}
