import { getMovieDetails } from 'api/getFilms';
import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [film, setFilm] = useState(null)

  const location = useLocation()
  const { movieId } = useParams()


  const basePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

  useEffect(() => {
    const fetchFilm = (async () => {
      try {
        setIsLoading(true)

        const data = await getMovieDetails(movieId)
        setFilm(data)
      } catch (error) {
        setError(error.response.data)
      } finally {
        setIsLoading(false)
      }
    })
    fetchFilm()
  }, [movieId])

  const backLinkHref = useRef(location.state?.from ?? "/movies")

  return (
    <>
      {error && <h1>{error}</h1>}
      {isLoading ? <h1>Loading</h1>
        : <div>
          {film && (
            <>
              <Link to={backLinkHref.current}>Go back</Link>
              <br />
              <img src={basePath + film.poster_path} alt='...' style={{ width: '20%' }} />
              <h2>{film.original_title} ({film.release_date.split('-')[0]})</h2>
              <p>User score: {film.vote_average}</p>
              <h3>Overview:</h3>
              <p>{film.overview}</p>
              <h3>Original language:</h3>
              <p>{film.original_language}</p>
              <br />
              <p>Additional information:</p>
              <ul>
                <li style={{ listStyleType: 'none' }}>
                  <Link to={'cast'}>
                    Cast
                  </Link>
                </li>
                <li style={{ listStyleType: 'none' }}>
                  <Link to={'reviews'}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </>
          )}
          <Outlet />
        </div>}
    </>
  )
}
export default MovieDetails
