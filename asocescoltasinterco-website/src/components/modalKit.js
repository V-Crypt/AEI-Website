import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import '../styles/modalKit.css';
import kit from '../img/kit.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseUrl } from '../config.js';

function ModalKit() {
    const [open, setOpen] = React.useState(false);
    const configuracion = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: 'fotosKit'
    };
    return (
        <Modal id='modalKit'
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Button id='kitButton'>
                <img alt='Kit' src={kit} />
            </Button>}
        >
            <Modal.Content style={{ padding: 140 }}>
                <Slider {...configuracion}>
                    <div>
                        <img width='100%' alt='Kit 1' src={baseUrl + '/kit_1.png'} />
                    </div>
                    <div>
                        <img width='100%' alt='Kit 2' src={baseUrl + '/kit_2.png'} />
                    </div>
                </Slider>
            </Modal.Content>
        </Modal>
    )
};

export default ModalKit;