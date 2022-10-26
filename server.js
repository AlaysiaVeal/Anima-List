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

app.get('/', (req, res) => res.send('root worked'))
app.get('/list', controllers.findMangaList)
app.post('/readlist', controllers.createReadList)
app.get('/readlist', controllers.findReadList)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
