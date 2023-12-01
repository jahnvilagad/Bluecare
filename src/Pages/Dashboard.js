
import React, { useState } from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';
import { useNavigate } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Dashboard() {
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
            }}>Dashboard</Typography>
          </Box>

          <Box position="relative">
            <Grid container spacing={2}>
              <Grid item lg={12} md={12}>
                <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item lg={4} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                        <Card sx={{ height: '100%' }}>
                          <CardContent>
                            <CalendarMonthIcon />
                            <Typography variant="h5" component="div">
                              Appointments
                            </Typography>
                            <Typography variant="body2">
                              No Appointments Available!
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small" variant='contained' onClick={() => navigate('/speciality')}>Book Appointments</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                      <Grid item lg={4} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                        <Card sx={{ height: '100%' }}>
                          <CardContent>
                            <MedicationLiquidIcon />
                            <Typography variant="h5" component="div">
                              Medications
                            </Typography>
                            <Typography variant="body2">
                              No Medications Available!
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item lg={4} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                        <Card sx={{ height: '100%' }}>
                          <CardContent>
                            <ScienceOutlinedIcon />
                            <Typography variant="h5" component="div">
                              Lab Results
                            </Typography>
                            <Typography variant="body2">
                              No Lab Results Available!
                            </Typography>
                          </CardContent>
                        </Card>
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
