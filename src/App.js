import React from 'react';
import './App.css';
import Sidenav from './Components/Sidenav';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Prescriptions from './Pages/Prescriptions';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/' element={<Prescriptions />}></Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
