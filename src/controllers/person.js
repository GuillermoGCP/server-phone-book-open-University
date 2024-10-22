const storedPersons = require('../db/persons.json')
const person = (req, res) => {
    const { id } = req.params
    const person = storedPersons.find((person) => person.id === parseInt(id))
    if (!person) return res.status(404).send(`<p>Person not found</p>`)
    res.send({ data: person })
}
module.exports = person
