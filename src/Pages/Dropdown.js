import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
// import { withStyles } from '@mui/material/styles';
// import { withStyles } from '@mui/material/styles';
import axios from 'axios';
// import classes from '../assets/css/custom.module.css';

// Custom styles for the radio buttons
const DailyScheduler = () => {
  const [slots, setSlots] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });

  useEffect(() => {
    axios.get('http://localhost:8001/slots')
      .then(response => {
        setSlots(response.data);
      })
      .catch(error => {
        console.error('Error fetching slots:', error);
      });
  }, []);

  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotChange = (time, slot) => {
    setSelectedSlot(slot);
    // Handle the selected slot based on the time (morning, afternoon, evening)
    console.log(`Selected ${time} slot: ${slot}`);
  };

  const buttonLikeRadio = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px',
    height: '40px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    margin: '5px',
    userSelect: 'none',
  };

  const selectedButton = {
    backgroundColor: '#2196f3', // Change the background color when selected
    color: '#fff',
  };

  const renderSlots = (time) => (
    <Paper>
      <Typography variant="h6">{`${time} Slot`}</Typography>
      {slots[time].map((slot, index) => (
        <label
          key={index}
          style={{
            ...buttonLikeRadio,
            ...(selectedSlot === slot && selectedButton),
          }}
        >
          <FormControlLabel
            value={slot}
            control={<Radio style={{ display: 'none' }} />}
            label={slot}
            onChange={() => handleSlotChange(time, slot)}
          />
          {/* {slot} */}
        </label>
      ))}
    </Paper>
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">My Daily Schedule</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        {renderSlots('morning')}
      </Grid>
      <Grid item xs={12} sm={4}>
        {renderSlots('afternoon')}
      </Grid>
      <Grid item xs={12} sm={4}>
        {renderSlots('evening')}
      </Grid>
    </Grid>
  );
};
export default DailyScheduler;
