import React, {useState} from 'react'
import EmployeeListItem from './EmployeeListItem'


// const state = {
//   employees
// }
export default function EmployeeList(props) {
  const [current, setCurrent] = useState(0)
  return (
    <div className = 'leftThird' >
    {/* <EmployeeListItem employee={props.employees[0]}/> */}
    {props.employees.map((x)=>{
      return <EmployeeListItem employees={props.employee} employee={x}/>
    })}
    </div>
  )
}
