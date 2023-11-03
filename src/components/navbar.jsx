import React from 'react'
import { Link } from 'react-router-dom'
import { SiRevanced } from 'react-icons/si'
export default function navbar() {
  return (
    <section id='navbar'>
        <Link className="site-logo" to="/"><SiRevanced size={19}/>anLife</Link>
        <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
        </nav>
    </section>
  )
}
