
import React, { useState } from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { FormControl, FormGroup, TextField, Typography } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ExploreIcon from '@mui/icons-material/Explore';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import user_img from '../assets/img/feature/user-img.jpg';
import classes from '../assets/css/custom.module.css';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Appointment_Request() {

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
                        }}>Appointment Request</Typography>
                    </Box>

                    <Box position="relative">
                        <Grid container spacing={2}>
                            <Grid item lg={12} md={12}>
                                <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item lg={6} md={12}>
                                                <Typography sx={{ fontWeight: "600", color: "#525f7f", marginBottom: "1rem" }}>Appointment Details</Typography>
                                                <hr />
                                                <Grid container spacing={2}>
                                                    <Grid item lg={4} md={12}>
                                                        <img src={user_img} alt='User Img' />
                                                    </Grid>
                                                    <Grid item lg={8} md={12}>
                                                        <Typography variant='h5' color="#32325d">Ms. Stacey Ann Hoilett MT ASCPi,</Typography>
                                                        <Typography>Laboratory</Typography>
                                                        <Typography color="#525f7f" sx={{marginTop: "1rem"}} display="flex"><WatchLaterIcon sx={{marginRight: "10px"}}/> 7:40 PM</Typography>
                                                        <Typography color="#525f7f" sx={{marginTop: "1rem"}} display="flex"><CalendarMonthIcon sx={{marginRight: "10px"}}/> 31/10/2023</Typography>
                                                        <Typography color="#525f7f" sx={{marginTop: "1rem"}} display="flex"><LocalHospitalIcon sx={{marginRight: "10px"}}/> Clinic Visit</Typography>
                                                        <Typography color="#525f7f" sx={{marginTop: "1rem"}} display="flex"><ExploreIcon sx={{marginRight: "10px"}}/> Suzie Turn</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} sx={{marginTop: "1rem"}}>
                                                    <Grid item lg={4} md={12}>
                                                        <Typography sx={{ fontWeight: "600", color: "#525f7f", marginBottom: "1rem" }}>Appointment Type</Typography>
                                                        <FormControl>
                                                        <RadioGroup
                                                            row
                                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                                            name="row-radio-buttons-group"
                                                        >
                                                            <FormControlLabel value="female" control={<Radio />} label="New" />
                                                            <FormControlLabel value="male" control={<Radio />} label="Follow Up" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item lg={6} md={12}>
                                                <Typography sx={{ fontWeight: "600", color: "#525f7f", marginBottom: "1rem" }}>Patient Details</Typography>
                                                <hr />
                                                <FormGroup>
                                                    <Grid container spacing={2} sx={{ marginTop: ".25rem" }}>
                                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                            <TextField
                                                                id="outlined-required"
                                                                label="First Name"
                                                                focused
                                                                variant="outlined"
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                            <TextField
                                                                id="outlined-required"
                                                                label="Last Name"
                                                                focused
                                                                variant="outlined"
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2}>
                                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                            <FormControl>
                                                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                >
                                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                                <DemoContainer components={['DatePicker']}>
                                                                    <DatePicker label="dd-mm-yyyy" sx={{ width: "100%" }} />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2}>
                                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                            <TextField
                                                                id="outlined-required"
                                                                label="Mobile Number"
                                                                focused
                                                                variant="outlined"
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                            <TextField
                                                                id="outlined-required"
                                                                label="Email"
                                                                focused
                                                                variant="outlined"
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2}>
                                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                            <TextField
                                                                id="outlined-required"
                                                                label="Problem"
                                                                focused
                                                                variant="outlined"
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                    </Grid>


                                                </FormGroup>
                                                <Button variant="contained">Book Appointment</Button>
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
