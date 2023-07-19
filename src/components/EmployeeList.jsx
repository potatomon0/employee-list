import React from 'react'
import EmployeeListItem from './EmployeeListItem'


// const state = {
//   employees
// }
export default function EmployeeList(props) {
  return (
    <div className = 'leftThird' >
        {/* <h3>{employees.map((x)=>{
        return <EmployeeListItem  x = {x} /> 
    })}
    </h3>*/}
    {/* <EmployeeListItem employees={props.employees}/> */}
    <EmployeeListItem employee={props.employees[0]}/>
    <EmployeeListItem employee={props.employees[1]}/>
    <EmployeeListItem employee={props.employees[2]}/>
    <EmployeeListItem employee={props.employees[3]}/>
    <EmployeeListItem employee={props.employees[4]}/>
    <EmployeeListItem employee={props.employees[5]}/>
    </div>
  )
}
