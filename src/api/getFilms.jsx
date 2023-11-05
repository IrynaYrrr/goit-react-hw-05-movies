import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWRmOTEyZTExNzZhMTg1M2MxMzU2ZGI3MmFjMmFkYSIsInN1YiI6IjY1MmMwYWJjNzJjMTNlMDEzZDE1YzUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hzf05Uu31G7_NhpUWVecKABBc5ROUSkbQVOs-Yw6zYQ';

export const getCollectionFilms = async () => {
  const { data } = await axios({
    method: "get",
    url: "/movie/popular?language=en-US&page=1",
  })
  return data
}

export const getMovieDetails = async (movieId) => {
  const { data } = await axios({
    method: "get",
    url: `/movie/${movieId}?language=en-US`,
  })
  return data
}

export const getCast = async (movieId) => {
  const { data } = await axios({
    method: "get",
    url: `/movie/${movieId}}/credits?language=en-US`,
  })
  return data
}

export const getReviews = async (movieId) => {
  const { data } = await axios({
    method: "get",
    url: `/movie/${movieId}/reviews?language=en-US&page=1`,
  })
  return data
}

export const getFilmsBySearch = async (query) => {
  const { data } = await axios({
    method: "get",
    url: `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
  })
  return data
}
