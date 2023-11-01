import React from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
// import profile_cover from '../assets/img/banner/profile-cover.jpg' 

const sectionStyle = {
  height: "100vh",

  // backgroundImage:
  //   "url('/assets/img/banner/profile-cover.jpg') ",

  backgroundImage: "url('assets/img/banner/profile-cover.jpg')",

  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

export default function Prescriptions() {
  return (
    <>
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1}} style={sectionStyle}>
          {/* <img src={profile_cover} alt='Profile Cover' height={300} width='100%'/> */}
          <h1>Welcome Prescriptions</h1>
        </Box>
      </Box>
    </>
  )
}
