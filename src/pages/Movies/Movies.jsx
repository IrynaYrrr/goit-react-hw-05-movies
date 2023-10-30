import { MoviesList } from 'pages/MoviesList/MoviesList'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Movies = () => {
  const [query, setQuery] = useState('')
	const [searchParams, setSearchParams] = useSearchParams()

	const searchQuery = searchParams.get('search') ?? ''

	const handleChange = ({ target: { value } }) => {
		value ? setSearchParams({ search: value }) : setSearchParams({})
	}

  const handleSubmit = (e) => {
		e.preventDefault()
		setQuery(searchQuery)
	}

  useEffect(() => {
    searchQuery && setQuery(searchQuery)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input
					name='title'
					type='text'
					onChange={handleChange}
					className='form-control'
					id='exampleInputTodo'
					value={searchQuery}
				/>
      <button>Search</button>
      {query && <MoviesList query={query}/> }
    </form>
  )
}

export default Movies
