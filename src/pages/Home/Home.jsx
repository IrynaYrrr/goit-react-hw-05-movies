import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <nav>
    <div>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/movies'>
        Movies
      </NavLink>
    </div>
  </nav>

  )
}
