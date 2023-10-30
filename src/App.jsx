import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from 'Layout/Layout'
import Home from 'pages/Home/Home'
import NotFound from 'pages/NotFound/NotFound'
import { Suspense, lazy } from 'react'

const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('./components/Cast/Cast'))
const Movies = lazy(() => import('./pages/Movies/Movies'))
const Reviews = lazy(() => import('./components/Reviews/Reviews'))

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='movies' element={
          <Suspense fallback={'Loading...'}>
            <Movies />
          </Suspense>}
        />
        <Route path='movies/:movieId' element={
          <Suspense fallback={'Loading...'}>
            <>
              <MovieDetails />
              <Outlet />
            </>
          </Suspense>
        }>
          <Route path='cast' element={<Suspense fallback={'Loading...'}><Cast /></Suspense>} />
          <Route path='reviews' element={<Suspense fallback={'Loading...'}><Reviews /></Suspense>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App;
