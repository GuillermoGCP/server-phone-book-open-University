const Person = require('../db/models/PersonsModel.js')

const addPerson = async (req, res, next) => {
    const { name, number } = req.body

    //Validations:
    if (!name || !number) {
        const missingField =
            !name && !number ? 'Name and number' : !name ? 'Name' : 'Number'
        return res.status(400).send({ error: `${missingField} are required.` })
    }

    Person.findOne({ name: name })
        .then((person) => {
            if (person)
                return res.status(400).send({ error: 'name must be unique' })
            else {
                const personTosave = new Person(req.body)
                personTosave.save().then((person) => res.json(person))
            }
        })
        .catch((error) => next(error))
}
module.exports = addPerson
