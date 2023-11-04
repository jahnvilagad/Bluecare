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
import ScienceIcon from '@mui/icons-material/Science';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Specialities() {
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
                        }}>Specialities</Typography>
                    </Box>

                    <Box position="relative">
                        <Card sx={{ minWidth: 275, margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={2}>
                                        <ButtonBase onClick={() => navigate('/')} sx={{ flexDirection: 'column' }}>
                                            <Box sx={{width: '4rem',height: '4rem',boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.15)',borderRadius: '50%',lineHeight: '83px'}}>
                                                <ScienceOutlinedIcon className={classes.DashboardIcon} />
                                            </Box>
                                            <Item elevation={true} sx={{fontWeight: '600',fontSize: '1rem',marginTop: '1rem'}}>Dental</Item>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ButtonBase onClick={() => navigate('/general-practice')} sx={{ flexDirection: 'column' }}>
                                            <Box sx={{width: '4rem',height: '4rem',boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.15)',borderRadius: '50%',lineHeight: '83px'}}>
                                                <ScienceOutlinedIcon className={classes.DashboardIcon} />
                                            </Box>
                                            <Item elevation={true} sx={{fontWeight: '600',fontSize: '1rem',marginTop: '1rem'}}>General Practice</Item>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ButtonBase onClick={() => navigate('/')} sx={{ flexDirection: 'column' }}>
                                            <Box sx={{width: '4rem',height: '4rem',boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.15)',borderRadius: '50%',lineHeight: '83px'}}>
                                                <ScienceOutlinedIcon className={classes.DashboardIcon} />
                                            </Box>
                                            <Item elevation={true} sx={{fontWeight: '600',fontSize: '1rem',marginTop: '1rem'}}>Laboratory</Item>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ButtonBase onClick={() => navigate('/')} sx={{ flexDirection: 'column' }}>
                                            <Box sx={{width: '4rem',height: '4rem',boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.15)',borderRadius: '50%',lineHeight: '83px'}}>
                                                <ScienceOutlinedIcon className={classes.DashboardIcon} />
                                            </Box>
                                            <Item elevation={true} sx={{fontWeight: '600',fontSize: '1rem',marginTop: '1rem'}}>Nurse</Item>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ButtonBase onClick={() => navigate('/')} sx={{ flexDirection: 'column' }}>
                                            <Box sx={{width: '4rem',height: '4rem',boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.15)',borderRadius: '50%',lineHeight: '83px'}}>
                                                <ScienceOutlinedIcon className={classes.DashboardIcon} />
                                            </Box>
                                            <Item elevation={true} sx={{fontWeight: '600',fontSize: '1rem',marginTop: '1rem'}}>OBS-GYN</Item>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ButtonBase onClick={() => navigate('/')} sx={{ flexDirection: 'column' }}>
                                            <Box sx={{width: '4rem',height: '4rem',boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.15)',borderRadius: '50%',lineHeight: '83px'}}>
                                                <ScienceOutlinedIcon className={classes.DashboardIcon} />
                                            </Box>
                                            <Item elevation={true} sx={{fontWeight: '600',fontSize: '1rem',marginTop: '1rem'}}>Pediatrician</Item>
                                        </ButtonBase>
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
