import { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const Home = () => {
  const [list, setList] = useState([])
  const initialState = { title: '', image: '', description: '', manga_id: '' }
  const [listState, setListState] = useState(initialState)
  useEffect(() => {
    const getManga = async () => {
      try {
        let res = await axios.get('http://localhost:3001/lists')
        console.log(res.data)
        setList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getManga()
  }, [])
  /* const handleClick = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/lists', listState)
    setListState(initialState)
  } */
  return (
    <div>
      {/*       <nav>
        <Header handleClick={handleClick} />
      </nav> */}
    </div>
  )
}
export default Home
