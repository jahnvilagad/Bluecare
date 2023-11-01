import React from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';

export default function Dashboard() {
  return (
    <>
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          
        </Box>
      </Box>
    </>
  )
}
