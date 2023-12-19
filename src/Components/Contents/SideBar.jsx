import React from 'react'
import "./SideBar.css"

const styleDefault = {
    backgroundColor: 'black'
}
const SideBar = (props) => {
  return (
      <div className='sidebar' style={{backgroundColor:props.backgroundColor} ||styleDefault}>SideBar</div>
  )
}

export default SideBar