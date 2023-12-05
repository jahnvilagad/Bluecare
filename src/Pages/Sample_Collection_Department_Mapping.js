
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


// const location = [
//     { id: 1, name: 'Suzie Turn1', valueId: 1 },
//     { id: 2, name: 'Suzie Turn2', valueId: 2 },
//     { id: 3, name: 'Suzie Turn3', valueId: 1 },
//     { id: 4, name: 'Suzie Turn4', valueId: 3 },
// ];

const location_name = [
    { id: 1, name: 'Suzie Turn1', valueId: 1, department: 'Administration', subdepartment: 'Document', dataValue: 'Value 1' },
    { id: 2, name: 'Suzie Turn2', valueId: 2, department: 'Clinical Pathology', subdepartment: 'Clinical Pathology', dataValue: 'Value 2' },
    { id: 3, name: 'Suzie Turn2', valueId: 2, department: 'Clinical Pathology', subdepartment: 'Biochemistry', dataValue: 'Value 2' },
    { id: 4, name: 'Suzie Turn1', valueId: 1, department: 'Imaging', subdepartment: 'X-Ray', dataValue: 'Value 1' },
    { id: 5, name: 'Suzie Turn1', valueId: 1, department: 'Imaging', subdepartment: 'Utrasound', dataValue: 'Value 1' },
    { id: 6, name: 'Suzie Turn1', valueId: 1, department: 'Imaging', subdepartment: 'Mammogram', dataValue: 'Value 1' },
    { id: 7, name: 'Suzie Turn4', valueId: 3, department: 'Haematology & Blood Transfusion', subdepartment: 'Day Care', dataValue: 'Value 3' },
    { id: 8, name: 'Suzie Turn4', valueId: 3, department: 'Haematology & Blood Transfusion', subdepartment: 'Component', dataValue: 'Value 3' },
    { id: 9, name: 'Suzie Turn4', valueId: 3, department: 'Haematology & Blood Transfusion', subdepartment: 'doner unit', dataValue: 'Value 3' },
];

// const center = [
//     { id: 5, name: 'Radiology', valueId: 4 },
//     { id: 6, name: 'MRI', valueId: 5 },
//     { id: 7, name: 'X-Ray', valueId: 6 },
//     { id: 8, name: 'Ultra Sound', valueId: 7 },
// ];

const center_data = [
    { id: 10, name: 'MRI', valueId: 5, subdepartment: 'Document', dataValue: 'Value 5' },
    { id: 11, name: 'X-Ray', valueId: 6, subdepartment: 'Clinical Pathology', dataValue: 'Value 6' },
    { id: 12, name: 'Ultra Sound', valueId: 7, subdepartment: 'Biochemistry', dataValue: 'Value 7' },
    { id: 13, name: 'Radiology', valueId: 4, subdepartment: 'X-Ray', dataValue: 'Value 4' },
    { id: 14, name: 'Radiology', valueId: 4, subdepartment: 'Utrasound', dataValue: 'Value 4' },
    { id: 15, name: 'Radiology', valueId: 4, subdepartment: 'Mammogram', dataValue: 'Value 4' },
    { id: 16, name: 'MRI', valueId: 5, subdepartment: 'Day Care', dataValue: 'Value 5' },
    { id: 17, name: 'X-Ray', valueId: 6, subdepartment: 'Component', dataValue: 'Value 6' },
    { id: 18, name: 'Radiology', valueId: 4, subdepartment: 'MRI', dataValue: 'Value 4' },
];


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
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);


    // const [data, setData] = useState(location);
    // const filteredLocation = data1.filter((row) => selectedLocation && row.valueId === selectedLocation.valueId);
    // const filteredCenter = data2.filter((row) => selectedCenter && row.valueId === selectedCenter.valueId);


    // const filteredLocation = firstTableData.filter(
    //     (row) => selectedLocation && row.valueId === selectedLocation.valueId
    // );

    // const filteredCenter = firstTableData1.filter(
    //     (row) => selectedLocation && row.valueId === selectedLocation.valueId
    // );



    // const filteredCenter = secondTableData.filter(
    //     (row) => selectedCenter && row.valueId === selectedCenter.valueId
    // );

    const handleTransferClick = (rows) => {
        setData2([...data2, ...rows]);
        setData1(data1.filter((data) => !rows.some((row) => row.id === data.id)));
    };

    const handleDeleteClick = (rows) => {
        setData1([...data1, ...rows]);
        setData2(data2.filter((data) => !rows.some((row) => row.id === data.id)));
    };

    // const [data, setData] = useState([
    //     { id: 1, department: 'Administratio', subdepartment: 'Document' },
    //     { id: 2, department: 'Clinical Pathology', subdepartment: 'Clinical Pathology' },
    //     { id: 3, department: 'Imaging', subdepartment: 'X-Ray' },
    //     { id: 4, department: 'Haematology & Blood Transfusion', subdepartment: 'Day Care' },
    // ]);

    // const [selectedData, setSelectedData] = useState([]);

    // const handleTransferClick = (row) => {
    //     // Remove the selected item from the 'data' array
    //     setData(location_name.filter((d) => d.id !== row.id));
    //     // Add the selected row to the 'selectedData' array
    //     setSelectedCenter([...selectedCenter, row]);
    // };

    // const handleDeleteClick = (row) => {
    //     // Remove the selected item from the 'selectedData' array
    //     setSelectedCenter(selectedCenter.filter((d) => d.id !== row.id));
    //     // Add the selected item back to the 'data' array
    //     setData([...center_data, row]);
    // };

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
                                                <Grid item lg={6} sm={12} xs={12} sx={{ marginBottom: "2rem" }}>
                                                    <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={location_name}
                                                        getOptionLabel={(option) => option.name}
                                                        onChange={(event, newValue) => {
                                                            if (newValue) {
                                                                const selectedRows = location_name.filter((row) => row.valueId === newValue.valueId);
                                                                handleDeleteClick(selectedRows);
                                                              }
                                                        }}
                                                        renderInput={(params) => <TextField {...params} label="Location Name" />}
                                                    />

                                                    <Box height={30}></Box>

                                                    <TableContainer component={Paper}>
                                                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <StyledTableCell>SN</StyledTableCell>
                                                                    <StyledTableCell>Department</StyledTableCell>
                                                                    <StyledTableCell>Sub Department</StyledTableCell>
                                                                    <StyledTableCell>ADD</StyledTableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {data1.map((row) => (
                                                                    <StyledTableRow key={row.id}>
                                                                        <StyledTableCell component="th" scope="row">
                                                                            {row.id}
                                                                        </StyledTableCell>
                                                                        <StyledTableCell>{row.department}</StyledTableCell>
                                                                        <StyledTableCell>{row.subdepartment}</StyledTableCell>
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

                                                <Grid item lg={6} sm={12} xs={12} sx={{ marginBottom: "2rem" }}>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Autocomplete
                                                            disablePortal
                                                            id="combo-box-demo"
                                                            options={center_data}
                                                            getOptionLabel={(option) => option.name}
                                                            onChange={(event, newValue) => {
                                                                if (newValue) {
                                                                    const selectedRows = center_data.filter((row) => row.valueId === newValue.valueId);
                                                                    handleTransferClick(selectedRows);
                                                                  }
                                                            }}
                                                            renderInput={(params) => <TextField {...params} label="Center Name" />}
                                                            fullWidth
                                                            sx={{ marginRight: '1rem' }}
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
                                                                {data2.map((row) => (
                                                                    <StyledTableRow key={row.id}>
                                                                        <StyledTableCell component="th" scope="row">
                                                                            {row.id}
                                                                        </StyledTableCell>
                                                                        <StyledTableCell>{row.subdepartment}</StyledTableCell>
                                                                        <StyledTableCell sx={{ color: 'red', cursor: 'pointer' }}
                                                                            onClick={() => handleDeleteClick([row])}><CloseIcon /></StyledTableCell>
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
