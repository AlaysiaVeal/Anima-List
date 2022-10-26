const db = require('../db')
const { Mangalist } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const mangas = [
    {
      title: 'Attack on Titan',
      description:
        'It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his ...',
      image:
        'https://www.psu.com/wp/wp-content/uploads/2017/11/Attack-On-Titan2.jpg'
    },
    {
      title: 'FairyTail',
      description:
        'Lucy, a 17 year old girl, sets out on journey to become a full-fledged wizard and joins the strongest and most (in) famous guild FAIRY TAIL where she meets Natsu, Happy, Gray and Erza, who treat her more like family than friends.',
      image: 'https://animekaizoku.com/wp-content/uploads/2020/03/pic-2.jpg'
    },
    {
      title: 'Hitman Reborn',
      description:
        'The overall plot of the series centers around the primary protagonist, a teenage boy named Tsunayoshi Sawada, constantly known for being a loser meets an infant hitman known as Reborn, who acts as his home tutor in order to train him to become the Tenth Boss of a Mafia Famiglia known as Vongola Famiglia.',
      image:
        'https://somoskudasai.com/wp-content/uploads/2021/04/60ccf0ceaae540f4efadb5a5905162211618855178_main-1024x1536.jpg'
    },
    {
      title: 'HunterxHunter',
      description:
        'Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger. Gon Freecss is a young boy living on Whale Island.',
      image: 'https://wallpapercave.com/wp/wp1859941.jpg'
    },
    {
      title: 'One Piece',
      description:
        'One Piece is the story of Monkey D. Luffy, a young man who has a single dream: To find the legendary treasure known as the One Piece and become the King of the Pirates. Alongside a crew of trusted friends, Luffy sails the dangerous seas of the Grand Line to find Laugh Tale, the hidden island containing the One Piece.',
      image:
        'https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2020/04/One-Piece.jpg?fit=2560%2C1440&ssl=1'
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
