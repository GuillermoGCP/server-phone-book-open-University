const Person = require('../db/models/PersonsModel.js')

const persons = (_req, res) => {
    Person.find({}).then((persons) => res.json(persons))
}
module.exports = persons
