
import React, { useState, useEffect } from 'react';
import Sidenav from '../Components/Sidenav';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FormGroup, TextField, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Box from '@mui/material/Box';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';
import user_img from '../assets/img/feature/user-img.jpg';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// const facility = [
//     { label: 'Suzie Turn' },
//     { label: 'Suzie Turn' },
//     { label: 'Suzie Turn' },
//     { label: 'Suzie Turn' },
// ];

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

    const [slots, setSlots] = useState({
        morning: [],
        afternoon: [],
        evening: [],
    });

    const [selectedSlots, setSelectedSlots] = useState([]);
    const [blockedSlots, setBlockedSlots] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/slots')
            .then(response => {
                console.log(response.data);
                if (response.data) {
                    setSlots(response.data);
                }

            })
            .catch(error => {
                console.error('Error fetching slots:', error);
            });

        // Mock selected and blocked slots
        // setSelectedSlots(['Slot 1', 'Slot A']);
        setBlockedSlots(['6:20 PM', '6:40 PM']);
    }, []);

    // const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotChange = (time, slot) => {
        const isBlocked = blockedSlots.includes(slot);
        const isSelected = selectedSlots.includes(slot);

        // If the slot is available and not blocked, handle the selection
        if (!isBlocked && !isSelected) {
            setSelectedSlots(prevSelected => [...prevSelected, slot]);
            console.log(`Selected ${time} slot: ${slot}`);
        } else {
            // Handle the case when the slot is blocked or already selected
            console.log(`Cannot select ${time} slot: ${slot}`);
        }
    };

    const renderSlots = (time) => {
        return (
            <Box>
                <Typography variant="h6">{`${time} Slot`}</Typography>
                {(slots[time] || []).map((slot, index) => {
                    const isBlocked = blockedSlots.includes(slot);
                    const isSelected = selectedSlots.includes(slot);
                    const isAvailable = !isBlocked && !isSelected;

                    const buttonLikeRadio = {
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '120px',
                        height: '40px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        cursor: isBlocked ? 'not-allowed' : 'pointer',
                        transition: 'background-color 0.3s ease',
                        margin: '5px',
                        userSelect: 'none',
                        backgroundColor: '#2196f3',
                        color: '#fff',
                    };

                    const selectedButton = {
                        backgroundColor: 'green',
                        color: '#fff',
                    };
                    return (
                        <label
                            key={index}
                            style={{
                                ...buttonLikeRadio,
                                ...(isSelected && selectedButton),
                            }}
                        >
                            <FormControlLabel
                                value={slot}
                                control={<Radio style={{ display: 'none' }} />}
                                label={slot}
                                onChange={() => handleSlotChange(time, slot)}
                                disabled={isBlocked}
                            />
                            {slot}
                        </label>
                    );
                })}
            </Box>
        );


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
                        }}>Laboratory</Typography>
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
                                                        <Grid item xs={12} sm={12}>
                                                            {renderSlots('Morning')}
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            {renderSlots('Afternoon')}
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            {renderSlots('Evening')}
                                                        </Grid>
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
                                                        <Grid item xs={12} sm={12}>
                                                            {renderSlots('Morning')}
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            {renderSlots('Afternoon')}
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            {renderSlots('Evening')}
                                                        </Grid>
                                                        <Button variant="contained" onClick={() => navigate('/appointment_request')} sx={{ float: "right" }}>Next</Button>
                                                    </Grid>
                                                </Grid>
                                            )}
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
