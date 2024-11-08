const Person = require('../db/models/PersonsModel.js')

const deletePerson = async (req, res) => {
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
            console.error('Error al eliminar la persona:', error)
            res.status(500).send('Error deleting person')
        })
}
module.exports = deletePerson
