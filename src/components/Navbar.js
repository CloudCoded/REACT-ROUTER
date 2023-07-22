import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline', 
        }
    }
  return (
    <nav className='primaryNav'>
        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        <NavLink style={navLinkStyles} to='/products'>Products</NavLink>

    </nav>
  )
}

export default Navbar