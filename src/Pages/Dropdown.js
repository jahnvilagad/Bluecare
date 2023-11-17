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

const optionsTable1 = [
  { id: 1, name: 'Option 1A', valueId: 1, dataName: 'Data for Option 1A', dataValue: 'Value 1A' },
  { id: 2, name: 'Option 2A', valueId: 2, dataName: 'Data for Option 2A', dataValue: 'Value 2A' },
  { id: 3, name: 'Option 3A', valueId: 1, dataName: 'Data for Option 3A', dataValue: 'Value 3A' },
  { id: 4, name: 'Option 4A', valueId: 3, dataName: 'Data for Option 4A', dataValue: 'Value 4A' },
];

const optionsTable2 = [
  { id: 5, name: 'Option 5B', valueId: 4, dataName: 'Data for Option 5B', dataValue: 'Value 5B' },
  { id: 6, name: 'Option 6B', valueId: 5, dataName: 'Data for Option 6B', dataValue: 'Value 6B' },
  { id: 7, name: 'Option 7B', valueId: 4, dataName: 'Data for Option 7B', dataValue: 'Value 7B' },
  { id: 8, name: 'Option 8B', valueId: 6, dataName: 'Data for Option 8B', dataValue: 'Value 8B' },
];

function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const handleMoveToSecondTable = (rows) => {
    setData2([...data2, ...rows]);
    setData1(data1.filter((data) => !rows.some((row) => row.id === data.id)));
  };

  const handleMoveToFirstTable = (rows) => {
    setData1([...data1, ...rows]);
    setData2(data2.filter((data) => !rows.some((row) => row.id === data.id)));
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      <div>
        <Autocomplete
          options={optionsTable1}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            if (newValue) {
              const selectedRows = optionsTable1.filter((row) => row.valueId === newValue.valueId);
              handleMoveToFirstTable(selectedRows);
            }
          }}
          renderInput={(params) => <TextField {...params} label="Add to First Table" />}
        />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Data Name</TableCell>
                <TableCell>Data Value</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data1.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.dataName}</TableCell>
                  <TableCell>{row.dataValue}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleMoveToSecondTable([row])}>Move to Second Table</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        <Autocomplete
          options={optionsTable2}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            if (newValue) {
              const selectedRows = optionsTable2.filter((row) => row.valueId === newValue.valueId);
              handleMoveToSecondTable(selectedRows);
            }
          }}
          renderInput={(params) => <TextField {...params} label="Add to Second Table" />}
        />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Data Name</TableCell>
                <TableCell>Data Value</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data2.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.dataName}</TableCell>
                  <TableCell>{row.dataValue}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleMoveToFirstTable([row])}>Move to First Table</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;
