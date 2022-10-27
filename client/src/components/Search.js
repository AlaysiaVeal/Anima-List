import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Search = ({ onChange, onSubmit, value }) => {
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
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="search"
          value={value}
          placeholder="Search Manga"
          onChange={onChange}
        ></input>
        <button type="Submit" className="search-button"></button>
      </form>
    </div>
  )
}

export default Search
