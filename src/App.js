import React from 'react';
import './App.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Prescriptions from './Pages/Prescriptions';
import Dashboard from './Pages/Dashboard';
import Specialities from './Pages/Specialities';
import Upload_Prescriptions from './Pages/Upload_Prescriptions';
import Profile from './Pages/Profile';
import Medical_History from './Pages/Medical_History';
import Appointments from './Pages/Appointments';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/prescription' element={<Prescriptions />}></Route>
            <Route path='/speciality' element={<Specialities />}></Route>
            <Route path='/upload-prescriptions' element={<Upload_Prescriptions />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/medial-history' element={<Medical_History/>}></Route>
            <Route path='/appointments' element={<Appointments/>}></Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
