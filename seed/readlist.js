const { Types } = require('mongoose')
const db = require('../db')
const { Readlist, Mangalist } = require('../models')
const { obj } = require('../models/MangaList')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const aot = await Mangalist.find({ title: 'Attack on Titan' })
  /* const fairytail = await Mangalist.find({ title: 'FairyTail' }) */

  const reading = {
    title: 'Manga List',
    image: 'idk',
    description: 'random',
    manga_id: aot[0]._id
  }

  await Readlist.insertMany(reading)
  console.log('Created reading list!')
}
const run = async () => {
  await main()
  db.close()
}

run()
