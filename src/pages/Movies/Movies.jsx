import { getFilmsBySearch } from 'api/getFilms'
import MoviesList from 'components/MoviesList/MoviesList'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Movies = () => {
  const [query, setQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [films, setFilms] = useState(null)

  const searchQuery = searchParams.get('search') ?? ''

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchParams({ search: query })
  }

  const handleChange = ({ target: { value } }) => {
    setQuery(value)
  }

  useEffect(() => {
    const fetchFilms = (async (query) => {
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
    })
    fetchFilms(searchQuery)
    setQuery(searchQuery)
  }, [searchQuery])

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
              className='form-control'
              id='exampleInputTodo'
              value={query}
              onChange={handleChange}
            />
            <button>Search</button>
            {query && <MoviesList films={films} />}
          </form>
      }
    </>
  )
}
export default Movies
