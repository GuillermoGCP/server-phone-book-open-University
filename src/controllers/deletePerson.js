const Person = require('../db/models/PersonsModel.js')

const deletePerson = async (req, res, next) => {
    const { id } = req.params

    Person.findByIdAndDelete(id)
        .then((person) => {
            if (person) {
                res.status(200).json({
                    id: person._id.toString(),
                    name: person.name,
                })
            } else {
                res.status(404).send('Person not found')
            }
        })
        .catch((error) => {
            next(error)
        })
}
module.exports = deletePerson
