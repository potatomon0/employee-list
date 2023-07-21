import React, { useState, useContext } from 'react'
import Header from './Header'
import EmployeeListItem from './EmployeeListItem'
import { AppContext } from '../App'

export default function EmployeePage() {
  let { data, current } = useContext(AppContext)
  return (
    <div className='rightContainer'>
      <Header header="Employee"/>
      <div className='infoMain'>
        {/* <EmployeeListItem worker={current}/> */}
        <div className="top">
          <img src={current.img} alt="" className='avatar2' />
          <div className='topInfo'>
            <div className='name'>{current.name}</div>
            <div className='title'>{current.title}</div>
            
          </div>
        </div>
        <div className="item">Call Office: <br/>{current.callOffice}</div>
        <div className="item">Call Mobile: <br/>{current.callMobile}</div>
        <div className="item">SMS:<br/>{current.sms}</div>
        <div className="item">Email:<br/>{current.email}</div>

      </div>
      {/* Avatar --- Name/title */}
      {/* Office num */}
      {/* Mobile num */}
      {/* Text num */}
      {/* Email */}

    </div>
  )
}
