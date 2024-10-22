const storedPersons = require('../db/persons.json')
const persons = (_req, res) => {
    res.send({ data: storedPersons })
}
module.exports = persons
