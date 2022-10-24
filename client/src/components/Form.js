import Home from './Home'
import { NavLink } from 'react-router-dom'

const Form = () => {
  const handleClick = () => {
    ;<NavLink to="/home"></NavLink>
  }
  return (
    <div id="form">
      <form action="/home">
        <input type="text" placeholder="Username" required></input>
        <input type="text" placeholder="Password" required></input>
        <button class="sign-up-button">log in</button>
      </form>
    </div>
  )
}
export default Form
