import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className="Nav">
        <div className="app-name">My Manga List</div>
        <NavLink to="/" className="nav">
          Home
        </NavLink>
        <br></br>
        <NavLink to="/genres" className="nav">
          Genres
        </NavLink>
        <br></br>
        <NavLink to="/list" className="nav">
          List
        </NavLink>
      </nav>
    </header>
  )
}
export default Header
