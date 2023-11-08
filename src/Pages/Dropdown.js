import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const options = [
    { id: 1, name: 'Option 1', valueId: 1 },
    { id: 2, name: 'Option 2', valueId: 2 },
    { id: 3, name: 'Option 3', valueId: 1 },
    { id: 4, name: 'Option 4', valueId: 3 },
];

const data = [
    { id: 1, valueId: 1, dataName: 'Data for Option 1', dataValue: 'Value 1' },
    { id: 2, valueId: 2, dataName: 'Data for Option 2', dataValue: 'Value 2' },
    { id: 3, valueId: 1, dataName: 'Data for Option 3', dataValue: 'Value 1' },
    { id: 4, valueId: 3, dataName: 'Data for Option 4', dataValue: 'Value 3' },
    { id: 5, valueId: 2, dataName: 'Data for Option 5', dataValue: 'Value 2' },
];

export default function Dropdown() {
    const [selectedOption, setSelectedOption] = useState(null);

    const filteredData = data.filter(
        (item) => selectedOption && item.valueId === selectedOption.valueId
    );

    return (
        <div style={{ margin: '20px' }}>
            <Autocomplete
                options={options}
                getOptionLabel={(option) => option.name}
                onChange={(event, newValue) => {
                    setSelectedOption(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Select an option" />}
            />

            {selectedOption && (
                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.dataName}</TableCell>
                                    <TableCell>{item.dataValue}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}


