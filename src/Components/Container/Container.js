import React from 'react'
import './Container.css'
import {BsArrowLeft} from 'react-icons/bs'

import Education from '../Education/Education'

function Container() {
  return (
    <div className='container'>
     <div className='sub-container'>
       
       <h4><BsArrowLeft/> Unnamed</h4>
       <ul>
         <li><a href=''>All </a> </li>
         <li><a href=''> Work</a> </li>
         <li><a href=''> Education </a></li>
         <li><a href=''> Health Care </a></li>
         <li><a href=''>Transport  </a></li>
         <li><a href=''> Shopping</a> </li>
         <li><a href=''> F&B</a> </li>
         <li><a href=''> Population</a> </li>
         <li><a href=''> Heatmap</a> </li>
        
       </ul>
     </div>
        <Education/>
    </div>
  )
}

export default Container