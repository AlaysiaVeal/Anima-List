import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const MangaDetails = () => {
  let { id } = useParams()
  const navigate = useNavigate()
  const [mangaDetails, setMangaDetails] = useState(null)

  const getMangaDetails = async () => {
    const res = await axios.get(`${BASE_URL}list/:id`)
    setMangaDetails(res.data.manga)
    console.log(res.data.manga)
  }
  useEffect(() => {
    getMangaDetails()
  }, [])

  const handleClick = async (e, id) => {
    e.preventDefault()

    await axios.post(`${BASE_URL}list/:id`, { _id: id })
    navigate(`/mangadetails/${id}`)
  }

  return (
    <div>
      <h1>Details</h1>
      {mangaDetails ? (
        <div key={mangaDetails._id}>
          <img src={mangaDetails?.image} onClick={handleClick} />
          <h2>{mangaDetails?.description}</h2>
          <img src="../images/heart.png" />
          <h3>rating:{mangaDetails?.rating}</h3>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  )
}
export default MangaDetails
