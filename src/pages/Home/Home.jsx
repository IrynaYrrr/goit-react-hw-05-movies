import { getCollectionFilms } from 'api/getFilms'
import MoviesList from 'components/MoviesList/MoviesList'
import { useCallback, useEffect, useState } from 'react'

const Home = () => {

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [films, setFilms] = useState(null)

  const fetchFilms = useCallback(async () => {
    try {
      setIsLoading(true)
      setFilms(null)
      const data = await getCollectionFilms()
      setFilms(data.results)
    } catch (error) {
      setError(error.response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchFilms()
  }, [fetchFilms])

  return (
    <>
      {error && <h1>{error}</h1>}

      {
        isLoading
          ? <h1>Loading</h1>
          : <div>
            <h1>Trending today</h1>
            <MoviesList films={films} stateFrom="/"/>
          </div>
      }
    </>
  )
}
export default Home
