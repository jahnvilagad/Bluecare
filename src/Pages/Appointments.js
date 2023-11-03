
import React, { useState } from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Appointments() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                        }}>Appointments</Typography>
                    </Box>

                    <Box position="relative">
                        <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                            <CardContent>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label="Upcoming Appointments" {...a11yProps(0)} />
                                            <Tab label="Past Appointments" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                    <CustomTabPanel value={value} index={0}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item lg={4} md={6} sm={12}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                    <DemoContainer components={['DatePicker']}>
                                                        <DatePicker label="dd-mm-yyyy" sx={{ width: "100%" }} />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </Grid>
                                            <Grid item lg={4} md={6} sm={12}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                    <DemoContainer components={['DatePicker']}>
                                                        <DatePicker label="dd-mm-yyyy" sx={{ width: "100%" }} />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </Grid>
                                            <Grid item lg={4} md={6} sm={12}>
                                                <Button variant="contained" fullWidth size='large'>Search</Button>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={1}>
                                        <Typography>No Appointment Available !</Typography>
                                    </CustomTabPanel>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>


                </Box>


            </Box>

        </>
    )
}
