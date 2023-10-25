import { Route, Routes } from 'react-router-dom'
import Layout from 'Layout/Layout'
import NotFound from 'pages/NotFound/NotFound'
import Movies from 'pages/Movies/Movies'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
