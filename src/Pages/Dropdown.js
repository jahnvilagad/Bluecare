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

const options = [
  { id: 1, name: 'Option 1', valueId: 1 },
  { id: 2, name: 'Option 2', valueId: 2 },
  { id: 3, name: 'Option 3', valueId: 1 },
  { id: 4, name: 'Option 4', valueId: 3 },
];

const initialData = [
  { id: 1, valueId: 1, dataName: 'Data for Option 1', dataValue: 'Value 1' },
  { id: 2, valueId: 2, dataName: 'Data for Option 2', dataValue: 'Value 2' },
];

function App() {
  const [firstTableSelectedOption, setFirstTableSelectedOption] = useState(null);
  const [secondTableSelectedOption, setSecondTableSelectedOption] = useState(null);
  const [firstTableData, setFirstTableData] = useState(initialData);
  const [secondTableData, setSecondTableData] = useState([]);

  const firstTableFilteredData = firstTableData.filter(
    (item) => firstTableSelectedOption && item.valueId === firstTableSelectedOption.valueId
  );

  const secondTableFilteredData = secondTableData.filter(
    (item) => secondTableSelectedOption && item.valueId === secondTableSelectedOption.valueId
  );

  const handleMoveToSecondTable = () => {
    setSecondTableData([...secondTableData, ...firstTableFilteredData]);
    setFirstTableData(firstTableData.filter((item) => !firstTableFilteredData.includes(item)));
  };

  const handleMoveToFirstTable = () => {
    setFirstTableData([...firstTableData, ...secondTableFilteredData]);
    setSecondTableData(secondTableData.filter((item) => !secondTableFilteredData.includes(item)));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <div>
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            setFirstTableSelectedOption(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Select an option for the First Table" />}
        />


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
              {firstTableSelectedOption && (
                firstTableFilteredData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.dataName}</TableCell>
                    <TableCell>{item.dataValue}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          <Button onClick={handleMoveToSecondTable}>Move to Second Table</Button>
        </TableContainer>

      </div>

      <div>
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            setSecondTableSelectedOption(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Select an option for the Second Table" />}
        />


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
              {secondTableSelectedOption && (
                secondTableFilteredData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.dataName}</TableCell>
                    <TableCell>{item.dataValue}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          <Button onClick={handleMoveToFirstTable}>Move to First Table</Button>
        </TableContainer>

      </div>
    </div>
  );
}

export default App;
