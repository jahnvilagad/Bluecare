
import React, { useState } from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FormGroup, TextField, Typography } from '@mui/material';
import { FormControl} from '@mui/material';
import Link from '@mui/material/Link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';
import user_img from '../assets/img/feature/user-img.jpg';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';

const facility = [
    { label: 'Suzie Turn' },
    { label: 'Suzie Turn' },
    { label: 'Suzie Turn' },
    { label: 'Suzie Turn' },
];




export default function General_Practice() {
    const [selectedId, setSelectedId] = useState(false);

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
                                                    <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={facility}
                                                        renderInput={(params) => <TextField {...params} label="Facility Name" />}
                                                        sx={{ marginBottom: "1rem" }}
                                                    />
                                                    <Button variant="contained" fullWidth onClick={() => setSelectedId(prev => !prev)}>Available Time Slot</Button>
                                                </Grid>
                                            </Grid>
                                            {selectedId && (
                                                <Grid container spacing={2} className={classes.RadioToolbar} >
                                                    <Grid item lg={10}>
                                                        <Typography sx={{ marginBottom: "1rem", borderBottom: "1px solid #dddddd" }}>Morning</Typography>
                                                        <Typography sx={{ marginBottom: "1rem", borderBottom: "1px solid #dddddd" }}>Afternoon</Typography>
                                                        <Typography sx={{ marginBottom: "1rem", borderBottom: "1px solid #dddddd" }}>Evening</Typography>
                                                        <FormControl>
                                                            <RadioGroup
                                                                row
                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                name="row-radio-buttons-group"
                                                            >
                                                                <FormControlLabel value="6:00 PM" control={<Radio sx={{padding: "5px"}}/>} label="6:00 PM" />
                                                                <FormControlLabel value="6:10 PM" control={<Radio sx={{padding: "5px"}}/>} label="6:10 PM" />
                                                                <FormControlLabel value="6:20 PM" control={<Radio sx={{padding: "5px"}} color="success"/>} label="6:20 PM" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <Button variant="contained" onClick={() => navigate('/appointment_request')} sx={{ float: "right" }}>Next</Button>
                                                    </Grid>
                                                </Grid>
                                            )}
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
                                                    <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={facility}
                                                        renderInput={(params) => <TextField {...params} label="Facility Name" />}
                                                        sx={{ marginBottom: "1rem" }}
                                                    />
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
