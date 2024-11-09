const Person = require('../db/models/PersonsModel.js')

const updatePerson = async (req, res, next) => {
    const { id } = req.params

    Person.findByIdAndUpdate(id, req.body)
        .then((response) => {
            res.json({
                id: response._id.toString(),
                number: response.number,
                name: response.name,
            })
        })
        .catch((error) => next(error))
}
module.exports = updatePerson
