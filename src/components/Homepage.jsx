import React, {useState,useContext} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import {AppContext} from '../App'

function HomePage() {
  return (
    <div className = 'leftContainer'>
        <Header header="Employee Directory"/>
        <SearchBar />
        <EmployeeList />
    </div>
  )
}

export default HomePage