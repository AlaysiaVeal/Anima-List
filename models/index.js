const mongoose = require('mongoose')
const AnimeListSchema = require('./AnimeList')

const Animelist = mongoose.model('AnimeList', AnimeListSchema)
const Watchlist = mongoose.model('AnimeList', WatchListSchema)

module.exports = {
  Animelist,
  Watchlist
}
