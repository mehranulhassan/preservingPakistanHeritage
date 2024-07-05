import React from 'react'
import './navbar.css'
import navlogo from '../../assets/nav-logo.jpg';
import navProfile from '../../assets/nav-profile.svg'

const navbar = () => {
  return (
    <div className='navbar'>
    <img src={navlogo} alt="" className='nav-logo'/>
    <img src={navProfile} alt="" className='nav-profile'/>




    </div>
  )
}

export default navbar