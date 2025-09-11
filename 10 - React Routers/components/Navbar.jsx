// import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='bg-gray-600 p-4 text-white'>
      <nav className='flex gap-10'>
        <NavLink className={(e) => {return e.isActive?"text-gray-400": ""}} to="/">Home</NavLink>
        <NavLink className={(e) => {return e.isActive?"text-gray-400": ""}} to="/about">About</NavLink>
        <NavLink className={(e) => {return e.isActive?"text-gray-400": ""}} to="/login">Login</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
