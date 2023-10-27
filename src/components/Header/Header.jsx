import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to='/'>
        Home
      </NavLink>

      <br />
      <NavLink to='/movies'>
        Movies
      </NavLink>
    </div>

  )
}

export default Header
