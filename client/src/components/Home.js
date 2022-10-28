import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Search'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import { Link } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [list, setList] = useState([])

  useEffect(() => {
    const getManga = async () => {
      try {
        let res = await axios.get(`${BASE_URL}list`)
        setList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getManga()
  }, [])
  const handleClick = async (e, mId) => {
    e.preventDefault()

    await axios.post(`${BASE_URL}readlist`, { manga_id: mId })
    navigate('/list')
  }
  const viewManga = (id) => {
    navigate(`/mangadetails/${id}`)
  }
  return (
    <div>
      <div className="Search-Bar">
        <Search onChange={searchResults} />
      </div>
      {list?.map((list) => (
        <div key={list._id}>
          <h2>{list.title}</h2>
          <Link to={`/mangadetails/${list._id}`}>
            <img src={list.image} />
          </Link>
          <button onClick={(e) => handleClick(e, list._id)}>+</button>
        </div>
      ))}
    </div>
  )
}
export default Home
