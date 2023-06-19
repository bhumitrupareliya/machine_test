import React from 'react'
import '../Styles/Sidebar.css'
import img1 from '../Images/1.png'
import img2 from '../Images/2.png'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_head'></div>
        <ul>
            <li><a href='#'><img src={img1}/></a></li>
            <li><a href='#'><img src={img2}/></a></li>
            <li><a href='#'><img src={img1}/></a></li>
            <li><a href='#'><img src={img2}/></a></li>
            <li><a href='#' className='active'><img src={img1}/></a></li>
            <li><a href='#'><img src={img2}/></a></li>
        </ul>
    </div>
  )
}

export default Sidebar