const express = require('express')
const routes = require('./routes')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const { Readlist, Mangalist } = require('./models')
const controllers = require('./controllers')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

app.get('/', (req, res) => res.send('root worked'))
app.get('/list', controllers.findMangaList)
app.post('/readlist', controllers.createReadList)
app.get('/readlist', controllers.findReadList)
app.get('/readlist', controllers.populateReadList)

/* app.get('/list', async (req, res) => {
  let list = await Mangalist.find({})
  res.send(list)
})
app.post('/readlist', async (req, res) => {
  let newList = await Readlist.create(req.body)
  res.send(newList)
})
app.get('/readlist', async (req, res) => {
  let readList = await Readlist.find({}).populate('manga_id')
  res.send(readList)
}) */

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
