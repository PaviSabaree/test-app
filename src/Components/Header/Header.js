import React from 'react'
import './Header.css';
// import {Navbar, Nav} from 'react-bootstrap'
import { MdNotifications } from "react-icons/md";
import { MdForum } from "react-icons/md";


function Header() {
  return (
    <div className='header'>

        <div className='logoicon'>
            <img src='test icon.png' alt='icon'></img>
        </div>
        <div className='title-left'>
          <a className='active' href='#prediction'> Prediction</a>
          <a href='#performance'>Performance </a> 
          <a href='#engagement'> Engagement</a> 
        </div>

        <div className='title-right'>
        <MdNotifications/>
        <MdForum/>
        </div>

         </div>
  )
}

export default Header