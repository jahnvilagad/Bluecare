import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Prescriptions from './Pages/Prescriptions';
import Dashboard from './Pages/Dashboard';
import Specialities from './Pages/Specialities';
import Upload_Prescriptions from './Pages/Upload_Prescriptions';
import Profile from './Pages/Profile';
import Medical_History from './Pages/Medical_History';
import Appointments from './Pages/Appointments';
import General_Practice from './Pages/General_Practice';
import Laboratory from './Pages/Laboratory';
import Dental from './Pages/Dental';
import Nurse from './Pages/Nurse';
import Obs_Gyn from './Pages/Obs_Gyn';
import Pediatrician from './Pages/Pediatrician';
import Appointment_Request from './Pages/Appointment_Request';
import Patient_Profile from './Pages/Patient_Profile';
import Sample_Collection_Department_Mapping from './Pages/Sample_Collection_Department_Mapping';
import Set_value_master from './Pages/Set_value_master';
import Dropdown from './Pages/Dropdown';
import Login from './Login';
import Registration from './Registration';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/prescription' element={<Prescriptions />}></Route>
        <Route path='/speciality' element={<Specialities />}></Route>
        <Route path='/upload-prescriptions' element={<Upload_Prescriptions />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/medial-history' element={<Medical_History />}></Route>
        <Route path='/appointments' element={<Appointments />}></Route>
        <Route path='/general-practice' element={<General_Practice />}></Route>
        <Route path='/dental' element={<Dental />}></Route>
        <Route path='/laboratory' element={<Laboratory />}></Route>
        <Route path='/nurse' element={<Nurse />}></Route>
        <Route path='/obs-gyn' element={<Obs_Gyn />}></Route>
        <Route path='/pediatrician' element={<Pediatrician />}></Route>
        <Route path='/appointment_request' element={<Appointment_Request />}></Route>
        <Route path='/patient_profile' element={<Patient_Profile />}></Route>
        <Route path='/sample-collection-department-mapping' element={<Sample_Collection_Department_Mapping />}></Route>
        <Route path='/set-value-master' element={<Set_value_master />}></Route>
        <Route path='/dropdown' element={<Dropdown />}></Route>
        <Route path='/register' element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
