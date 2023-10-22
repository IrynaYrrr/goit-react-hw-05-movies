import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

const apiKey = '?api_key=3adf912e1176a1853c1356db72ac2ada';

export const getCollectionFilms = async () => {
  const { data } = await axios(`/trending/get-trending/movie/trending/get-trending?${apiKey}`)
  return data
}
