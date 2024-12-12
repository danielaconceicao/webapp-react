import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/AppLayout'
import MoviesPage from './pages/moviesPage'
import ReviewScreen from './pages/ReviewScreen'
import { AppProvider } from './context/appProvider'
import './App.css'

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<MoviesPage />} />
            <Route path='movies/:id' element={<ReviewScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
