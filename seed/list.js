const db = require('../db')
const { Mangalist } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const mangas = [
    {
      title: 'Attack on Titan',
      description: 'random',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png'
    },
    {
      title: 'FairyTail',
      description: 'random',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png'
    }
  ]
  await Mangalist.insertMany(mangas)
  console.log('Created an object!')
}
const run = async () => {
  await main()
  db.close()
}

run()
