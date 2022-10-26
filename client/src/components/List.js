import { useEffect, useState } from 'react'
import axios from 'axios'

const List = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    const getReadList = async () => {
      try {
        let res = await axios.get('http://localhost:3001/readlist')
        setList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getReadList()
  }, [])
  return (
    <div>
      <h1>Read List</h1>
      {/* {list?.map((list) => (
        <div key={list._id}>
          <h2>{list.manga_id.title}</h2>
          <h3>{list.manga_id.description}</h3>
          <img src={list.manga_id.image} />
        </div>
      ))} */}
    </div>
  )
}
export default List
