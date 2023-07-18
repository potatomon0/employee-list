import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import employees from '../models/employees'

// const state = {
//   employees
// }
export default function EmployeeList() {
  return (
    <div className = 'leftThird' >
        <h3>{state.employees.map((x)=>{
        return <EmployeeListItem  x = {x} />
    })}
    </h3>
    </div>
  )
}
