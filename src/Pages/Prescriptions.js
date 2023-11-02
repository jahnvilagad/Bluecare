import React from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function createData(sno, date, name, gender, mobile, email, action, clinic) {
  return { sno, date, name, gender, mobile, email, action, clinic };
}

const rows = [
  createData(1, "10-11-2023", "Test", "Female", "1234567890","abc@gmail.com","Test","Test"),
  createData(2, "10-11-2023", "Test", "Male", "1234567890","abc@gmail.com","Test","Test"),
];

export default function Prescriptions() {
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
            }}>Prescriptions</Typography>
          </Box>

          <Box position="relative">
          <Card sx={{ minWidth: 275, margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
            <CardContent>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.TableBg}>#</TableCell>
                      <TableCell className={classes.TableBg}>Date</TableCell>
                      <TableCell className={classes.TableBg}>Name</TableCell>
                      <TableCell className={classes.TableBg}>Gender</TableCell>
                      <TableCell className={classes.TableBg}>Mobile</TableCell>
                      <TableCell className={classes.TableBg}>Email</TableCell>
                      <TableCell className={classes.TableBg}>Action</TableCell>
                      <TableCell className={classes.TableBg}>Clinic</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.sno}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.sno}
                        </TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.mobile}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.action}</TableCell>
                        <TableCell>{row.clinic}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
            </Card>
          </Box>

         
        </Box>

       
      </Box>
    </>
  )
}
