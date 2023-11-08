
import React, { useState } from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { FormGroup, TextField, Typography } from '@mui/material';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import patient_profile from '../assets/img/feature/patient-profile-page.jpg';
import classes from '../assets/css/custom.module.css';



export default function Patient_Profile() {


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
                        <Box sx={{
                            position: "absolute", top: "50%",
                            transform: "translateY(-50%)", p: 3, fontSize: "2rem", zIndex: 1, color: "#fff", fontWeight: "600"
                        }}>
                            <Typography sx={{
                                fontSize: "2rem", color: "#fff", fontWeight: "600"
                            }}>PatientUser</Typography>

                            <Button variant="contained" sx={{
                                backgroundColor: "#fff", color: "#5e72e4", fontWeight: "600", '&:hover': {
                                background: '#fff'
                                }
                            }}>Edit Profile</Button>
                        </Box>

                    </Box>

                    <Box position="relative">
                        <Grid container spacing={2}>
                            <Grid item lg={8} md={12}>
                                <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                                    <CardContent>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                            <Typography sx={{ fontWeight: "600", color: "#525f7f", marginBottom: "1rem" }}>Edit profile</Typography>
                                            <Button variant="contained">setting</Button>
                                        </Box>
                                        <hr />
                                        <Box>
                                            <FormGroup>
                                                <Typography sx={{ paddingY: "1rem" }}>USER INFORMATION</Typography>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                        <TextField
                                                            id="outlined-required"
                                                            label="Username"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                        <TextField
                                                            id="outlined-required"
                                                            label="Email address"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                        <TextField
                                                            id="outlined-required"
                                                            label="First name"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                        <TextField
                                                            id="outlined-required"
                                                            label="Last name"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Typography sx={{ paddingY: "1rem" }}>CONTACT INFORMATION</Typography>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={12} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                        <TextField
                                                            id="outlined-required"
                                                            label="Address"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={4} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                        <TextField
                                                            id="outlined-required"
                                                            label="City"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item lg={4} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                        <TextField
                                                            id="outlined-required"
                                                            label="Country"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item lg={4} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                        <TextField
                                                            id="outlined-required"
                                                            label="Postal code"
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Typography sx={{ paddingY: "1rem" }}>ABOUT ME</Typography>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={12} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                        <TextField
                                                            id="outlined-multiline-static"
                                                            label="About Me"
                                                            multiline
                                                            rows={6}
                                                            variant="outlined"
                                                            fullWidth
                                                            sx={{ marginTop: "1rem" }}
                                                        />
                                                    </Grid>
                                                </Grid>


                                            </FormGroup>
                                            <Button variant="contained">Submit</Button>
                                        </Box>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <Card sx={{ marginTop: "-3rem", zIndex: 9999 }} className={classes.CardMr}>
                                    <CardMedia
                                        sx={{ height: 255 }}
                                        image={patient_profile}
                                        title="Patient Profile"
                                    />
                                    <CardContent sx={{ textAlign: "center" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                            <Button variant="contained">Connect</Button>
                                            <Button variant="contained">Message</Button>
                                        </Box>

                                        <Typography>patientuser</Typography>
                                        <Typography>patientuser@gmail.com</Typography>
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
