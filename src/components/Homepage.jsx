import React, {useState,useContext} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import {AppContext} from '../App'

function HomePage() {
  const {employees}=useContext(AppContext)
  return (
    <div className = 'leftContainer'>
        <Header />
        <SearchBar />
        <EmployeeList />
        {/* <h2>{props.employees[0].name}</h2> */}
    </div>
  )
}

export default HomePage