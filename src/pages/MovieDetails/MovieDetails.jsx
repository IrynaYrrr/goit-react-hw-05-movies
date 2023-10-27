import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const MovieDetails = () => {
  const location = useLocation()
  const {
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count
  } = location.state;
  return (
    <div>
      <button>Go back</button>
      <img src={poster_path} alt='...' />
      <h2>{original_title}</h2>
      <p>User score: {vote_average}</p>
      <h3>Overview:</h3>
      <p>{overview}</p>
      <h3>Original language:</h3>
      <p>{original_language}</p>
      <br />
      <p>Additional information:</p>
      <ul>
        <li>
          <Link>
            Cost
          </Link>
        </li>
        <li>
          <Link>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  )
}
