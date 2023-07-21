import logo from './logo.svg';
import './App.css';
import React, {useState, createContext} from 'react'
import AppPage from './components/AppPage'
import Homepage from './components/Homepage'
import EmployeePage from './components/EmployeePage'
import employeeInfo from './models/employees'

export const AppContext = createContext();

function App() {
  const [data,setData]=useState(employeeInfo)
  const [current,setCurrent]=useState(employeeInfo[0])
  return (
    <div className = 'mainContainer'>
      <AppContext.Provider value={{data,setData,current,setCurrent}}>
        <Homepage />
        <EmployeePage />
        </AppContext.Provider>
    </div>
  );
}
export default App;
