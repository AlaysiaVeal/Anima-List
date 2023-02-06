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
  }
  useEffect(() => {
    getMangaDetails()
  }, [])

  const handleDetails = async (e, id) => {
    e.preventDefault()

    await axios.post(`${BASE_URL}list/:id`, { _id: id })
    navigate(`/mangadetails/${id}`)
  }

  const buttonClick = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}list/${id}`)
    getMangaDetails()
  }

  const dislikeButton = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}declist/${id}`)
    getMangaDetails()
  }

  return (
    <div>
      <h1>Details</h1>
      {mangaDetails ? (
        <div key={mangaDetails._id}>
          <img src={mangaDetails?.image} onClick={handleDetails} />
          <div className="details">
            <h2 id="details">{mangaDetails?.description}</h2>
          </div>
          <h3>rating:{mangaDetails?.rating}</h3>
          <button className="like" onClick={buttonClick}>
            Like
          </button>
          <button className="dislike" onClick={dislikeButton}>
            Dislike
          </button>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  )
}
export default MangaDetails
