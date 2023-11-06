
import React, { useState } from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FormGroup, TextField, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';



const country = [
    { label: 'India' },
    { label: 'India' },
];


export default function Profile() {
    const [selectedId, setSelectedId] = useState(false);

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
                        }}>Profile</Typography>
                    </Box>

                    <Box position="relative">
                        <Grid container spacing={2}>
                            <Grid item lg={12} md={12}>
                                <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                                    <CardContent>
                                        <Grid container spacing={2} sx={{ borderBottom: "1px solid #e9ecef", paddingBottom: "10px" }}>
                                            <Grid item lg={4}>
                                                <Button>
                                                    Change Password
                                                </Button>
                                            </Grid>
                                            <Grid item lg={4}>
                                                <Button onClick={() => setSelectedId(prev => !prev)}>Update Address</Button>
                                            </Grid>
                                        </Grid>
                                        <Box height={20}></Box>
                                        <Grid container spacing={2}>
                                            <Grid item lg={6} md={6} sm={12} sx={{ width: "100%" }}>
                                                <Typography variant='h2' sx={{ fontWeight: "600", color: "#32325d", fontSize: "20px" }}>Personal Details</Typography>
                                                <Typography sx={{ marginTop: "10px", color: "#525f7f" }}>MRN : FCM-019272</Typography>
                                                <Typography sx={{ marginTop: "10px", color: "#525f7f" }}>Gender : test</Typography>
                                                <Typography sx={{ marginTop: "10px", color: "#525f7f" }}>Date of Birth :</Typography>
                                                <Typography sx={{ marginTop: "10px", color: "#525f7f" }}>Upcoming Appointments : 0</Typography>

                                                <Box height={20}></Box>
                                                <Typography variant='h2' sx={{ fontWeight: "600", color: "#32325d", fontSize: "20px" }}>Communication Details</Typography>
                                                <Typography sx={{ marginTop: "10px", color: "#525f7f" }}>Cell Phone :</Typography>
                                                <Typography sx={{ marginTop: "10px", color: "#525f7f" }}>Email :</Typography>
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={12} sx={{ width: "100%" }}>
                                                {selectedId && (
                                                    <>
                                                        <Typography sx={{ fontWeight: "600", color: "#32325d", fontSize: "20px" }}>Address</Typography>
                                                        <Box height={30}></Box>
                                                        <FormGroup>
                                                            <TextField
                                                                id="outlined-required"
                                                                label="Address"
                                                                variant="outlined"
                                                                fullWidth
                                                                sx={{ marginBottom: "2rem" }}
                                                            />
                                                            <TextField
                                                                id="outlined-required"
                                                                label="Island"
                                                                variant="outlined"
                                                                fullWidth
                                                                sx={{ marginBottom: "2rem" }}
                                                            />
                                                            <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={country}
                                                                renderInput={(params) => <TextField {...params} label="Country" />}
                                                                sx={{ marginBottom: "2rem" }}
                                                            />
                                                            <Button variant="contained" sx={{ width: "auto" }}>Submit</Button>
                                                        </FormGroup>
                                                    </>
                                                )}

                                            </Grid>
                                        </Grid>

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
