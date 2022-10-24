import React from 'react';
import Navbar from './navbar.js';
import { Grid } from 'semantic-ui-react'

export default function Inicio() {
    return (
        <div className='inicio'>
            <Grid padded>
                <Grid.Row>
                    <Navbar />
                </Grid.Row>
                <Grid.Row>
                    {/*...*/}
                </Grid.Row>
            </Grid>
        </div>
    )
}