import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {


  const links = <div className='flex flex-col lg:flex-row gap-2 items-start  justify-center text-left'>
    <li><NavLink className={({ isActive, isPending }) => { return isActive ?'active text-[#23BE0A] outline outline-[#23BE0A] font-playfair': isPending?'pending':''}} to='/'>Home</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) => { return isActive ? 'active text-[#23BE0A] outline outline-[#23BE0A] font-playfair' : isPending ? 'pending' : '' }} to='/listed-books'>Listed Books</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) => { return isActive ? 'active text-[#23BE0A] outline outline-[#23BE0A] font-playfair ' : isPending ? 'pending' : '' }} to='/pages-to-read'>Pages to Read</NavLink></li>

  </div>

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm font-workSans">
        <div className="navbar-start">

          <Link to={'/'} className="btn btn-ghost text-xl font-bold">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0">
              {links}
              
            </ul>
          </div>
          <div className='flex items-center gap-2'>
            <Link to={'/login'} className="btn bg-[#23BE0A] hidden lg:flex">Log In</Link>
            <Link to={'/signup'} className="btn bg-[#59C6D2] hidden lg:flex">Sign Up</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar