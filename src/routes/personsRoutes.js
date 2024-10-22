const express = require('express')
const { persons, info } = require('../controllers/index.js')
const router = express.Router()

router.get('/api/persons', persons)
router.get('/info', info)

module.exports = router
