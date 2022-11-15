import React, { Component } from 'react';
import logo from '../img/AEI_logo.png';
import lealtad from '../img/lealtad.png';
import sabiduria from '../img/sabiduria.png';
import honor from '../img/honor.png';
import solidaridad from '../img/solidaridad.png';
import respeto from '../img/respeto.png';
import '../styles/home.css';
import { Header, Image, Container, Grid } from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import IntroAEI from '../mp4/Intro_AEI.mp4';

export default class home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='portada'>
                    <Header textAlign='center'>
                        <h1>Asociación de Escoltas Intercontinentales</h1>
                    </Header>
                    <Image centered src={logo} />
                </div>
                <div className='bienvenida'>
                    <h1>Bienvenida</h1>
                    <hr />
                    <p>
                        Bienvenidos(as) a la Asociación de Escoltas Intercontinentales, partícipes del desarrollo a la innovación
                        en el área de la seguridad. Aquí podrás apreciar información acerca de nuestros objetivos, ambiciones y sueños.
                        También encontrarás los productos y servicios que nuestra Asociación ofrece, así como los excelentes beneficios que nuestros
                        miembros gozan por medio de estos.
                    </p>
                </div>
                <div className='frase'>
                    <p>
                        "Tus habilidades te hacen ser único"
                        <br />
                        <b>¡Unidos por la seguridad!</b>
                    </p>
                </div>
                <div className='qSomos'>
                    <p>
                        Somos una asociación comprometida a brindar apoyo de diversos modos a la sociedad y al personal que labora
                        en el área de la Protección Ejecutiva, además de que buscamos dignificar la profesión de lo que es ser un <b>«Escolta»</b>.
                    </p>
                    <hr />
                    <h1>¿Quiénes Somos?</h1>
                </div>
                <div className='directora'>
                    <Header id='nombreCargo'>
                        <h1>Ninfa Cardiel De Santiago</h1>
                        <h2>Directora General</h2>
                    </Header>
                    <Container text id='descripcion'>
                        <p>
                            Mujer trabajadora, brillante, optimista y carismática, con sueños y ambiciones en los que hace uso de todo su
                            esfuerzo para realizarlos. <i>Escolta y Escritora</i> son algunos de sus títulos con los que es reconocida
                            internacionalmente, pero en esta ocasión... "Directora de la Asociación de Escoltas Intercontinentales", la cual
                            planea llevar el mando hasta que los objetivos y metas de la misma se cumplan, marcando así una diferencia en el
                            área de la seguridad ejecutiva.
                        </p>
                    </Container>
                </div>
                <div className='misvisval'>
                    <div id='mision'>
                        <h1>Misión</h1>
                        <p>
                            Brindar diversos apoyos a la comunidad en el nombre de la protección ejecutiva para el beneficio de la sociedad,
                            así como fomentar el conocimiento general de esta área de la seguridad y todo lo relacionado para reducir cada
                            vez más la incultura, obteniendo de esto un beneficio a futuro para la sociedad, de la misma manera, brindar
                            asistencias al personal involucrado en el área de la seguridad para que puedan desarrollarse plenamente en
                            diversos ámbitos.
                        </p>
                    </div>
                    <div id='valores'>
                        <h1>Valores Fundamentales de la Asociación</h1>
                        <Grid id='vIco' columns={5} centered>
                            <Grid.Row verticalAlign='middle'>
                                <Grid.Column>
                                    <div id='sabiduria'>
                                        <Image src={sabiduria} />
                                        <br />
                                        <span>Sabiduría</span>
                                    </div>
                                    <div id='respeto'>
                                        <Image src={respeto} />
                                        <br />
                                        <span>Respeto</span>
                                    </div>
                                </Grid.Column>
                                <Grid.Column></Grid.Column>
                                <Grid.Column>
                                    <div id='honor'>
                                        <Image src={honor} />
                                        <br />
                                        <span>Honor</span>
                                    </div>
                                </Grid.Column>
                                <Grid.Column></Grid.Column>
                                <Grid.Column>
                                    <div id='lealtad'>
                                        <Image src={lealtad} />
                                        <br />
                                        <span>Lealtad</span>
                                    </div>
                                    <div id='solidaridad'>
                                        <Image src={solidaridad} />
                                        <br />
                                        <span>Solidaridad</span>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                    <div id='vision'>
                        <h1>Visión</h1>
                        <p>
                            Ser una asociación prestigiosa y reconocida a nivel intercontinental en el área de la seguridad,
                            llevando de la mano la confianza y el valor de muchas personas para el beneficio tanto del personal
                            involucrado en esta área como de la misma sociedad.
                        </p>
                    </div>
                    <div id='linea1'>
                        <hr />
                    </div>
                    <div id='linea2'>
                        <hr />
                    </div>
                    <div id='linea3'>
                        <hr />
                    </div>
                    <div id='linea4'>
                        <hr />
                    </div>
                </div>
                <div id='videoIntroductorio'>
                    <h1>¿Qué es un Escolta?</h1>
                    <ReactPlayer
                        id='videoAEI'
                        url={IntroAEI}
                        controls
                    />
                </div>
            </div>
        );
    }
}