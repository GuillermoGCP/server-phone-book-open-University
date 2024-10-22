const express = require('express')
const notes = require('../controllers/persons.js')
const router = express.Router()

router.get('/api/persons', notes)

module.exports = router
