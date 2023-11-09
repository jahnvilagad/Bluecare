import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const initialData = [
  { id: 1, name: 'Option 1', valueId: 1 },
  { id: 2, name: 'Option 2', valueId: 2 },
  { id: 3, name: 'Option 3', valueId: 1 },
  { id: 4, name: 'Option 4', valueId: 3 },
];

function App() {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [data1, setData1] = useState(initialData);
  const [data2, setData2] = useState([]);

  const handleTransfer = (fromTable, toTable, selectedOption) => {
    if (selectedOption) {
      const fromTableData = fromTable === 1 ? data1 : data2;
      const toTableData = fromTable === 1 ? data2 : data1;
      const newData = fromTableData.filter((item) => item.valueId !== selectedOption.valueId);
      const selectedOptionData = initialData.filter((item) => item.valueId === selectedOption.valueId);
      toTableData.push(...selectedOptionData);
      fromTable === 1 ? setData1(newData) : setData2(newData);
      fromTable === 1 ? setSelectedOption1(null) : setSelectedOption2(null);
    }
  };

  const handleDelete = (fromTable, id) => {
    const fromTableData = fromTable === 1 ? data1 : data2;
    const toTableData = fromTable === 1 ? data2 : data1;
    const deletedItems = fromTableData.filter((item) => item.valueId === id);
    if (deletedItems.length > 0) {
      const newData = fromTableData.filter((item) => item.valueId !== id);
      toTableData.push(...deletedItems);
      fromTable === 1 ? setData1(newData) : setData2(newData);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <div>
        <Autocomplete
          options={data1}
          getOptionLabel={(option) => option.name}
          value={selectedOption1}
          onChange={(event, newValue) => {
            setSelectedOption1(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Select an option" />}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleTransfer(1, 2, selectedOption1)}
        >
          Transfer
        </Button>
      </div>

      <div style={{ display: 'flex', marginTop: '20px' }}>
        <TableContainer component={Paper} style={{ flex: 1, marginRight: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Value ID</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data1.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.valueId}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleTransfer(1, 2, item)}
                    >
                      Transfer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div>
          <Autocomplete
            options={data2}
            getOptionLabel={(option) => option.name}
            value={selectedOption2}
            onChange={(event, newValue) => {
              setSelectedOption2(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Select an option" />}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(2, selectedOption2 ? selectedOption2.valueId : null)}
          >
            Delete
          </Button>
        </div>

        <TableContainer component={Paper} style={{ flex: 1 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Value ID</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data2.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.valueId}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(2, item.valueId)}
                    >
                      Delete
                    </Button>
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
