import {Link} from 'react-router-dom'
import list from './List'

const MangaCard = ({rating, title, image}) => {
  return(
    <div className="my-list">
      <h2>{title}</h2>
      <Link to={`/mangadetails/${list._id}`}>
        <img src={image} alt='manga' className="images"></img>
      </Link>
      <h3>{rating}</h3>
    </div>
  )
}
export default MangaCard