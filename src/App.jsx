import { Route, Routes } from 'react-router-dom'
import Layout from 'Layout/Layout'
import NotFound from 'pages/NotFound/NotFound'
import Movies from 'pages/Movies/Movies'
import { MovieDetails } from 'pages/MovieDetails/MovieDetails'
import { Home } from 'pages/Home/Home'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={<MovieDetails />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
