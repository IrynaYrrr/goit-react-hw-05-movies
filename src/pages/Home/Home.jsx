import { getCollectionFilms } from 'api/getFilms'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

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
    <div>
      <h1>Trending today</h1>
      {isLoading && <h1>Loading...</h1>}
      <ul>
        {films && films.map((film) => (
          <li key={film.id}>
            <Link to='/movies/movieId' key={film.id}>{film.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
