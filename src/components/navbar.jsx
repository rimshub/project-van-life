import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiRevanced } from 'react-icons/si'
export default function navbar() {
  return (
    <header id='navbar'>
        <Link className="site-logo" to="/"><SiRevanced size={19}/>anLife</Link>
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
          
        </nav>
    </header>
  )
}
