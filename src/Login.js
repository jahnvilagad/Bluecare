import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from './assets/img/logo/white.png';
import classes from './assets/css/custom.module.css';
import { Typography } from '@mui/material';


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Login(props) {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <Box position='relative'>
                <CssBaseline />
                <ElevationScroll {...props}>
                    <AppBar className={classes.AppBar}>
                        <Container>
                            <Toolbar sx={{ paddingY: '2rem', paddingX: '0px !important', justifyContent: 'space-between' }}>
                                <img src={logo} alt='logo' height={60} />
                                <Box>
                                    <Button variant='text' onClick={() => navigate('/')} sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                        Login
                                    </Button>
                                    <Button variant='text' onClick={() => navigate('/')} sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                        Register
                                    </Button>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </ElevationScroll>
                <Toolbar />
                {/* <Box height={70}/> */}
                    <Box sx={{ my: 2 }}>
                        <Box className={classes.BgColor} sx={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 9%, 100% 0);',
                        position: 'fixed',bottom: '0',width: '100%' }}>
                            <Grid container spacing={2} alignItems="center" justifyContent="center">
                                <Grid item lg={6} md={6} sm={12}>
                                    <Card sx={{ margin: "1.5rem", border: '3px solid #172b4d', background: '#f7fafc' }}>
                                        <CardContent>
                                            <Box sx={{ width: '100%' }} align='center'>
                                                <Typography gutterBottom>Sign UP</Typography>

                                                <TextField
                                                    id="outlined-required"
                                                    label="Username"
                                                    variant="outlined"
                                                    fullWidth
                                                    sx={{ marginBottom: '1.5rem' }}
                                                />

                                                <TextField
                                                    id="outlined-required"
                                                    label="Email"
                                                    variant="outlined"
                                                    fullWidth
                                                    sx={{ marginBottom: '1.5rem' }}
                                                />
                                                <TextField
                                                    id="outlined-required"
                                                    label="Password"
                                                    variant="outlined"
                                                    fullWidth
                                                    sx={{ marginBottom: '1.5rem' }}
                                                />
                                                <TextField
                                                    id="outlined-required"
                                                    label="Confirm Password"
                                                    variant="outlined"
                                                    fullWidth
                                                    sx={{ marginBottom: '1.5rem' }}
                                                />

                                                <Button variant='contained' onClick={() => navigate('/')}>
                                                    Create Account
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

            </Box>


        </React.Fragment>
    );
}