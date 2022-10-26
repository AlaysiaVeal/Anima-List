import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className="Nav">
        <NavLink to="/" className="home">
          Home
        </NavLink>

        <NavLink to="/genres" className="genre">
          Genres
        </NavLink>

        <NavLink to="/list" className="list">
          List
        </NavLink>
      </nav>
    </header>
  )
}
export default Header
