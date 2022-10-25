const db = require('../db')
const { Mangalist } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const mangas = [
    {
      title: 'Attack on Titan',
      description: 'random',
      image:
        'https://www.psu.com/wp/wp-content/uploads/2017/11/Attack-On-Titan2.jpg'
    },
    {
      title: 'FairyTail',
      description: 'random',
      image: 'https://animekaizoku.com/wp-content/uploads/2020/03/pic-2.jpg'
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
