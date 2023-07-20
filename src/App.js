import logo from './logo.svg';
import './App.css';
import React, {useState, createContext} from 'react'
import AppPage from './components/AppPage'
import Homepage from './components/Homepage'
import EmployeePage from './components/EmployeePage'
import employees from './models/employees'

export const AppContext = createContext();

function App() {
  return (
    <div className = 'mainContainer'>
      <AppContext.Provider value={{employees}}>
        <Homepage />
        <EmployeePage />
        </AppContext.Provider>
    </div>
  );
}
export default App;
