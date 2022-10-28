import React from 'react';
import Navbar from './navbar.js';
import Shop from './shop.js';
import { Grid } from 'semantic-ui-react';

export default function Tienda() {
    return (
        <div className='tienda'>
            <Grid padded>
                <Grid.Row>
                    <Navbar />
                </Grid.Row>
                <Grid.Row>
                    <Shop />
                </Grid.Row>
            </Grid>
        </div>
    )
}