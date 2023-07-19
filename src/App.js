import logo from './logo.svg';
import './App.css';
import React from 'react'
import AppPage from './components/AppPage'
import Homepage from './components/Homepage'
import EmployeePage from './components/EmployeePage'
import employees from './models/employees'
const state = {
  employees
}

function App() {
  return (
    <div className = 'mainContainer'>
        <Homepage employees={state.employees}/>
        <EmployeePage />
    </div>
  );
}
export default App;
