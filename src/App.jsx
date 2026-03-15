import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import { useState } from "react"

//jeg har brukt det vi gjor i forelesning for pokemon api som hjelp til å dobbelsjekke om jeg har tenkt riktig.
//Har brukt AI 1 gang og dette er kommentert der det er gjort, samt ei mappe under public med bildene fra AI
// Har jobbet med deler av oppgaven sammen med Jesper Østli Simensen

function App() {
  // Fikk hjelp av studass til å få ideen med å flytte denne useStaten hit, samt deklarere dette i route under 
      const [movies, setMovies] = useState([])
      
  return (
    <Routes>
      <Route index element={<Home setMovies={setMovies} movies={movies} />} />
      <Route path="/:movie" element={<Movie movies={movies}/>} />
    </Routes>
  )
}

export default App
