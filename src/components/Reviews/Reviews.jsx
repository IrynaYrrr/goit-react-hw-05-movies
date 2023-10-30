import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getReviews } from 'api/getFilms'

const Reviews = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [reviews, setReviews] = useState(null)

  const location = useLocation()

  const { id } = location.state;

  const fetchReviews = useCallback(async (id) => {
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
  }, [])

  useEffect(() => {
    fetchReviews(id)
  }, [fetchReviews, id])

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <ul>
        {reviews && reviews.map(({ author, content, id }) => (
          <li style={{ listStyleType: 'none' }} key={id}>
            <b> {author}</b>
            <br />
            {content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Reviews
