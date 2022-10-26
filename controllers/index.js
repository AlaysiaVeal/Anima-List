const { Mangalist, Readlist } = require('../models')
const Manga = require('../models/MangaList')
const readList = require('../models/ReadList')

const findMangaList = async (req, res) => {
  let list = await Mangalist.find({})
  res.send(list)
}

const createReadList = async (req, res) => {
  let newList = await Readlist.create(req.body)
  res.send(newList)
}
const findReadList = async (req, res) => {
  let readList = await Readlist.find({}).populate('manga_id')
  res.send(readList)
}
const deleteListingById = async (req, res) => {
  let deleteManga = await Readlist.deleteOne(req.params)
  res.send(deleteManga)
}
module.exports = {
  findMangaList,
  createReadList,
  findReadList,
  deleteListingById
}
