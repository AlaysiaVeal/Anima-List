import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/genres">Genres</NavLink>
        <NavLink to="/list">List</NavLink>
      </nav>
    </header>
  )
}
export default Header
