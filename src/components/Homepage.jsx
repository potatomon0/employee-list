import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

export default function () {
  return (
    <div className = 'leftContainer'>
        <Header />
        <SearchBar />
        <EmployeeList />
    </div>
  )
}
