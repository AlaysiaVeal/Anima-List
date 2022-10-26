const Search = ({ handleChange, value, onSubmit }) => {
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
