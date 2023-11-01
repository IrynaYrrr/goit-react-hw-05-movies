import { Link } from 'react-router-dom'

const MoviesList = ({films}) => {

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films && films.map((film) => (
          <li style={{ listStyleType: 'none' }} key={film.id}>
            <Link to={`/movies/${film.id}`} state={film}>{film.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesList
