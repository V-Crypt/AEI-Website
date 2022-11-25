/**
 * Debido a que esta sección, por alguna razón desconocida, no aceptaba acentos se tuvo que cambiar estos caractéres por su respectivo 'Número HTML'.
 * */

import React from 'react';
import '../styles/shop.css';
import { Image } from 'semantic-ui-react';
import kit from '../img/kitLogo.png';
import libroAIALS from '../img/libroAIALS.jpg';
import libroEGVDUE from '../img/libroEGVDUE.jpeg';
import libroSDLO from '../img/libroSDLO.jpg';
import serviciosEscoltas from '../img/serviciosEscoltas.jpeg';
import PaypalCheckoutButton from './paypalCheckoutButton.js';

const Shop = () => {
    const product = {
        description: 'Kit',
        price: 14999
    };
    return (
        <div className='shop'>
            <div id='titulos'>
                <h1>Membres&#237;a</h1>
            </div>
            <div className='kitTienda'>
                <Image alt='Kit de la asociaci&#243;n' src={kit} />
                <h2>$14,999<br /><span>Env&#237;o gratis</span></h2>
                <p>Puedes ver los beneficios del KIT en la secci&#243;n "Galer&#237;a".</p>
                <div id='paypalKitButton'>
                    <PaypalCheckoutButton product={product} />
                </div>
                {/*<a href="/">
                    <Button animated color='black'>
                        <Button.Content visible>Comprar</Button.Content>
                        <Button.Content hidden><Icon name='money' /></Button.Content>
                    </Button>
                </a>*/}
            </div>
            <div id='titulos'>
                <h1>Libros</h1>
            </div>
            <div className='librosTienda'>
                <div className='libroAIALS'>
                    <Image alt='Libro 1' src={libroAIALS} />
                    <h2>$14,999<br /><span>Env&#237;o gratis</span></h2>
                    <p>En este libro, conocer&#225;s a Sofia, una mujer aventurera y apasionada,
                        qui&#233;n viajo al extranjero para seguir su pasi&#243;n, sin imaginar que en
                        un pa&#237;s extranjero encontrar&#237;a a su fuente de amor e inspiraci&#243;n.</p>
                    {/*<a href="/">
                        <Button animated color='black'>
                            <Button.Content visible>Comprar</Button.Content>
                            <Button.Content hidden><Icon name='money' /></Button.Content>
                        </Button>
                    </a>*/}
                </div>
                <div className='libroEGVDUE'>
                    <Image alt='Libro 2' src={libroEGVDUE} />
                    <h2>$14,999<br /><span>Env&#237;o gratis</span></h2>
                    <p>Con este libro, entender&#225;s la importancia de la profesi&#243;n de ser un honorable
                        Escolta, su preparaci&#243;n para combatir la inseguridad y proteger a coste de su
                        vida a su VIP, as&#237; como historias reales de Escoltas y mucho m&#225;s.</p>
                    {/*<a href="/">
                        <Button animated color='black'>
                            <Button.Content visible>Comprar</Button.Content>
                            <Button.Content hidden><Icon name='money' /></Button.Content>
                        </Button>
                    </a>*/}
                </div>
                <div className='libroSDLO'>
                    <Image alt='Libro 3' src={libroSDLO} />
                    <h2>$14,999<br /><span>Env&#237;o gratis</span></h2>
                    <p>En este libro, conocer&#225;s a Laura, una mujer que vivi&#243; por momentos oscuros en su
                        vida por culpa de un ambiente familiar alcoh&#243;lico, lo que dar&#225; pie a reflexiones
                        profundas y maneras en como ella logr&#243; salir adelante.</p>
                    {/*<a href="/">
                        <Button animated color='black'>
                            <Button.Content visible>Comprar</Button.Content>
                            <Button.Content hidden><Icon name='money' /></Button.Content>
                        </Button>
                    </a>*/}
                </div>
            </div>
            <div id='titulos'>
                <h1>Servicios</h1>
            </div>
            <div className='serviciosTienda'>
                <Image alt='Servicios de Escoltas' src={serviciosEscoltas} />
                <p>Servicios de Escoltas altamente capacitados para proteger de manera invaluable a sus VIP,
                    con su respectiva documentaci&#243;n y con los valores bien cimentados que se profesan en
                    nuestra Asociaci&#243;n.</p>
                {/*<a href="/contacto">
                    <Button animated color='black'>
                        <Button.Content visible>Contáctanos</Button.Content>
                        <Button.Content hidden><Icon name='phone' /></Button.Content>
                    </Button>
                </a>*/}
            </div>
            <div className='notaServicios'>
                <h3><b>Aviso Importante</b></h3>
                <p>Si requiere de estos servicios, favor de ponerse en contacto con la Directora de manera directa,
                    comunic&#225;ndose a su respectivo n&#250;mero.<br />&#161;Gracias por elegirnos!</p>
            </div>
        </div>
    );
};

export default Shop;