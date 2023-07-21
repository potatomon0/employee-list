import React, {useContext} from 'react'
import {AppContext} from '../App'

export default function EmployeeListItem(props) {
  const {setCurrent} = useContext(AppContext)
  // console.log(props.worker.name)
  return (
    //anytime an arguement has to be passed down we have to create anonymous arrow function with it
    <div className = 'ListItem' onClick={()=>{setCurrent(props.worker)}}>
      {/* onclick set the current state to props.worker (the current employee it iterated through) */}
        <img src={props.worker.img} alt="" className = 'avatar'/>
        <div className="info">
            <div className="name">{props.worker.name}</div>
            <div className="title">{props.worker.title}</div>
        </div>
    </div>
  )
}

// export default function EmployeeListItem(props) {
//   const {employee}=useContext(AppContext)
//   return (
//     <div className = 'ListItem'>
//         <img src={props.employee.img} alt="" className = 'avatar'/>
//         <div className="info">
//             <div className="name">{props.employee.name}</div>
//             <div className="title">{props.employee.title}</div>
//         </div>
//     </div>
//   )
// }