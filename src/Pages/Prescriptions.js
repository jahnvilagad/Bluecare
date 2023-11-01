import React from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';

export default function Prescriptions() {
  return (
    <>
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Welcome Prescriptions</h1>
        </Box>
      </Box>
    </>
  )
}
