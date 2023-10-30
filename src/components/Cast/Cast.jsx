import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getCast } from 'api/getFilms'

const Cast = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [cast, setCast] = useState(null)

  const location = useLocation()

  const { id } = location.state;

  const basePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';


  const fetchCast = useCallback(async (id) => {
    try {
      setIsLoading(true)
      setCast(null)
      const data = await getCast(id)
      setCast(data.cast)
    } catch (error) {
      setError(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCast(id)
  }, [fetchCast, id])

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <ul>
        {cast && cast.map(({ profile_path, name, character, id }) => (
          <li key={id}>
            {profile_path && <img src={basePath + profile_path} alt='...' style={{ width: '20%' }} />}
            <h3>{name}</h3>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cast
