import { getCollectionFilms, getFilmsBySearch } from 'api/getFilms'
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MoviesList = ({ query }) => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [films, setFilms] = useState(null)

  const fetchFilms = useCallback(async () => {
    try {
      setIsLoading(true)
      setFilms(null)
      const data = query?(await getFilmsBySearch(query)):(await getCollectionFilms())
      setFilms(data.results)
    } catch (error) {
      setError(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }, [query])

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
            <Link to={`/movies/${film.id}`} state={film}>{film.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
