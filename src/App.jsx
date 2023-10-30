import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from 'Layout/Layout'
import NotFound from 'pages/NotFound/NotFound'
import Movies from 'pages/Movies/Movies'
import { MovieDetails } from 'pages/MovieDetails/MovieDetails'
import { Home } from 'pages/Home/Home'
import Cast from 'components/Cast/Cast'
import Reviews from 'components/Reviews/Reviews'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={
          <>
            <MovieDetails />
            <Outlet />
          </>
        }>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
