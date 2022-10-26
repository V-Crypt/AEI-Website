import React from 'react';
import Navbar from './navbar.js';
import Contact from './contact.js';
import { Grid } from 'semantic-ui-react';

export default function contacto() {
    return (
        <div className='inicio'>
            <Grid padded>
                <Grid.Row>
                    <Navbar />
                </Grid.Row>
                <Grid.Row>
                    <Contact />
                </Grid.Row>
            </Grid>
        </div>
    )
}