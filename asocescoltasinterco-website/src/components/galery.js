import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import '../styles/galery.css';
import entrenamientos from '../img/entrenamientos.jpg';
import kit from '../img/kit.jpg';
import escoltas from '../img/escoltas.jpg';

const Galery = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='galery'>
            <div className='entrenamientosDiv'>
                <Modal id='modalEntrenamientos'
                    closeIcon
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button id='entrenamientosButton'>
                        <img id='entrenamientos' alt='Entrenamientos' src={entrenamientos} />
                    </Button>}
                >
                    <Modal.Header id='modalHeaderETOS'>

                    </Modal.Header>
                    <Modal.Content id='modalContentETOS' image>

                    </Modal.Content>
                </Modal>
            </div>
            <div className='kitDiv'>
                <Modal id='modalKit'
                    closeIcon
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button id='kitButton'>
                        <img id='kit' alt='Kit' src={kit} />
                    </Button>}
                >
                    <Modal.Header id='modalHeaderKIT'>

                    </Modal.Header>
                    <Modal.Content id='modalContentKIT' image>

                    </Modal.Content>
                </Modal>
            </div>
            <div className='escoltasDiv'>
                <Modal id='modalEscoltas'
                    closeIcon
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button id='escoltasButton'>
                        <img id='escoltas' alt='Escoltas' src={escoltas} />
                    </Button>}
                >
                    <Modal.Header id='modalHeaderESC'>

                    </Modal.Header>
                    <Modal.Content id='modalContentESC' image>

                    </Modal.Content>
                </Modal>
            </div>
        </div>
    )
};

export default Galery;