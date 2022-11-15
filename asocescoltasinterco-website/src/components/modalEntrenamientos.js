import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import '../styles/modalEntrenamientos.css';
import entrenamientos from '../img/entrenamientos.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseUrl } from '../config.js';

function ModalEntrenamientos() {
    const [open, setOpen] = React.useState(false);
    const configuracion = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: 'fotosEntrenamientos'
    };
    return (
        <Modal id='modalEntrenamientos'
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Button id='entrenamientosButton'><img alt='Entrenamientos' src={entrenamientos} /></Button>}
        >
            <Modal.Content>
                <Slider {...configuracion}>
                    <div>
                        <img width='100%' alt='Entrenamiento 1' src={baseUrl + '/entrenamiento_1.png'} />
                    </div>
                    <div>
                        <img width='100%' alt='Entrenamiento 2' src={baseUrl + '/entrenamiento_2.jpeg'} />
                    </div>
                    <div>
                        <img width='100%' alt='Entrenamiento 3' src={baseUrl + '/entrenamiento_3.jpeg'} />
                    </div>
                    <div>
                        <img width='100%' alt='Entrenamiento 4' src={baseUrl + '/entrenamiento_4.jpeg'} />
                    </div>
                </Slider>
            </Modal.Content>
        </Modal>
    )
};

export default ModalEntrenamientos;