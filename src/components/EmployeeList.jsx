import React, {useState,useContext} from 'react'
import EmployeeListItem from './EmployeeListItem'
import {AppContext} from '../App'


export default function EmployeeList() {
  const {employees} = useContext(AppContext)
  return (
    <div className = 'leftThird' >
    {/* <EmployeeListItem employee={props.employees[0]}/> */}
    {employees.map((x)=>{
      return <EmployeeListItem employees={employees} employee={x}/>
    })}
    </div>
  )
}
