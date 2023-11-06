import { Link, useLocation } from 'react-router-dom'

const MoviesList = ({ films }) => {

  const location = useLocation()

  return (
    <ul>
      {films && films.map((film) => (
        <li style={{ listStyleType: 'none' }} key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>{film.original_title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MoviesList
