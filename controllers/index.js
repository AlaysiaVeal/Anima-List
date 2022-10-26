const { Mangalist, Readlist } = require('../models')
const Manga = require('../models/MangaList')
const readList = require('../models/ReadList')

/* app.get('/list', async (req, res) => {
  let list = await Manga.find({})
  res.send(list)
})  */

const findMangaList = async (req, res) => {
  let list = await Mangalist.find({})
  res.send(list)
}

const createReadList = async (req, res) => {
  let newList = await Readlist.create(req.body)
  res.send(newList)
}
const findReadList = async (req, res) => {
  let readList = await Readlist.find({})
  res.send(readList)
}
const populateReadList = async (req, res) => {
  let populate = await Readlist.populate('manga_id')
  res.send(populate)
}
/* app.post('/readlist', async (req, res) => {
  let newList = await readList.create(req.body)
  res.send(newList)
})
app.get('/readlist', async (req, res) => {
  let readList = await Readlist.find({}).populate('manga_id')
  res.send(readList)
}) */
module.exports = {
  findMangaList,
  createReadList,
  findReadList,
  populateReadList
}
