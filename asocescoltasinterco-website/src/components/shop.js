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
                    <h1>Membres�a</h1>
                </div>
                <div className='kitTienda'>
                    <Image alt='Kit de la asociaci�n' src={kit} />
                    <h2>$14,999<br /><span>Env�o gratis</span></h2>
                    <p>Puedes ver los beneficios del KIT en la secci�n "Galer�a".</p>
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
                        <h2>$14,999<br /><span>Env�o gratis</span></h2>
                        <p>En este libro, conocer�s a Sofia, una mujer aventurera y apasionada,
                            qui�n viajo al extranjero para seguir su pasi�n, sin imaginar que en
                            un pa�s extranjero encontrar�a a su fuente de amor e inspiraci�n.</p>
                        <a href="/">
                            <Button animated color='black'>
                                <Button.Content visible>Comprar</Button.Content>
                                <Button.Content hidden><Icon name='money' /></Button.Content>
                            </Button>
                        </a>
                    </div>
                    <div className='libroEGVDUE'>
                        <Image alt='Libro 2' src={libroEGVDUE} />
                        <h2>$14,999<br /><span>Env�o gratis</span></h2>
                        <p>Con este libro, entender�s la importancia de la profesi�n de ser un honorable
                            Escolta, su preparaci�n para combatir la inseguridad y proteger a coste de su
                            vida a su VIP, as� como historias reales de Escoltas y mucho m�s.</p>
                        <a href="/">
                            <Button animated color='black'>
                                <Button.Content visible>Comprar</Button.Content>
                                <Button.Content hidden><Icon name='money' /></Button.Content>
                            </Button>
                        </a>
                    </div>
                    <div className='libroSDLO'>
                        <Image alt='Libro 3' src={libroSDLO} />
                        <h2>$14,999<br /><span>Env�o gratis</span></h2>
                        <p>En este libro, conocer�s a Laura, una mujer que vivi� por momentos oscuros en su
                            vida por culpa de un ambiente familiar alcoh�lico, lo que dar� pie a reflexiones
                            profundas y maneras en como ella logr� salir adelante.</p>
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
                        con su respectiva documentaci�n y con los valores bien cimentados que se profesan en
                        nuestra Asociaci�n.</p>
                    <a href="/contacto">
                        <Button animated color='black'>
                            <Button.Content visible>Cont�ctanos</Button.Content>
                            <Button.Content hidden><Icon name='phone' /></Button.Content>
                        </Button>
                    </a>
                </div>
                <div className='notaServicios'>
                    <h3><b>Aviso Importante</b></h3>
                    <p>Si requiere de estos servicios, favor de ponerse en contacto con la Directora de manera directa,
                        comunic�ndose a su respectivo n�mero.<br />�Gracias por elegirnos!</p>
                </div>
            </div>
        );
    }
}