/**
 * contact.js tiene todo el contenido de la sección "Contacto".
 * */

import React, { Component } from "react";
import { Image } from 'semantic-ui-react';
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
                <div className="infoDescripcion">
                    <h1>Contáctanos</h1>
                    <hr />
                    <p>
                        Ten la confianza de contactarnos mediante cualquiera de los medios
                        presentados a continuación para tratar el tema en el cual estás
                        interesado, responderemos lo más pronto posible.
                    </p>
                </div>
                <div className='infoRedesSociales'>
                    <div id="correo">
                        <h2>Correo</h2>
                        <p>
                            asoc_escoltasinterco<br />@outlook.com
                        </p>
                        <Image centered src={correo} />
                    </div>
                    <div id="facebook">
                        <h2>Facebook</h2>
                        <p>
                            Asociación de<br />Escoltas Intercontinentales
                        </p>
                        <a href="https://www.facebook.com/groups/3154592981440628/" target='_blank' rel='noreferrer'>
                            <Image centered src={facebook} />
                        </a>
                    </div>
                    <div id="instagram">
                        <h2>Instagram</h2>
                        <p>
                            asoc_escoltasinterco
                        </p>
                        <a href="https://www.instagram.com/asoc_escoltasinterco/" target='_blank' rel='noreferrer'>
                            <Image centered src={instagram} />
                        </a>
                    </div>
                    <div id="linkedIn">
                        <h2>LinkedIn</h2>
                        <p>
                            Asociación de<br />Escoltas Intercontinentales
                        </p>
                        <a href="https://www.linkedin.com/company/asociaci%C3%B3n-de-escoltas-intercontinentales/" target='_blank' rel='noreferrer'>
                            <Image centered src={linkedin} />
                        </a>
                    </div>
                    <div id="whatsapp">
                        <h2>WhatsApp</h2>
                        <p>
                            +52 1 33 3468 6232
                        </p>
                        <Image centered src={whatsapp} />
                    </div>
                </div>
                <br /><br /><br /><br />
            </div>
        );
    }
}