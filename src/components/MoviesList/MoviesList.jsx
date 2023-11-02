import { Link } from 'react-router-dom'

const MoviesList = ({films, stateFrom}) => {

  return (
      <ul>
        {films && films.map((film) => (
          <li style={{ listStyleType: 'none' }} key={film.id}>
            <Link to={`/movies/${film.id}`} state={{...film, from: stateFrom}}>{film.original_title}</Link>
          </li>
        ))}
      </ul>
  )
}

export default MoviesList
