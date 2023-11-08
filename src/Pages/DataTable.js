
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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


export default function DataTable({ selectedOption }) {

    const data = [
        { id: 1, name: 'Data for Option 1', value: 'Value 1' },
        { id: 2, name: 'Data for Option 2', value: 'Value 2' },
        { id: 3, name: 'Data for Option 3', value: 'Value 3' },
    ];

    return (
        <>
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Box position="relative">
                        <Grid container spacing={2}>
                            <Grid item lg={12} md={12}>
                                <Card sx={{ margin: "1.5rem", marginTop: "-3rem", zIndex: 9999 }}>
                                    <CardContent>
                                        {selectedOption && (
                                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell>ID</StyledTableCell>
                                                        <StyledTableCell>Name</StyledTableCell>
                                                        <StyledTableCell>Value</StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {data.filter((item) => item.name === selectedOption).map((item) => (
                                                        <TableRow key={item.id}>
                                                            <StyledTableCell>{item.id}</StyledTableCell>
                                                            <StyledTableCell>{item.name}</StyledTableCell>
                                                            <StyledTableCell>{item.value}</StyledTableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        )}
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
