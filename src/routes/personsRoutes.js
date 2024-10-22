const express = require('express')
const {
    persons,
    info,
    person,
    deletePerson,
    addPerson,
} = require('../controllers/index.js')
const router = express.Router()

router.get('/api/persons', persons)
router.get('/api/persons/:id', person)
router.delete('/api/persons/:id', deletePerson)
router.post('/api/persons', addPerson)
router.get('/info', info)

module.exports = router
