const { Router } = require('express')
const express = require('express')
const app = express()
const controllers = require('../controllers')
const router = Router()

/* app.get('/', (req, res) => res.send('root worked'))
app.get('/list', controllers.findMangaList)
app.post('/readlist', controllers.createReadList)
app.get('/readlist', controllers.findReadList)
app.get('/readlist', controllers.populateReadList) */

module.exports = router
