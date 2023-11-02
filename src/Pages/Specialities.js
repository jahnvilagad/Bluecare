import React from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
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
                        }}>Specialities</Typography>
                    </Box>

                    <Box position="relative">
                        <Card sx={{ minWidth: 275, margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={2}>
                                        <Item elevation={true}>Dental</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Item elevation={true}>General Practice</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ScienceOutlinedIcon />
                                        <Item elevation={true}>Laboratory</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Item elevation={true}>Nurse</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Item elevation={true}>OBS-GYN</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Item elevation={true}>Pediatrician</Item>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>


                </Box>


            </Box>
        </>
    )
}
