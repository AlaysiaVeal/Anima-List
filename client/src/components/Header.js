import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className="Nav">
        <NavLink to="/" className="home">
          Home
        </NavLink>
        <br></br>
        <NavLink to="/genres" className="genre">
          Genres
        </NavLink>
        <br></br>
        <NavLink to="/list" className="list">
          List
        </NavLink>
      </nav>
    </header>
  )
}
export default Header
