import React, {useState} from 'react'
import EmployeePage from './EmployeePage'

export default function EmployeeListItem(props) {

  return (
    <div className = 'ListItem'>
        <img src={props.employee.img} alt="" className = 'avatar'/>
        <div className="info">
            <div className="name">{props.employee.name}</div>
            <div className="title">{props.employee.title}</div>
        </div>
    </div>
  )
}

