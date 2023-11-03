
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
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Upload_Prescriptions() {
    const [facility, setFacility] = useState();
    const facilityInfo = ["Suzie Turn", "Suzie Turn1", "Suzie Turn2"];


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
                            <Grid item lg={8}  md={12}>
                                <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                                    <CardContent>
                                        <FormGroup>
                                            <Grid container spacing={2}>
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
                                                <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                    <TextField
                                                        label="Facility Name"
                                                        value={facility}
                                                        onChange={(e) => setFacility(e.target.value)}
                                                        select
                                                        SelectProps={{ native: true }}
                                                        fullWidth
                                                    >
                                                        {facilityInfo.map((facility) => (
                                                            <option value={facility} key={facility}>
                                                                {facility}
                                                            </option>
                                                        ))}

                                                    </TextField>
                                                </Grid>
                                                <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                    <TextField
                                                        id="outlined-required"
                                                        label="File Upload"
                                                        type='file'
                                                        focused
                                                        variant="outlined"
                                                        fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                            
                                        </FormGroup>
                                        <Button variant="contained">Submit</Button>
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
