import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiRevanced } from 'react-icons/si'
import avatar from '../images/avatar-icon.png'

export default function navbar() {
  return (
    <header id='navbar'>
        <Link className="site-logo" to="/"><SiRevanced size={19}/></Link>
        <nav>
          <NavLink to="/host" className={({isActive}) => isActive ? "active-link" : null}>
            Host
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : null}>
            About
          </NavLink>
          <NavLink to="/vans"
            className={({isActive}) => isActive ? "active-link" : null}>
              Vans
          </NavLink>  
          
          <Link to="login" className="login-link">
            <img src={avatar} className="login-icon"/>
          </Link>
          
        </nav>
    </header>
  )
}
