const storedPersons = require('../db/persons.json')
const persons = (_req, res) => {
    res.send(storedPersons)
}
module.exports = persons
