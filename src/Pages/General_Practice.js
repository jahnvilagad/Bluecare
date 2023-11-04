
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
import Link from '@mui/material/Link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';
import user_img from '../assets/img/feature/user-img.jpg';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function General_Practice() {
    const [facility, setFacility] = useState();
    const facilityInfo = ["Suzie Turn", "Suzie Turn1", "Suzie Turn2"];

    const navigate = useNavigate()


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
                        }}>General Practice</Typography>
                    </Box>

                    <Box position="relative">
                        <Grid container spacing={2}>
                            <Grid item lg={12} md={12}>
                                <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                                    <CardContent>
                                        <FormGroup>
                                            <Grid container spacing={2}>
                                                <Grid item lg={2} sm={6} xs={12}>
                                                    <img src={user_img} alt='User Img' />
                                                </Grid>
                                                <Grid item lg={4} sm={6} xs={12}>
                                                    <Box>
                                                        <Typography variant='h6'>Dr. Abimbola Afolabi,</Typography>
                                                        <Typography>General Practice</Typography>
                                                        <Link href="#" underline="none" display="flex">More <KeyboardArrowRightIcon /></Link>
                                                    </Box>
                                                </Grid>
                                                <Grid item lg={4} sm={6} xs={12}>
                                                    <Typography sx={{ color: "#2dce89", marginBottom: "2rem" }} display="flex" ><WatchLaterIcon />Available Today</Typography>
                                                    <TextField
                                                        label="Facility Name"
                                                        value={facility}
                                                        onChange={(e) => setFacility(e.target.value)}
                                                        select
                                                        SelectProps={{ native: true }}
                                                        fullWidth
                                                        sx={{ marginBottom: "2rem" }}
                                                    >
                                                        {facilityInfo.map((facility) => (
                                                            <option value={facility} key={facility}>
                                                                {facility}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                    <Button variant="contained" fullWidth>Available Time Slot</Button>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={2}>
                                                <Grid item lg={12}>
                                                    <Typography>Morning</Typography>
                                                    <Button variant="contained" onClick={() => navigate('/appointment_request')}>Next</Button>
                                                    <Typography>Afternoon</Typography>
                                                    <Typography>Evening</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={2}>
                                                <Grid item lg={2} sm={6} xs={12}>
                                                    <img src={user_img} alt='User Img' />
                                                </Grid>
                                                <Grid item lg={4} sm={6} xs={12}>
                                                    <Box>
                                                        <Typography variant='h6'>Dr. Abimbola Afolabi,</Typography>
                                                        <Typography>General Practice</Typography>
                                                        <Link href="#" underline="none" display="flex">More <KeyboardArrowRightIcon /></Link>
                                                    </Box>
                                                </Grid>
                                                <Grid item lg={4} sm={6} xs={12}>
                                                    <Typography sx={{ color: "#2dce89", marginBottom: "2rem" }} display="flex" ><WatchLaterIcon />Available Today</Typography>
                                                    <TextField
                                                        label="Facility Name"
                                                        value={facility}
                                                        onChange={(e) => setFacility(e.target.value)}
                                                        select
                                                        SelectProps={{ native: true }}
                                                        fullWidth
                                                        sx={{ marginBottom: "2rem" }}
                                                    >
                                                        {facilityInfo.map((facility) => (
                                                            <option value={facility} key={facility}>
                                                                {facility}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                    <Button variant="contained" fullWidth>Available Time Slot</Button>
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
