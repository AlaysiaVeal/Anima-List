import { useState } from 'react'

const Search = ({ handleChange, value, onSubmit }) => {
  /* const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getResults = async (e) => {
    e.preventDefault()
    toggleSearched(true)
    const response = await axios.get('http://localhost:3001/list')
  } */

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search Games"
        onChange={handleChange}
      ></input>
      <button type="Submit"></button>
    </form>
  )
}

export default Search
