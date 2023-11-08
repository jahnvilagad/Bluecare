
import React, { useState } from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';
import Autocomplete from '@mui/material/Autocomplete';
import {TextField} from '@mui/material';
import { Typography } from '@mui/material';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function MyAutocomplete() {

    const [selectedOption, setSelectedOption] = useState(null);

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
                        }}>MyAutocomplete</Typography>
                    </Box>

                    <Box position="relative">
                        <Grid container spacing={2}>
                            <Grid item lg={12} md={12}>
                                <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                                    <CardContent>
                                        <Autocomplete
                                            value={selectedOption}
                                            onChange={(event, newValue) => {
                                                setSelectedOption(newValue);
                                            }}
                                            id="autocomplete"
                                            options={options}
                                            renderInput={(params) => <TextField {...params} placeholder="Select an option" />}
                                        />
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
