import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className="Nav">
        <div className="app-name">My Manga List</div>
        <div className="links">
          <NavLink to="/" className="nav" id="link1">
            Home
          </NavLink>
          <br></br>
          <NavLink to="/genres" className="nav" id="link2">
            Genres
          </NavLink>
          <br></br>
          <NavLink to="/list" className="nav" id="link3">
            List
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
export default Header
