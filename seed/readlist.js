const db = require('../db')
const { Readlist, Mangalist } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const fairytail = await Mangalist.find({ title: 'FairyTail' })

  const reading = {
    title: 'Manga List',
    image: 'idk',
    description: 'random',
    manga_id: fairytail._id
  }

  await Readlist.insertMany(reading)
  console.log('Created reading list!')
}
const run = async () => {
  await main()
  db.close()
}

run()
