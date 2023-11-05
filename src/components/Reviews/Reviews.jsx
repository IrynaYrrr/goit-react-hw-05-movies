import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getReviews } from 'api/getFilms'
import NotFound from 'pages/NotFound/NotFound'

const Reviews = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [reviews, setReviews] = useState(null)

  const location = useLocation()

  const { id } = location.state;

  useEffect(() => {
    const fetchReviews = (async () => {
      try {
        setIsLoading(true)
        setReviews(null)
        const data = await getReviews(id)
        setReviews(data.results)
      } catch (error) {
        setError(error.response.data)
      } finally {
        setIsLoading(false)
      }
    })
    fetchReviews()
  }, [id])

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {reviews && reviews[0]
        ? <ul>
          {reviews.map(({ author, content, id }) => (
            <li style={{ listStyleType: 'none' }} key={id}>
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
