const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const controllers = require('./controllers')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => res.send('root worked'))
app.get('/list', controllers.findMangaList)
app.put(`/list/:id`, controllers.updateMangas)
app.get('/list/:id', controllers.findMangasId)
app.post('/readlist', controllers.createReadList)
app.get('/readlist', controllers.findReadList)
app.delete('/readlist/:id', controllers.deleteListingById)
app.get('/list/:title', controllers.findMangaById)
app.put('/declist/:id', controllers.decrementRating)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
