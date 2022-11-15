import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import '../styles/modalEscoltas.css';
import escoltas from '../img/escoltas.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseUrl } from '../config.js';

function ModalEscoltas() {
    const [open, setOpen] = React.useState(false);
    const configuracion = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: 'fotosEscoltas'
    };
    return (
        <Modal id='modalEscoltas'
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Button id='escoltasButton'>
                <img alt='Escoltas' src={escoltas} />
            </Button>}
        >
            <Modal.Content style={{ padding: 140 }}>
                <Slider {...configuracion}>
                    <div>
                        <img width='100%' alt='Escolta 1' src={baseUrl + '/escolta_1.jpeg'} />
                    </div>
                    <div>
                        <img width='100%' alt='Escolta 2' src={baseUrl + '/escolta_2.jpeg'} />
                    </div>
                    <div>
                        <img width='100%' alt='Escolta 3' src={baseUrl + '/escolta_3.jpeg'} />
                    </div>
                </Slider>
            </Modal.Content>
        </Modal>
    )
};

export default ModalEscoltas;