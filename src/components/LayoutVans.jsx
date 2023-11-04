// For Host van sub navigation
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LayoutVans() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return ( 
        <>
            <nav className="host-van-detail-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Details
                </NavLink>

                <NavLink
                    to="pricing"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Pricing
                </NavLink>

                <NavLink
                    to="photos"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Photos
                </NavLink>
            </nav>
        </>
    )
  }
  