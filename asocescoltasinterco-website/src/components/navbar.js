/**
 * navbar.js tiene todo el contenido del menú.
 * */

import React, { Component } from 'react';
import image from '../img/AEI_logo.png';
import '../styles/navbar.css';
import { Button, Icon } from 'semantic-ui-react';

export default class navbar extends Component {
    state = {}
    handleClick = () =>
        this.setState((prevState) => ({ active: !prevState.active }))
    render() {
        const { active } = this.state
        return (
            <div className="topNav">
                <img alt='logo' src={image} />
                <a href="/contacto">
                    <Button animated inverted fluid>
                        <Button.Content visible>Contacto</Button.Content>
                        <Button.Content hidden><Icon name='phone' /></Button.Content>
                    </Button>
                </a>
                <a href="/tienda">
                    <Button animated inverted fluid>
                        <Button.Content visible>Tienda</Button.Content>
                        <Button.Content hidden><Icon name='shop' /></Button.Content>
                    </Button>
                </a>
                <a href="/galeria">
                    <Button animated inverted fluid>
                        <Button.Content visible>Galeria</Button.Content>
                        <Button.Content hidden><Icon name='photo' /></Button.Content>
                    </Button>
                </a>
                <a href="/">
                    <Button toggle active={active} onClick={this.handleClick} animated fluid>
                        <Button.Content hidden>Inicio</Button.Content>
                        <Button.Content visible><Icon name='home' /></Button.Content>
                    </Button>
                </a>
            </div>
        );
    }
}