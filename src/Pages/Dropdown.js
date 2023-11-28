import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios'; // Make sure axios is installed

const AutocompleteTags = () => {
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

  return (
    <div>
      <Autocomplete
        options={tags}
        getOptionLabel={(option) => option.name}
        onChange={handleTagChange}
        value={selectedTag}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Select Tag"
            placeholder="Select Tag"
          />
        )}
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Display Tag
      </Button>
      <Box mt={2}>
        <div>
          <h3>Selected Tag:</h3>
          <div>
            {displayedTag && <span>{displayedTag}</span>}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default AutocompleteTags;
