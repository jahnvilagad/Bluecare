
import React, { useState, useEffect  } from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FormGroup, TextField, Typography } from '@mui/material';
import { FormControl } from '@mui/material';
import Link from '@mui/material/Link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme } from "@mui/material/styles";
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';
import user_img from '../assets/img/feature/user-img.jpg';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const facility = [
    { label: 'Suzie Turn' },
    { label: 'Suzie Turn' },
    { label: 'Suzie Turn' },
    { label: 'Suzie Turn' },
];






export default function General_Practice() {
    // const [selectedId, setSelectedId] = useState(false);


    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);
    const [displayedTag, setDisplayedTag] = useState('');

    useEffect(() => {
        // Fetch tags data from the JSON server
        axios.get('http://localhost:8000/tags')
            .then(response => {
                setTags(response.data);
            })
            .catch(error => {
                console.error('Error fetching tags:', error);
            });
    }, []);

    const handleTagChange = (event, newValue) => {
        setSelectedTag(newValue);
    };

    const handleButtonClick = () => {
        if (selectedTag) {
            setDisplayedTag(selectedTag.name);
        }
    };

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
                                                <Grid item xl={2} lg={3} sm={6} xs={12}>
                                                    <img src={user_img} alt='User Img' />
                                                </Grid>
                                                <Grid item xl={4} lg={4} sm={6} xs={12}>
                                                    <Box>
                                                        <Typography variant='h6'>Dr. Abimbola Afolabi,</Typography>
                                                        <Typography>General Practice</Typography>
                                                        <Link href="#" underline="none" display="flex">More <KeyboardArrowRightIcon /></Link>
                                                    </Box>
                                                </Grid>
                                                <Grid item xl={4} lg={4} sm={6} xs={12}>
                                                    <Typography sx={{ color: "#2dce89", marginBottom: "2rem" }} display="flex" ><WatchLaterIcon />Available Today</Typography>
                                                    <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={tags}
                                                        getOptionLabel={(option) => option.name}
                                                        onChange={handleTagChange}
                                                        value={selectedTag}
                                                        renderInput={(params) => <TextField {...params} label="Select Facility Name" />}
                                                        sx={{ marginBottom: "1rem" }}
                                                    />
                                                    <Button variant="contained" fullWidth onClick={handleButtonClick}>Available Time Slot</Button>
                                                </Grid>
                                            </Grid>
                                            {displayedTag && (
                                                <Grid container spacing={2} className={classes.RadioToolbar} >
                                                    <Grid container spacing={2} >
                                                        <Grid item lg={10} sx={{ display: 'flex', justifyContent: 'end' }}>
                                                            <List sx={{ display: 'flex', justifyContent: 'end' }}>
                                                                <ListItem>
                                                                    <ListItemAvatar sx={{ minWidth: "32px" }}><Box sx={{ width: '1.5rem', height: '1.5rem', background: '#9fa2a6' }}></Box></ListItemAvatar>
                                                                    <ListItemText primary="Blocked" sx={{ whiteSpace: 'nowrap' }} />
                                                                </ListItem>
                                                                <ListItem>
                                                                    <ListItemAvatar sx={{ minWidth: "32px" }}><Box sx={{ width: '1.5rem', height: '1.5rem', background: '#1976d2' }}></Box></ListItemAvatar>
                                                                    <ListItemText primary="Clinic Visit" sx={{ whiteSpace: 'nowrap' }} />
                                                                </ListItem>
                                                                <ListItem>
                                                                    <ListItemAvatar sx={{ minWidth: "32px" }}><Box sx={{ width: '1.5rem', height: '1.5rem', background: '#7986cb' }}></Box></ListItemAvatar>
                                                                    <ListItemText primary="Tele Visit" sx={{ whiteSpace: 'nowrap' }} />
                                                                </ListItem>
                                                            </List>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item lg={4}>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
                                                                <DemoItem>
                                                                    <DateCalendar views={['day']} />
                                                                </DemoItem>
                                                            </DemoContainer>
                                                        </LocalizationProvider>
                                                    </Grid>
                                                    <Grid item lg={6} >
                                                        <Typography sx={{ marginBottom: "1rem", borderBottom: "1px solid #dddddd" }}>Morning</Typography>
                                                        <Typography sx={{ marginBottom: "1rem", borderBottom: "1px solid #dddddd" }}>Afternoon</Typography>
                                                        <Typography sx={{ marginBottom: "1rem", borderBottom: "1px solid #dddddd" }}>Evening</Typography>
                                                        <FormControl>
                                                            <RadioGroup
                                                                row
                                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                                name="row-radio-buttons-group"
                                                            >
                                                                <FormControlLabel value="6:00 PM" control={<Radio sx={{ padding: "5px" }} />} label="6:00 PM" />
                                                                <FormControlLabel value="6:10 PM" control={<Radio sx={{ padding: "5px" }} />} label="6:10 PM" />
                                                                <FormControlLabel value="6:20 PM" control={<Radio sx={{ padding: "5px" }} color="success" />} label="6:20 PM" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <Button variant="contained" onClick={() => navigate('/appointment_request')} sx={{ float: "right" }}>Next</Button>
                                                    </Grid>
                                                </Grid>
                                            )}
                                            <Grid container spacing={2}>
                                                <Grid item xl={2} lg={3} sm={6} xs={12}>
                                                    <img src={user_img} alt='User Img' />
                                                </Grid>
                                                <Grid item xl={4} lg={4} sm={6} xs={12}>
                                                    <Box>
                                                        <Typography variant='h6'>Dr. Abimbola Afolabi,</Typography>
                                                        <Typography>General Practice</Typography>
                                                        <Link href="#" underline="none" display="flex">More <KeyboardArrowRightIcon /></Link>
                                                    </Box>
                                                </Grid>
                                                <Grid item xl={4} lg={4} sm={6} xs={12}>
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
