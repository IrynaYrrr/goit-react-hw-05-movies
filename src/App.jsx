import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from 'Layout/Layout'
import NotFound from 'pages/NotFound/NotFound'
import { lazy } from 'react'

const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'))

const Home = lazy(() => import('pages/Home/Home'))

const Cast = lazy(() => import('./components/Cast/Cast'))
const Movies = lazy(() => import('./pages/Movies/Movies'))
const Reviews = lazy(() => import('./components/Reviews/Reviews'))

const App = () => {
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

export default App;
