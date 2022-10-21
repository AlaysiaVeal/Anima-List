const mongoose = require('mongoose')
const MangaListSchema = require('./MangaList')
const ReadListSchema = require('./ReadList')

const Mangalist = mongoose.model('MangaList', MangaListSchema)
const Readlist = mongoose.model('ReadList', ReadListSchema)

module.exports = {
  Mangalist,
  Readlist
}
