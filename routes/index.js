const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('root worked'))
router.post('/manga', controllers.createManga)

module.exports = router
