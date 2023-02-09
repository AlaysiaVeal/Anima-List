import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Search'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import { Link } from 'react-router-dom'
import MangaCard from './MangaCard'

const Home = () => {
  const navigate = useNavigate()
  const [list, setList] = useState([])
  /* const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const mangaSearch = async (e) => {
    e.preventDefault()
    toggleSearched(true)
    const res = await axios.get(`${BASE_URL}list/:title`)
    setSearchResults(res.data.results)
    console.log(res.data.manga)
    setSearchQuery('')
    navigate('/result')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  } */

  useEffect(() => {
    const getManga = async () => {
      try {
        let res = await axios.get(`${BASE_URL}list`)
        setList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getManga()
  }, [])
  const handleClick = async (e, mId) => {
    e.preventDefault()

    await axios.post(`${BASE_URL}readlist`, { manga_id: mId })
    navigate('/list')
  }
  return (
    <div>
      {/* <div className="Search-Bar">
        <Search
          handleChange={handleChange}
          searchResults={searchResults}
          onSubmit={mangaSearch}
          value={searchQuery}
        />
      </div>
      <div className="Search-Results">
        {searchResults?.map((manga) => (
          <MangaCard
            key={manga._id}
            id={manga._id}
            title={manga.title}
            image={manga.image}
          />
        ))}
      </div> */}
      {list?.map((list) => (
        <div key={list._id}>
          <h2>{list.title}</h2>
          <Link to={`/mangadetails/${list._id}`}>
            <img src={list.image} className="images" />
          </Link>
          <button
            onClick={(e) => handleClick(e, list._id)}
            className="add-button"
          >
            +
          </button>
        </div>
      ))}
    </div>
  )
}
export default Home
