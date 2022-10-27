import { useEffect, useState } from 'react'
import axios from 'axios'

const List = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    const getReadList = async () => {
      try {
        let res = await axios.get('/readlist')
        setList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getReadList()
  }, [])
  const handleClick = async (e, objId) => {
    e.preventDefault()

    await axios.delete('/readlist/:id', { _id: objId })
  }
  return (
    <div>
      <h1>My Manga List</h1>
      {list?.map((list) => (
        <div key={list._id}>
          <h2>{list?.manga_id.title}</h2>
          <img src={list?.manga_id.image} />
          <h3>{list?.manga_id.description}</h3>
          <button onClick={(e) => handleClick(e, list._id)}>-</button>
        </div>
      ))}
    </div>
  )
}
export default List
