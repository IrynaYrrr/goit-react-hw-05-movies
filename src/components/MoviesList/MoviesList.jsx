import { Link } from 'react-router-dom'

const MoviesList = ({films}) => {

  return (
      <ul>
        {films && films.map((film) => (
          <li style={{ listStyleType: 'none' }} key={film.id}>
            <Link to={`/movies/${film.id}`} state={film}>{film.original_title}</Link>
          </li>
        ))}
      </ul>
  )
}

export default MoviesList
