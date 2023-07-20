import React, {useState, useContext} from 'react'
import EmployeePage from './EmployeePage'
import {AppContext} from '../App'

export default function EmployeeListItem(props) {
  const {employee}=useContext(AppContext)
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

