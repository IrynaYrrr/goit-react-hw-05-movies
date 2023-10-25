import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <span>
        <NavLink to='/'>
          Home
        </NavLink>
      </span>
      <br />
      <span>
        <NavLink to='/movies'>
          Movies
        </NavLink>
      </span>
    </div>

  )
}

export default Header
