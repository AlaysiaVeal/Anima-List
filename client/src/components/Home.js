import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Search'

const Home = () => {
  const [list, setList] = useState([])
  const initialState = { title: '', image: '', description: '', manga_id: '' }
  const [listState, setListState] = useState(initialState)
  useEffect(() => {
    const getManga = async () => {
      try {
        let res = await axios.get('http://localhost:3001/list')
        setList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getManga()
  }, [])
  const handleClick = async (e, mId) => {
    e.preventDefault()

    await axios.post('http://localhost:3001/readlist', { manga_id: mId })
  }
  return (
    <div>
      <div className="Search-Bar">
        <Search />
      </div>
      {list?.map((list) => (
        <div key={list._id}>
          <h2>{list.title}</h2>
          <img src={list.image} />
          <h3>{list.description}</h3>
          <button onClick={(e) => handleClick(e, list._id)}>+</button>
        </div>
      ))}
    </div>
  )
}
export default Home
