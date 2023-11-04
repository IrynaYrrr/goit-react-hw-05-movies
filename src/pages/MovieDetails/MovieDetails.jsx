import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation()
  const basePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

  const {
    id,
    original_language,
    original_title,
    overview,
    poster_path,
    vote_average,
  } = location.state;

  const releaseDate = location.state.release_date.split('-')[0];

  const backLinkHref = location.state?.from ?? "/movies";

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <br />
      <img src={basePath + poster_path} alt='...' style={{ width: '20%' }} />
      <h2>{original_title} ({releaseDate})</h2>
      <p>User score: {vote_average}</p>
      <h3>Overview:</h3>
      <p>{overview}</p>
      <h3>Original language:</h3>
      <p>{original_language}</p>
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
    </div>
  )
}

export default MovieDetails
