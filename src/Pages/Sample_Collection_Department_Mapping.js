
import React, { useState } from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormGroup, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete from '@mui/material/Autocomplete';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';


const location = [
    { label: 'Suzie Turn' },
    { label: 'Suzie Turn' },
    { label: 'Suzie Turn' },
    { label: 'Suzie Turn' },
];

const center = [
    { label: 'Radiology' },
    { label: 'MRI' },
    { label: 'X-Ray' },
    { label: 'Ultra Sound' },
]

const StyledTableCell = styled(TableCell)(({ }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#F6F9FC',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ }) => ({
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Sample_Collection_Department_Mapping() {

    const [data, setData] = useState([
        { id: 1, department: 'Administratio',subdepartment: 'Document' },
        { id: 2, department: 'Clinical Pathology',subdepartment: 'Clinical Pathology'},
        { id: 3, department: 'Imaging',subdepartment: 'X-Ray' },
        { id: 4, department: 'Haematology & Blood Transfusion',subdepartment: 'Day Care' },
    ]);



    const [selectedData, setSelectedData] = useState([]);

    const handleTransferClick = (row) => {
        // Remove the selected item from the 'data' array
        setData(data.filter((d) => d.id !== row.id));
        // Add the selected row to the 'selectedData' array
        setSelectedData([...selectedData, row]);
    };

    const handleDeleteClick = (row) => {
        // Remove the selected item from the 'selectedData' array
        setSelectedData(selectedData.filter((d) => d.id !== row.id));
        // Add the selected item back to the 'data' array
        setData([...data, row]);
      };

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
                        }}>Sample Collection Department Mapping</Typography>
                    </Box>

                    <Box position="relative">
                        <Grid container spacing={2}>
                            <Grid item lg={12} md={12}>
                                <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                                    <CardContent>
                                        <FormGroup>
                                            <Grid container spacing={2}>
                                                <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                    <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={location}
                                                        renderInput={(params) => <TextField {...params} label="Location Name" />}
                                                    />

                                                    <Box height={30}></Box>

                                                    <TableContainer component={Paper}>
                                                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <StyledTableCell>SN</StyledTableCell>
                                                                    <StyledTableCell>Calories</StyledTableCell>
                                                                    <StyledTableCell>Sub Department</StyledTableCell>
                                                                    <StyledTableCell>ADD</StyledTableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {data.map((row) => (
                                                                    <StyledTableRow key={row.name}>
                                                                        <StyledTableCell component="th" scope="row">
                                                                            {row.id}
                                                                        </StyledTableCell>
                                                                        <StyledTableCell>{row.department}</StyledTableCell>
                                                                        <StyledTableCell>{row.subdepartment}</StyledTableCell>
                                                                        <StyledTableCell>
                                                                            <Button variant="contained" sx={{ minWidth: '35px', padding: '6px 8px' }} onClick={() => handleTransferClick(row)}>
                                                                                <AddIcon />
                                                                            </Button>
                                                                        </StyledTableCell>
                                                                    </StyledTableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Grid>

                                                <Grid item lg={6} sm={6} xs={12} sx={{ marginBottom: "2rem" }}>
                                                    <Box sx={{display: 'flex'}}>
                                                    <Autocomplete
                                                            disablePortal
                                                            id="combo-box-demo"
                                                            options={center}
                                                            renderInput={(params) => <TextField {...params} label="Center Name"/>}
                                                            fullWidth
                                                            sx={{marginRight: '1rem'}}
                                                        />
                                                        <Button variant="contained">
                                                            <AddIcon />
                                                        </Button>
                                                    </Box>
                                                        

                                                    <Box height={30}></Box>

                                                    <TableContainer component={Paper}>
                                                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <StyledTableCell>SN</StyledTableCell>
                                                                    <StyledTableCell sx={{ width: '82%' }}>Sub Department</StyledTableCell>
                                                                    <StyledTableCell></StyledTableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {selectedData.map((row) => (
                                                                    <StyledTableRow key={row.name}>
                                                                        <StyledTableCell component="th" scope="row">
                                                                            {row.id}
                                                                        </StyledTableCell>
                                                                        <StyledTableCell>{row.subdepartment}</StyledTableCell>
                                                                        <StyledTableCell sx={{ color: 'red', cursor: 'pointer' }}><CloseIcon onClick={() => handleDeleteClick(row)}/></StyledTableCell>
                                                                    </StyledTableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Grid>

                                            </Grid>


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