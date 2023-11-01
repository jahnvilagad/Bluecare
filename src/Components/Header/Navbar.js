import logo from './logo.svg';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from '@mui/styled-engine-sc';
// import styled from '@emotion/styled';
// import './Navbar.css';


// const AppBar = styled((theme) => ({
   
//         backgroundColor: "unset",
   
// }));


export default function Navbar() {
    // const classes = usestyles();

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: "white" , boxShadow: "unset"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Typography>
                    <Button variant='contained'>Login</Button>
                </Toolbar>
            </AppBar>
            <h1>test</h1>

        </div>
    )
}
