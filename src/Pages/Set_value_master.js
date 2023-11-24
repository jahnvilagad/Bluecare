
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


// const hospital = [
//     { label: 'FamilyCare Medical Services' },
//     { label: 'FamilyCare Medical Services' },
//     { label: 'FamilyCare Medical Services' },
//     { label: 'FamilyCare Medical Services' },
// ];

const hospital = [
    { id: 1, name: 'FamilyCare Medical Services', valueId: 1, valuename: '(+1) acid fast bacili seen', dataValue: 'Value 1' },
    { id: 2, name: 'FamilyCare Medical Services2', valueId: 2, valuename: '>1:1024', dataValue: 'Value 2' },
    { id: 3, name: 'FamilyCare Medical Services3', valueId: 2, valuename: '>50', dataValue: 'Value 2' },
    { id: 4, name: 'FamilyCare Medical Services4', valueId: 1, valuename: '>50/HPF', dataValue: 'Value 1' },
    { id: 5, name: 'FamilyCare Medical Services5', valueId: 1, valuename: 'A Negative', dataValue: 'Value 1' },
    { id: 6, name: 'FamilyCare Medical Services6', valueId: 1, valuename: 'A Positive', dataValue: 'Value 1' },
    { id: 7, name: 'FamilyCare Medical Services7', valueId: 3, valuename: '0', dataValue: 'Value 3' },
    { id: 8, name: 'FamilyCare Medical Services8', valueId: 3, valuename: '0.042361111111', dataValue: 'Value 3' },
    { id: 9, name: 'FamilyCare Medical Services9', valueId: 3, valuename: '(+2) acid fast bacilli seen', dataValue: 'Value 3' },
];

// const setname = [
//     { label: 'Blood Group Abo Rhs' },
//     { label: 'MRI' },
//     { label: 'X-Ray' },
//     { label: 'Ultra Sound' },
// ]

const setname = [
    { id: 10, name: 'Blood Group Abo Rhs', valueId: 5, valuename: 'A NEGATIVE', dataValue: 'Value 5' },
    { id: 11, name: 'MRI', valueId: 6, valuename: 'Clinical Pathology', dataValue: 'Value 6' },
    { id: 12, name: 'X-Ray', valueId: 7, valuename: 'Biochemistry', dataValue: 'Value 7' },
    { id: 13, name: 'Ultra Sound', valueId: 4, valuename: 'X-Ray', dataValue: 'Value 4' },
    { id: 14, name: 'Blood Group Abo Rhs', valueId: 5, valuename: 'A POSITIVE', dataValue: 'Value 5' },
    { id: 15, name: 'MRI', valueId: 4, valuename: 'Mammogram', dataValue: 'Value 4' },
    { id: 16, name: 'X-Ray', valueId: 4, valuename: 'Day Care', dataValue: 'Value 4' },
    { id: 17, name: 'Ultra Sound', valueId: 6, valuename: 'Component', dataValue: 'Value 6' },
    { id: 18, name: 'Blood Group Abo Rhs', valueId: 5, valuename: 'B NEGATIVE', dataValue: 'Value 5' },
];

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
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const handleTransferClick = (rows) => {
        setData2([...data2, ...rows]);
        setData1(data1.filter((data) => !rows.some((row) => row.id === data.id)));
    };

    const handleDeleteClick = (rows) => {
        setData1([...data1, ...rows]);
        setData2(data2.filter((data) => !rows.some((row) => row.id === data.id)));
    };



    // const [selectedData, setSelectedData] = useState([]);

    // const handleTransferClick = (row) => {
    //     // Remove the selected item from the 'data' array
    //     setData(data.filter((d) => d.id !== row.id));
    //     // Add the selected row to the 'selectedData' array
    //     setSelectedData([...selectedData, row]);
    // };

    // const handleDeleteClick = (row) => {
    //     // Remove the selected item from the 'selectedData' array
    //     setSelectedData(selectedData.filter((d) => d.id !== row.id));
    //     // Add the selected item back to the 'data' array
    //     setData([...data, row]);
    // };

    const moveItemUp = (row) => {
        const currentIndex = data2.findIndex((d) => d.id === row.id);
        if (currentIndex > 0) {
            const updatedData = [...data2];
            const temp = updatedData[currentIndex];
            updatedData[currentIndex] = updatedData[currentIndex - 1];
            updatedData[currentIndex - 1] = temp;
            setData2(updatedData);
        }
    };

    const moveItemDown = (row) => {
        const currentIndex = data2.findIndex((d) => d.id === row.id);
        if (currentIndex < data2.length - 1) {
            const updatedData = [...data2];
            const temp = updatedData[currentIndex];
            updatedData[currentIndex] = updatedData[currentIndex + 1];
            updatedData[currentIndex + 1] = temp;
            setData2(updatedData);
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
                                                        getOptionLabel={(option) => option.name}
                                                        onChange={(event, newValue) => {
                                                            if (newValue) {
                                                                const selectedRows = hospital.filter((row) => row.valueId === newValue.valueId);
                                                                handleDeleteClick(selectedRows);
                                                            }
                                                        }}
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
                                                                {data1.map((row) => (
                                                                    <StyledTableRow key={row.name}>
                                                                        <StyledTableCell component="th" scope="row">
                                                                            {row.id}
                                                                        </StyledTableCell>
                                                                        <StyledTableCell>{row.valuename}</StyledTableCell>
                                                                        <StyledTableCell>
                                                                            <Button variant="contained" sx={{ minWidth: '35px', padding: '6px 8px' }} 
                                                                            onClick={() => handleTransferClick([row])}>
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
                                                            getOptionLabel={(option) => option.name}
                                                            renderInput={(params) => <TextField {...params} label="Set Name" />}
                                                            fullWidth
                                                            onChange={(event, newValue) => {
                                                                if (newValue) {
                                                                    const selectedRows = setname.filter((row) => row.valueId === newValue.valueId);
                                                                    handleTransferClick(selectedRows);
                                                                }
                                                            }}
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
                                                                {data2.map((row) => (
                                                                    <StyledTableRow key={row.name}>
                                                                        <StyledTableCell component="th" scope="row">
                                                                            {row.id}
                                                                        </StyledTableCell>
                                                                        <StyledTableCell>{row.valuename}</StyledTableCell>
                                                                        <StyledTableCell><Button variant="contained" sx={{ minWidth: '35px', padding: '6px 8px' }}
                                                                            onClick={() => moveItemUp(row)} disabled={data2.indexOf(row) === 0}><KeyboardDoubleArrowUpIcon /></Button></StyledTableCell>
                                                                        <StyledTableCell><Button variant="contained" sx={{ minWidth: '35px', padding: '6px 8px' }}
                                                                            onClick={() => moveItemDown(row)} disabled={data2.indexOf(row) === data2.length - 1}><KeyboardDoubleArrowDownIcon /></Button></StyledTableCell>
                                                                        <StyledTableCell sx={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDeleteClick([row])}><CloseIcon /></StyledTableCell>
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
