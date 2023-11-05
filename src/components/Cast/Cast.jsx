import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getCast } from 'api/getFilms'
import noPhoto from '../../assets/no-photo-icon.png';
import NotFound from 'pages/NotFound/NotFound';


const Cast = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [cast, setCast] = useState(null)

  const location = useLocation()

  const { id } = location.state;

  const basePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

  useEffect(() => {
    const fetchCast = (async () => {
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
    })
    fetchCast()
  }, [id])

  if (error) {
    return <h1>{error}</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {cast && cast[0] ?
        <ul>
          {cast.map(({ profile_path, name, character, id }) => (
            <li style={{ listStyleType: 'none' }} key={id}>
              {profile_path
                ? <div>
                  <img src={basePath + profile_path} alt='...' style={{ width: '20%' }} />
                  <h3>{name}</h3>
                  <p>{character}</p>
                  <hr style={{ border: '2px solid black' }} />
                </div>
                : <div>
                  <img src={noPhoto} alt='...' style={{ width: '20%' }} />
                  <h3>{name}</h3>
                  <p>{character}</p>
                  <hr style={{ border: '2px solid black' }} />
                </div>
              }
            </li>
          ))
          }
        </ul>
        : <NotFound />}
    </div>
  )
}

export default Cast
