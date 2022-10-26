import React from 'react';
import Navbar from './navbar.js';
import Galery from './galery.js';
import { Grid } from 'semantic-ui-react';

export default function Galeria() {
    return (
        <div className='inicio'>
            <Grid padded>
                <Grid.Row>
                    <Navbar />
                </Grid.Row>
                <Grid.Row>
                    <Galery />
                </Grid.Row>
            </Grid>
        </div>
    )
}