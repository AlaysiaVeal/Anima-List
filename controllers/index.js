const { Mangalist, Readlist } = require('../models')
const Manga = require('../models/MangaList')
const readList = require('../models/ReadList')

const findMangaList = async (req, res) => {
  try {
    let list = await Mangalist.find({})
    res.send(list)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReadList = async (req, res) => {
  try {
    let newList = await Readlist.create(req.body)
    res.send(newList)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const findReadList = async (req, res) => {
  try {
    let readList = await Readlist.find({}).populate('manga_id')
    res.send(readList)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteListingById = async (req, res) => {
  try {
    let deleteManga = await Readlist.deleteOne(req.params)
    res.send(deleteManga)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const findMangaById = async (req, res) => {
  try {
    let manga = await Mangalist.findOne(req.params).populate('_id')
    res.send(manga)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const findMangasId = async (req, res) => {
  try {
    let manga = await Mangalist.findOne(req.params)
    if (manga) {
      return res.status(200).json({ manga })
    }
    return res.status(404).send('Manga with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateMangas = async (req, res) => {
  try {
    let mangas = await Mangalist.findByIdAndUpdate(
      req.params.id,
      { $inc: { rating: 1 } },
      {
        new: true
      }
    )
    res.send(mangas)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const decrementRating = async (req, res) => {
  try {
    let mangas = await Mangalist.findByIdAndUpdate(
      req.params.id,
      { $inc: { rating: -1 } },
      {
        new: true
      }
    )
    res.send(mangas)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  findMangaList,
  createReadList,
  findReadList,
  deleteListingById,
  findMangaById,
  updateMangas,
  findMangasId,
  decrementRating
}
