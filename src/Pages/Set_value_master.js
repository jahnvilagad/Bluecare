
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
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import profile_cover from '../assets/img/banner/profile-cover.jpg';
import classes from '../assets/css/custom.module.css';


const hospital = [
    { label: 'FamilyCare Medical Services' },
    { label: 'FamilyCare Medical Services' },
    { label: 'FamilyCare Medical Services' },
    { label: 'FamilyCare Medical Services' },
];

const setname = [
    { label: 'Blood Group Abo Rhs' },
    { label: 'MRI' },
    { label: 'X-Ray' },
    { label: 'Ultra Sound' },
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#F6F9FC',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Set_value_master() {

    const [data, setData] = useState([
        { id: 1, value_name: '(+1) acid fast bacili seen' },
        { id: 2, value_name: '>1:1024' },
        { id: 3, value_name: '>50' },
        { id: 4, value_name: '>50/HPF' },
        { id: 5, value_name: 'A Negative' },
        { id: 6, value_name: 'A Positive' },
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

    const moveItemUp = (row) => {
        const currentIndex = selectedData.findIndex((d) => d.id === row.id);
        if (currentIndex > 0) {
            const updatedData = [...selectedData];
            const temp = updatedData[currentIndex];
            updatedData[currentIndex] = updatedData[currentIndex - 1];
            updatedData[currentIndex - 1] = temp;
            setSelectedData(updatedData);
        }
    };

    const moveItemDown = (row) => {
        const currentIndex = selectedData.findIndex((d) => d.id === row.id);
        if (currentIndex < selectedData.length - 1) {
            const updatedData = [...selectedData];
            const temp = updatedData[currentIndex];
            updatedData[currentIndex] = updatedData[currentIndex + 1];
            updatedData[currentIndex + 1] = temp;
            setSelectedData(updatedData);
        }
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
                        }}>Set value Master</Typography>
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
                                                        options={hospital}
                                                        renderInput={(params) => <TextField {...params} label="Hospital" />}
                                                    />

                                                    <Box height={30}></Box>

                                                    <TableContainer component={Paper}>
                                                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <StyledTableCell>SN</StyledTableCell>
                                                                    <StyledTableCell>Value Name</StyledTableCell>
                                                                    <StyledTableCell>ADD</StyledTableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {data.map((row) => (
                                                                    <StyledTableRow key={row.name}>
                                                                        <StyledTableCell component="th" scope="row">
                                                                            {row.id}
                                                                        </StyledTableCell>
                                                                        <StyledTableCell>{row.value_name}</StyledTableCell>
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
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Autocomplete
                                                            disablePortal
                                                            id="combo-box-demo"
                                                            options={setname}
                                                            renderInput={(params) => <TextField {...params} label="Set Name" />}
                                                            fullWidth
                                                            sx={{ marginRight: '1rem' }}
                                                        />
                                                    </Box>


                                                    <Box height={30}></Box>

                                                    <TableContainer component={Paper}>
                                                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <StyledTableCell>SN</StyledTableCell>
                                                                    <StyledTableCell sx={{ width: '82%' }}>Value Name</StyledTableCell>
                                                                    <StyledTableCell>UP</StyledTableCell>
                                                                    <StyledTableCell>Down</StyledTableCell>
                                                                    <StyledTableCell></StyledTableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {selectedData.map((row) => (
                                                                    <StyledTableRow key={row.name}>
                                                                        <StyledTableCell component="th" scope="row">
                                                                            {row.id}
                                                                        </StyledTableCell>
                                                                        <StyledTableCell>{row.value_name}</StyledTableCell>
                                                                        <StyledTableCell><Button variant="contained" sx={{ minWidth: '35px', padding: '6px 8px' }} onClick={() => moveItemUp(row)} disabled={selectedData.indexOf(row) === 0}><KeyboardDoubleArrowUpIcon /></Button></StyledTableCell>
                                                                        <StyledTableCell><Button variant="contained" sx={{ minWidth: '35px', padding: '6px 8px' }} onClick={() => moveItemDown(row)} disabled={selectedData.indexOf(row) === selectedData.length - 1}><KeyboardDoubleArrowDownIcon /></Button></StyledTableCell>
                                                                        <StyledTableCell sx={{ color: 'red', cursor: 'pointer' }}><CloseIcon onClick={() => handleDeleteClick(row)} /></StyledTableCell>
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
