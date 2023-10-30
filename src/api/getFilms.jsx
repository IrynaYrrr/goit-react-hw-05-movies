import axios from 'axios';

export const getCollectionFilms = async () => {
  const { data } = await axios({
    method: "get",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    headers:{
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRmOTEyZTExNzZhMTg1M2MxMzU2ZGI3MmFjMmFkYSIsInN1YiI6IjY1MmMwYWJjNzJjMTNlMDEzZDE1YzUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzf05Uu31G7_NhpUWVecKABBc5ROUSkbQVOs-Yw6zYQ',
      Accept: 'application/json'
    }
  })
  return data
}

export const getCast = async (movieId) => {
  const { data } = await axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/${movieId}}/credits?language=en-US`,
    headers:{
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRmOTEyZTExNzZhMTg1M2MxMzU2ZGI3MmFjMmFkYSIsInN1YiI6IjY1MmMwYWJjNzJjMTNlMDEzZDE1YzUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzf05Uu31G7_NhpUWVecKABBc5ROUSkbQVOs-Yw6zYQ',
      Accept: 'application/json'
    }
  })
  return data
}

export const getReviews = async (movieId) => {
  const { data } = await axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    headers:{
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRmOTEyZTExNzZhMTg1M2MxMzU2ZGI3MmFjMmFkYSIsInN1YiI6IjY1MmMwYWJjNzJjMTNlMDEzZDE1YzUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzf05Uu31G7_NhpUWVecKABBc5ROUSkbQVOs-Yw6zYQ',
      Accept: 'application/json'
    }
  })
  return data
}

export const getFilmsBySearch = async (query) => {
  const { data } = await axios({
    method: "get",
    url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    headers:{
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRmOTEyZTExNzZhMTg1M2MxMzU2ZGI3MmFjMmFkYSIsInN1YiI6IjY1MmMwYWJjNzJjMTNlMDEzZDE1YzUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzf05Uu31G7_NhpUWVecKABBc5ROUSkbQVOs-Yw6zYQ',
      Accept: 'application/json'
    }
  })
  return data
}
