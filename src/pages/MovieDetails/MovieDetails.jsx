import { getMovieDetails } from 'api/getFilms';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const MovieDetails = () => {

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [film, setFilm] = useState(null)

  const location = useLocation()
  const { id } = location.state;

  const basePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

  useEffect(() => {
    const fetchFilm = (async () => {
      try {
        setIsLoading(true)
        setFilm(null)
        const data = await getMovieDetails(id)
        setFilm(data)
      } catch (error) {
        setError(error.response.data)
      } finally {
        setIsLoading(false)
      }
    })
    fetchFilm()
  },[id])

  const backLinkHref = location.state?.from ?? "/movies";

  return (
    <>
      {error && <h1>{error}</h1>}
      {isLoading ? <h1>Loading</h1>
        : <div>
          {film && (
            <>
              <Link to={backLinkHref}>Go back</Link>
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
                  <Link to={`/movies/${id}/cast`} state={location.state}>
                    Cast
                  </Link>
                </li>
                <li style={{ listStyleType: 'none' }}>
                  <Link to={`/movies/${id}/reviews`} state={location.state}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>}
    </>
  )
}

export default MovieDetails
