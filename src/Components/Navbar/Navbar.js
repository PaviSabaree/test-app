import React from 'react'
import './Navbar.css'
import { BsSearch, BsFolderFill } from 'react-icons/bs';
import { MdSupervisorAccount } from 'react-icons/md';
import {FiSettings} from 'react-icons/fi'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='topnav'>
            <ul>
           <li><a href='#search'><BsSearch/>Search</a> </li> 
           <li> <a href='#account'><MdSupervisorAccount/>Account</a></li> 
           <li> <a href='#folder'><BsFolderFill/>Folder</a> </li>
            </ul>
      
        </div>
<div className='bottomnav'>
    <ul>
    <FiSettings/>
        <li>Settings</li>
    </ul>
</div>

    </div>
  )
}

export default Navbar