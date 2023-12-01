import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography, FormControlLabel, Radio } from '@mui/material';

const DailyScheduler = () => {
  const [slots, setSlots] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });

  // Mock data for selected and blocked slots (can be replaced with your logic)
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [blockedSlots, setBlockedSlots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/slots')
      .then(response => {
        setSlots(response.data);
      })
      .catch(error => {
        console.error('Error fetching slots:', error);
      });

    // Mock selected and blocked slots
    // setSelectedSlots(['Slot 1', 'Slot A']);
    setBlockedSlots(['Slot 3', 'Slot B']);
  }, []);

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
    if (!slots[time]) {
      return null; // Return null if slots[time] is undefined
    }
    else {
      return (
        <Paper>
          <Typography variant="h6">{`${time} Slot`}</Typography>
          {slots[time].map((slot, index) => {
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
                {/* {slot} */}
              </label>
            );
          })}
        </Paper>
      );
    }

  };

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
