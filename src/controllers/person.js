const Person = require('../db/models/PersonsModel.js')

const person = (req, res, next) => {
    const { id } = req.params
    Person.findById(id)
        .then((person) => res.json(person))
        .catch((error) => next(error))
}
module.exports = person
