import { getCollectionFilms } from 'api/getFilms'
import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Home = ({ }) => {

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [films, setFilms] = useState(null)

  const fetchFilms = useCallback(async () => {
    try {
      setIsLoading(true)
      setFilms(null)
      const data = await getCollectionFilms()
      console.log(data);
      setFilms(data.results)
    } catch (error) {
      setError(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchFilms()
  }, [fetchFilms])

  return (
    <nav>
      <div>
        <span>
          <NavLink to='/'>
            Home
          </NavLink>
        </span>
        <br />
        <NavLink to='/movies'>
          Movies
        </NavLink>

        <h1>Trending today</h1>
        {isLoading && <h1>Loading...</h1>}
        <ul>
          {films && films.map((film) => (
            <li key={film.id}>{film.original_title}</li>
          ))}
        </ul>
      </div>
    </nav>

  )
}
