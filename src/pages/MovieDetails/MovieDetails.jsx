import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

export const MovieDetails = () => {
	const navigate = useNavigate()
  const location = useLocation()
  const {movieId} = useParams()

  const basePath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

  const {
    // adult,
    // backdrop_path,
    // genre_ids,
    // id,
    original_language,
    original_title,
    overview,
    poster_path,
    // popularity,
    // release_date,
    // title,
    // video,
    // vote_count,
    vote_average,
  } = location.state;
console.log(location.state)
const releaseDate = location.state.release_date.split('-')[0];

console.log(releaseDate);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <br />
      <img src={basePath + poster_path} alt='...' style={{width: '20%'}} />
      <h2>{original_title} ({releaseDate})</h2>
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
