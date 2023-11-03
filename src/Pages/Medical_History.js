
import React, { useState } from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { FormControl, FormGroup, TextField, Typography } from '@mui/material';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function createData(sno, Medicine, Dosage, Frequency, Status) {
    return { sno, Medicine, Dosage, Frequency, Status };
  }
  
  const rows = [
    createData(1, "Terbinafine 1% topical cream", "Test", "once a Day","Test"),
  ];

 

export default function Medical_History() {
    const [frequency, setFrequency] = useState();
    const frequencyInfo = ["Select","Once a Day", "2 times a Day", "3 time a Day"];

    const [staus, setStatus] = useState();
    const stausInfo = ["Select","Current", "Past"];

    const [selectedId, setSelectedId] = useState(false);


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
                        }}>Medical History</Typography>
                    </Box>

                    <Box position="relative">
                        <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                            <CardContent>
                                <Typography variant='h6' sx={{ color: "#32325d", fontWeight: "600" }}>A complete and accurate medical history is important for our providers to ensure they have information they need to provide your treatment plan.</Typography>
                                <Box height={30}></Box>
                                <FormGroup>
                                    <Grid container spacing={2}>
                                        <Grid item lg={3} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <Typography>Are you taking any medications?</Typography>
                                        </Grid>
                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                >
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" onClick={() => setSelectedId(prev => !prev)}/>
                                                    <FormControlLabel value="No" control={<Radio />} label="No" onClick={() => setSelectedId(prev => !prev)}/>
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    {selectedId && (
                                        <Box>
                                                <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
                                                    <Grid item xs={12}>
                                                        <Typography>Add new medication</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
                                                    <Grid item lg={6}>
                                                        <TextField
                                                            id="outlined-required"
                                                            label="Medicine"
                                                            focused
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item lg={6}>
                                                        <TextField
                                                            id="outlined-required"
                                                            label="Dosage"
                                                            focused
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
                                                    <Grid item lg={6}>
                                                        <TextField
                                                            label="Frequency"
                                                            value={frequency}
                                                            onChange={(e) => setFrequency(e.target.value)}
                                                            select
                                                            SelectProps={{ native: true }}
                                                            fullWidth
                                                        >
                                                            {frequencyInfo.map((frequency) => (
                                                                <option value={frequency} key={frequency}>
                                                                    {frequency}
                                                                </option>
                                                            ))}

                                                        </TextField>
                                                    </Grid>
                                                    <Grid item lg={6}>
                                                        <TextField
                                                            label="Status"
                                                            value={staus}
                                                            onChange={(e) => setStatus(e.target.value)}
                                                            select
                                                            SelectProps={{ native: true }}
                                                            fullWidth
                                                        >
                                                            {stausInfo.map((staus) => (
                                                                <option value={staus} key={staus}>
                                                                    {staus}
                                                                </option>
                                                            ))}

                                                        </TextField>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
                                                    <Grid item lg={6}>
                                                        <Button variant="contained">Add Medication</Button>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
                                                    <Grid item lg={12}>
                                                        <TableContainer>
                                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell className={classes.TableBg}>#</TableCell>
                                                                        <TableCell className={classes.TableBg}>Medicine</TableCell>
                                                                        <TableCell className={classes.TableBg}>Dosage</TableCell>
                                                                        <TableCell className={classes.TableBg}>Frequency</TableCell>
                                                                        <TableCell className={classes.TableBg}>Status</TableCell>
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
                                                                            <TableCell>{row.Medicine}</TableCell>
                                                                            <TableCell>{row.Dosage}</TableCell>
                                                                            <TableCell>{row.Frequency}</TableCell>
                                                                            <TableCell>{row.Status}</TableCell>
                                                                        </TableRow>
                                                                    ))}
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>
                                                    </Grid>
                                                </Grid>
                                        </Box>
                                    )}

                                    <Grid container spacing={2}>
                                        <Grid item lg={3} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <Typography>Do you have any allergies?</Typography>
                                        </Grid>
                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                >
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item lg={3} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <Typography>Do you smoke / use Tobacco?</Typography>
                                        </Grid>
                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                >
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item lg={3} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <Typography>Do you drink alcohol?</Typography>
                                        </Grid>
                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                >
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item lg={3} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <Typography>Have you traveled overseas in the past 2 month?</Typography>
                                        </Grid>
                                        <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                >
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item lg={3} sm={6} xs={12} sx={{ marginBottom: "1rem" }}>
                                            <Typography>When was your last visit to the doctor?</Typography>
                                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                <DemoContainer components={['DatePicker']}>
                                                    <DatePicker label="dd-mm-yyyy" sx={{ width: "100%" }} />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sx={{ marginBottom: "1rem" }}>
                                            <Typography>Other</Typography>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Other if any"
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                                fullWidth
                                                sx={{marginTop: "1rem"}}
                                            />
                                        </Grid>
                                    </Grid>
                                </FormGroup>
                                <Button variant="contained">Submit</Button>
                            </CardContent>
                        </Card>
                    </Box>


                </Box>


            </Box>

        </>
    )
}
