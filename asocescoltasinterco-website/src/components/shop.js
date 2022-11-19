import React, { Component } from 'react';
import '../styles/shop.css';
import { Image, Button, Icon } from 'semantic-ui-react';
import kit from '../img/kitLogo.png';
import libroAIALS from '../img/libroAIALS.jpg';
import libroEGVDUE from '../img/libroEGVDUE.jpeg';
import libroSDLO from '../img/libroSDLO.jpg';
import serviciosEscoltas from '../img/serviciosEscoltas.jpeg';

export default class shop extends Component {
    render() {
        return (
            <div className='shop'>
                <div id='titulos'>
                    <h1>Membresía</h1>
                </div>
                <div className='kitTienda'>
                    <Image alt='Kit de la asociación' src={kit} />
                    <h2>$14,999<br /><span>Envío gratis</span></h2>
                    <p>Puedes ver los beneficios del KIT en la sección "Galería".</p>
                    <a href="/">
                        <Button animated color='black'>
                            <Button.Content visible>Comprar</Button.Content>
                            <Button.Content hidden><Icon name='money' /></Button.Content>
                        </Button>
                    </a>
                </div>
                <div id='titulos'>
                    <h1>Libros</h1>
                </div>
                <div className='librosTienda'>
                    <div className='libroAIALS'>
                        <Image alt='Libro 1' src={libroAIALS} />
                        <h2>$14,999<br /><span>Envío gratis</span></h2>
                        <p>En este libro, conocerás a Sofia, una mujer aventurera y apasionada,
                            quién viajo al extranjero para seguir su pasión, sin imaginar que en
                            un país extranjero encontraría a su fuente de amor e inspiración.</p>
                        <a href="/">
                            <Button animated color='black'>
                                <Button.Content visible>Comprar</Button.Content>
                                <Button.Content hidden><Icon name='money' /></Button.Content>
                            </Button>
                        </a>
                    </div>
                    <div className='libroEGVDUE'>
                        <Image alt='Libro 2' src={libroEGVDUE} />
                        <h2>$14,999<br /><span>Envío gratis</span></h2>
                        <p>Con este libro, entenderás la importancia de la profesión de ser un honorable
                            Escolta, su preparación para combatir la inseguridad y proteger a coste de su
                            vida a su VIP, así como historias reales de Escoltas y mucho más.</p>
                        <a href="/">
                            <Button animated color='black'>
                                <Button.Content visible>Comprar</Button.Content>
                                <Button.Content hidden><Icon name='money' /></Button.Content>
                            </Button>
                        </a>
                    </div>
                    <div className='libroSDLO'>
                        <Image alt='Libro 3' src={libroSDLO} />
                        <h2>$14,999<br /><span>Envío gratis</span></h2>
                        <p>En este libro, conocerás a Laura, una mujer que vivió por momentos oscuros en su
                            vida por culpa de un ambiente familiar alcohólico, lo que dará pie a reflexiones
                            profundas y maneras en como ella logró salir adelante.</p>
                        <a href="/">
                            <Button animated color='black'>
                                <Button.Content visible>Comprar</Button.Content>
                                <Button.Content hidden><Icon name='money' /></Button.Content>
                            </Button>
                        </a>
                    </div>
                </div>
                <div id='titulos'>
                    <h1>Servicios</h1>
                </div>
                <div className='serviciosTienda'>
                    <Image alt='Servicios de Escoltas' src={serviciosEscoltas} />
                    <p>Servicios de Escoltas altamente capacitados para proteger de manera invaluable a sus VIP,
                        con su respectiva documentación y con los valores bien cimentados que se profesan en
                        nuestra Asociación.</p>
                    <a href="/contacto">
                        <Button animated color='black'>
                            <Button.Content visible>Contáctanos</Button.Content>
                            <Button.Content hidden><Icon name='phone' /></Button.Content>
                        </Button>
                    </a>
                </div>
                <div className='notaServicios'>
                    <h3><b>Aviso Importante</b></h3>
                    <p>Si requiere de estos servicios, favor de ponerse en contacto con la Directora de manera directa,
                        comunicándose a su respectivo número.<br />¡Gracias por elegirnos!</p>
                </div>
            </div>
        );
    }
}