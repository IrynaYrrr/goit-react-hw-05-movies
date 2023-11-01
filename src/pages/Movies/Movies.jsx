import { getFilmsBySearch } from 'api/getFilms'
import MoviesList from 'components/MoviesList/MoviesList'
import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Movies = () => {
  const [query, setQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [films, setFilms] = useState(null)

  const fetchFilms = useCallback(async (query) => {
    try {
      setIsLoading(true)
      setFilms(null)
      const data = await getFilmsBySearch(query)
      setFilms(data.results)
    } catch (error) {
      setError(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const searchQuery = searchParams.get('search') ?? ''

  const handleChange = ({ target: { value } }) => {
    value ? setSearchParams({ search: value }) : setSearchParams({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(searchQuery)
    fetchFilms(searchQuery)
  }

  useEffect(() => {
    searchQuery && setQuery(searchQuery)
    fetchFilms(searchQuery)
  }, [])

  return (
    <>
      {error && <h1>{error}</h1>}
      {
        isLoading
          ? <h1>Loading</h1>
          : <form onSubmit={handleSubmit}>
            <input
              name='title'
              type='text'
              onChange={handleChange}
              className='form-control'
              id='exampleInputTodo'
              value={searchQuery}
            />
            <button>Search</button>
            {query && <MoviesList films={films} />}
          </form>
      }
    </>
  )
}
export default Movies
