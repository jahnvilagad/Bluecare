import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
// import { withStyles } from '@mui/material/styles';
// import { withStyles } from '@mui/material/styles';

// Custom styles for the radio buttons
const DailyScheduler = () => {
  const [selectedMorningSlot, setSelectedMorningSlot] = useState('');
  const [selectedAfternoonSlot, setSelectedAfternoonSlot] = useState('');
  const [selectedEveningSlot, setSelectedEveningSlot] = useState('');

  const handleMorningChange = (event) => {
    setSelectedMorningSlot(event.target.value);
  };

  const handleAfternoonChange = (event) => {
    setSelectedAfternoonSlot(event.target.value);
  };

  const handleEveningChange = (event) => {
    setSelectedEveningSlot(event.target.value);
  };

  const availableMorningSlots = ['Slot 1', 'Slot 2', 'Slot 3'];
  const availableAfternoonSlots = ['Slot A', 'Slot B', 'Slot C'];
  const availableEveningSlots = ['Slot X', 'Slot Y', 'Slot Z'];

  const radioStyle = {
    display: 'none', // Hide the default radio button
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

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">My Daily Schedule</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper>
          <Typography variant="h6">Morning Slot</Typography>
          {availableMorningSlots.map((slot, index) => (
            <label key={index} style={{ ...buttonLikeRadio, ...(selectedMorningSlot === slot && selectedButton) }}>
              <FormControlLabel
                value={slot}
                control={<Radio style={radioStyle} />}
                label={slot}
                onChange={handleMorningChange}
                checked={selectedMorningSlot === slot}
              />
              {/* {slot} */}
            </label>
          ))}
        </Paper>
      </Grid>
      {/* Repeat similar structure for Afternoon and Evening slots */}
      <Grid item xs={12} sm={4}>
        <Paper>
          <Typography variant="h6">Morning Slot</Typography>
          {availableAfternoonSlots.map((slot, index) => (
            <label key={index} style={{ ...buttonLikeRadio, ...(selectedAfternoonSlot === slot && selectedButton) }}>
              <FormControlLabel
                value={slot}
                control={<Radio style={radioStyle} />}
                label={slot}
                onChange={handleAfternoonChange}
                checked={selectedAfternoonSlot === slot}
              />
              {/* {slot} */}
            </label>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper>
          <Typography variant="h6">Morning Slot</Typography>
          {availableEveningSlots.map((slot, index) => (
            <label key={index} style={{ ...buttonLikeRadio, ...(selectedEveningSlot === slot && selectedButton) }}>
              <FormControlLabel
                value={slot}
                control={<Radio style={radioStyle} />}
                label={slot}
                onChange={handleEveningChange}
                checked={selectedEveningSlot === slot}
              />
              {/* {slot} */}
            </label>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};
export default DailyScheduler;
