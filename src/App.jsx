import { Route, Routes } from 'react-router-dom'
import Layout from 'Layout/Layout'
import NotFound from 'pages/NotFound/NotFound'
import { MovieDetails } from 'pages/MovieDetails/MovieDetails'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/movies" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
