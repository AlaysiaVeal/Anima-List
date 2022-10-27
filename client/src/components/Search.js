import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Search = () => {
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getManga = async (e) => {
    e.preventDefault()
    toggleSearched(true)
    const res = await axios.get(`${BASE_URL}list/:title`)
    console.log(res.data)
    setSearchResults(res.data)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="Search-Results">
      <form onSubmit={getManga}>
        <input
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Search Manga"
          onChange={handleChange}
        ></input>
        <button type="Submit"></button>
      </form>
    </div>
  )
}

export default Search
