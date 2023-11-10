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
import Button from '@mui/material/Button';

const options1 = [
  { id: 1, name: 'Option 1', valueId: 1 },
  { id: 2, name: 'Option 2', valueId: 2 },
  { id: 3, name: 'Option 3', valueId: 1 },
  { id: 4, name: 'Option 4', valueId: 3 },
];

const options2 = [
  { id: 5, name: 'Option 5', valueId: 4 },
  { id: 6, name: 'Option 6', valueId: 5 },
  { id: 7, name: 'Option 7', valueId: 4 },
  { id: 8, name: 'Option 8', valueId: 6 },
];

const initialData1 = [
  { id: 1, valueId: 1, dataName: 'Data for Option 1', dataValue: 'Value 1' },
  { id: 2, valueId: 2, dataName: 'Data for Option 2', dataValue: 'Value 2' },
];

const initialData2 = [
  { id: 3, valueId: 4, dataName: 'Data for Option 5', dataValue: 'Value 4' },
  { id: 4, valueId: 5, dataName: 'Data for Option 6', dataValue: 'Value 5' },
];

function App() {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [data1, setData1] = useState(initialData1);
  const [data2, setData2] = useState(initialData2);

  const handleMoveToSecondTable = () => {
    if (selectedOption1) {
      const movedRow = data1.find((row) => row.valueId === selectedOption1.valueId);
      setData2([...data2, movedRow]);
      setData1(data1.filter((row) => row.valueId !== selectedOption1.valueId));
    }
  };

  const handleMoveToFirstTable = () => {
    if (selectedOption2) {
      const movedRow = data2.find((row) => row.valueId === selectedOption2.valueId);
      setData1([...data1, movedRow]);
      setData2(data2.filter((row) => row.valueId !== selectedOption2.valueId));
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <div>
        <Autocomplete
          options={options1}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            setSelectedOption1(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Select an option for the First Table" />}
        />

        {selectedOption1 && (
          <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Data Name</TableCell>
                  <TableCell>Data Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data1.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.dataName}</TableCell>
                    <TableCell>{row.dataValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button onClick={handleMoveToSecondTable}>Move to Second Table</Button>
          </TableContainer>
        )}
      </div>

      <div>
        <Autocomplete
          options={options2}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            setSelectedOption2(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Select an option for the Second Table" />}
        />

        {selectedOption2 && (
          <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Data Name</TableCell>
                  <TableCell>Data Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data2.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.dataName}</TableCell>
                    <TableCell>{row.dataValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button onClick={handleMoveToFirstTable}>Move to First Table</Button>
          </TableContainer>
        )}
      </div>
    </div>
  );
}

export default App;
