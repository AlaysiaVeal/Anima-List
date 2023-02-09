const Search = ({ handleChange, value, onSubmit }) => {
  return (
    <div className="Search-Results">
      <div className="wrapper">
        <form onSubmit={onSubmit}>
          <input
            className="search"
            name="search"
            value={value}
            placeholder="Search"
            type="text"
            onChange={handleChange}
          />
          <button type="Submit" className="search-button">
            search
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search
