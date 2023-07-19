import React, {useState,useContext} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import {AppContext} from '../contexts/app_context'

function HomePage(props) {
  // let [employee, setEmployee] = useContext(AppContext)
  // const state = {
    
  // }
  return (
    <div className = 'leftContainer'>
        <Header />
        <SearchBar />
        <EmployeeList employees={props.employees}/>
        {/* <h2>{props.employees[0].name}</h2> */}
    </div>
  )
}

export default HomePage