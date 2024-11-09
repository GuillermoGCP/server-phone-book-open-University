const Person = require('../db/models/PersonsModel.js')

const persons = (_req, res, next) => {
    Person.find({})
        .then((persons) => res.json(persons))
        .catch((error) => next(error))
}
module.exports = persons
