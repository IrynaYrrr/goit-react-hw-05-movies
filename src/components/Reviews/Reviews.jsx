import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReviews } from 'api/getFilms'
import NotFound from 'pages/NotFound/NotFound'

const Reviews = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [reviews, setReviews] = useState(null)

  const { movieId } = useParams()

  useEffect(() => {
    const fetchReviews = (async () => {
      try {
        setIsLoading(true)
        setReviews(null)
        const data = await getReviews(movieId)
        setReviews(data.results)
      } catch (error) {
        setError(error.response.data)
      } finally {
        setIsLoading(false)
      }
    })
    fetchReviews()
  }, [movieId])


  if (error) {
    return <h1>{error}</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {reviews.length > 0
        ? <ul>
          {reviews.map(({ author, content, movieId }) => (
            <li style={{ listStyleType: 'none' }} key={movieId}>
              <b> {author}</b>
              <br />
              {content}
            </li>
          ))}
        </ul>
        : <NotFound />}
    </div>
  )
}

export default Reviews
