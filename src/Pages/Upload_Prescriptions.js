import React from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FormControl, FormGroup, Input, InputLabel, Select, Typography } from '@mui/material';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Prescriptions() {
    return (
        <>
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Box className={classes.ImgOverlay} sx={{
                        backgroundImage: `url(${profile_cover})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "250px",
                        position: "relative",
                    }} >
                        <Typography sx={{
                            position: "absolute", top: "50%",
                            transform: "translateY(-50%)", p: 3, fontSize: "2rem", zIndex: 1, color: "#fff", fontWeight: "600"
                        }}>Upload Prescription</Typography>
                    </Box>

                    <Box position="relative">
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                                    <CardContent>
                                        <FormGroup>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <FormControl fullWidth>
                                                        <InputLabel>First Name</InputLabel>
                                                        <Input />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <FormControl fullWidth>
                                                        <InputLabel>Last Name</InputLabel>
                                                        <Input />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <FormControl fullWidth>
                                                        <InputLabel>Mobile Number</InputLabel>
                                                        <Input />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <FormControl fullWidth>
                                                        <InputLabel>Email</InputLabel>
                                                        <Input />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <FormControl fullWidth>
                                                        <InputLabel>Facility Name</InputLabel>
                                                        <Select />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                        </FormGroup>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>


                </Box>


            </Box>
        </>
    )
}
