import React, { useState } from 'react';
import escudo from '../img/escudo.png';
import '../styles/footer.css';
import { Button, Icon, Image } from 'semantic-ui-react';

const Footer = () => {
    const [setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);
    return (
        <div className='footer'>
            <div id='logo'>
                <Image centered src={escudo} />
            </div>
            <div id='volverArriba'>
                <Button onClick={scrollToTop} animated basic inverted fluid>
                    <Button.Content visible><Icon name='arrow circle up' /></Button.Content>
                    <Button.Content hidden>Regresar</Button.Content>
                </Button>
            </div>
            <div id='hr1'>
                <hr />
            </div>
            <div id='copyright'>
                <p>Copyright ©2022 Asociación de Escoltas Intercontinentales</p>
            </div>
        </div>
    );
}

export default Footer;