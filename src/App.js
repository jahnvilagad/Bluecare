import React from 'react';
import './App.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Prescriptions from './Pages/Prescriptions';
import Dashboard from './Pages/Dashboard';
import Specialities from './Pages/Specialities';
import Upload_Prescriptions from './Pages/Upload_Prescriptions';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/prescription' element={<Prescriptions />}></Route>
            <Route path='/speciality' element={<Specialities />}></Route>
            <Route path='/upload-prescriptions' element={<Upload_Prescriptions />}></Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
