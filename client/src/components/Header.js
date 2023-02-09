import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className="Nav">
        <div className="app-name">My Manga List</div>
        <div className="links">
          <Link to="/" className="nav" id="link1">
            Home
          </Link>
          <br></br>
          <Link to="/genres" className="nav" id="link2">
            Genres
          </Link>
          <br></br>
          <Link to="/list" className="nav" id="link3">
            List
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
