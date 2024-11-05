const Person = require('../db/models/PersonsModel.js')

const person = (req, res) => {
    const { id } = req.params
    Person.findById(id).then((person) => res.json(person))
}
module.exports = person
