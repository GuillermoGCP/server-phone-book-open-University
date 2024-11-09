const express = require('express')
const {
    persons,
    info,
    person,
    deletePerson,
    addPerson,
    updatePerson,
} = require('../controllers/index.js')
const router = express.Router()

router.get('/api/persons', persons)
router.get('/api/persons/:id', person)
router.delete('/api/persons/:id', deletePerson)
router.post('/api/persons', addPerson)
router.put('/api/persons/:id', updatePerson)
router.get('/api/info', info)

module.exports = router
