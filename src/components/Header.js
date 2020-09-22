import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={10}
                    direction="row"
                    >
                        <Grid item xs={2}>
                            <Typography variant="h6">
                                colrmake-kitty
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;