import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import { useState } from "react"

function App() {
      const [movies, setMovies] = useState([])
      
  

  return (
    <Routes>
      <Route index element={<Home setMovies={setMovies} movies={movies} />} />
      <Route path="/:movie" element={<Movie movies={movies}/>} />
    </Routes>
  )
}

export default App
