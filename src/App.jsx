import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/AppLayout'
import MoviesPage from './pages/moviesPage'
import ReviewScreen from './pages/ReviewScreen'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<MoviesPage />} />
            <Route path='movies/:id' element={<ReviewScreen />}/>
          </Route>
        </Routes>     
      </BrowserRouter>
    </>
  )
}

export default App
