import React from 'react'
import { Link } from 'react-router-dom'
export default function navbar() {
  return (
    <section id='navbar'>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    </section>
  )
}
