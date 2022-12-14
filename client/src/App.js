import Home from './components/Home'
import Header from './components/Header'
import List from './components/List'
import Genres from './components/Genres'
import ViewGameDetails from './components/ViewGameDetails'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/mangadetails/:id" element={<ViewGameDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
