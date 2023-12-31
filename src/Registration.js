import React, { useState } from 'react';
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
import axios from 'axios';


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

export default function Registation(props) {
    const [formData, setFormData] = useState({
        // uname: '',
        email: '',
        password: '',
        // cpassword: ''
    })
    console.log(formData);
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;
        let validationError = {}
        if (formData.uname === '' || formData.uname === null) {
            isvalid = false;
            validationError.uname = 'Username required'
        }
        if (formData.email === '' || formData.email === null) {
            isvalid = false;
            validationError.email = 'Email required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isvalid = false;
            validationError.email = 'Email is not valid'
        }
        if (formData.password === '' || formData.password === null) {
            isvalid = false;
            validationError.password = 'Password required'
        } else if (formData.password.length < 6) {
            isvalid = false;
            validationError.email = 'password length at least 6 char'
        }
        // if (formData.cpassword !== formData.password) {
        //     isvalid = false;
        //     validationError.cpassword = 'Confirm Password not match'
        // }
        setErrors(validationError)
        setValid(isvalid)

        if (Object.keys(validationError).length === 0) {
            console.log("Axios POST request sent....");
            axios.post('https://reqres.in/api/register', formData)
            .then(result =>{
                console.log(result);
                navigate('/')
            })
            .catch(err => console.log(err))
        }
    }

    
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
                                    <Button variant='text' onClick={() => navigate('/register')} sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                        Register
                                    </Button>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </ElevationScroll>
                <Toolbar />
                <Box height={70} />
                <Box sx={{ my: 2 }}>
                    <Box>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item lg={5} md={6} sm={12}>
                                <Card sx={{ border: '3px solid #172b4d', background: '#f7fafc' }}>
                                    <CardContent sx={{ padding: "1.5rem" }}>
                                        <Box sx={{ width: '100%' }} align='center'>
                                            <form onSubmit={handleSubmit}>
                                                <Typography sx={{ fontSize: "1.5rem", fontWeight: "600", color: "#32325d", marginBottom: "1rem" }}>Sign UP</Typography>
                                                {
                                                    valid ? <></> :
                                                        <span className={classes.TextRed}>
                                                            {errors.uname}; {errors.email}; {errors.password}; 
                                                        </span>

                                                }
                                                {/* <TextField
                                                    id="outlined-required"
                                                    label="Username"
                                                    placeholder='Enter Username'
                                                    variant="outlined"
                                                    fullWidth
                                                    sx={{ marginBottom: '1.5rem' }}
                                                    onChange={(event) => setFormData({ ...formData, uname: event.target.value })}
                                                /> */}
                                                <TextField
                                                    id="outlined-required"
                                                    label="Email"
                                                    placeholder='Enter Email ID'
                                                    variant="outlined"
                                                    type="email"
                                                    fullWidth
                                                    sx={{ marginBottom: '1.5rem' }}
                                                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                                                />
                                                <TextField
                                                    id="outlined-required"
                                                    label="Password"
                                                    placeholder='Enter Password'
                                                    variant="outlined"
                                                    type="password"
                                                    fullWidth
                                                    sx={{ marginBottom: '1.5rem' }}
                                                    onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                                />
                                                {/* <TextField
                                                    id="outlined-required"
                                                    label="Confirm Password"
                                                    placeholder='Enter Confirm Password'
                                                    variant="outlined"
                                                    type="password"
                                                    fullWidth
                                                    sx={{ marginBottom: '1.5rem' }}
                                                    onChange={(event) => setFormData({ ...formData, cpassword: event.target.value })}
                                                /> */}

                                                <Button variant='contained' type='submit'>
                                                    Create Account
                                                </Button>
                                            </form>
                                        </Box>
                                    </CardContent>
                                </Card>

                                <Box sx={{ my: 2 }}>
                                    <Button variant='text' onClick={() => navigate('/')} sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                                        Login
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>


        </React.Fragment>
    );
}