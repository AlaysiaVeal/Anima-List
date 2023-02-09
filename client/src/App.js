import Home from './components/Home'
import Header from './components/Header'
import List from './components/List'
import Genres from './components/Genres'
import ViewMangaDetails from './components/ViewMangaDetails'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MangaCard from './components/MangaCard'
import Search from './components/Search'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../src/globals'
import { useNavigate } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/mangadetails/:id" element={<ViewMangaDetails />} />
          <Route path="/result" element={<MangaCard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
