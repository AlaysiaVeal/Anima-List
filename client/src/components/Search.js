const Search = ({ handleChange, onSubmit }) => {
  return (
    <div className="Search-Results">
      <div className="wrapper">
        <form onSubmit={onSubmit}>
          <input
            className="search"
            placeholder="Search"
            type="text"
            handleChange={handleChange}
          />
          <button type="Submit">search</button>
        </form>
      </div>
    </div>
  )
}

export default Search
