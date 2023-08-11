import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/activities">activities</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar
