const storedPersons = require('../db/persons.json')
const fs = require('fs/promises')

const deletePerson = async (req, res) => {
    const { id } = req.params

    //Check if person exists:
    const person = storedPersons.find((person) => person.id === id)
    if (!person) return res.status(404).send(`<p>Person not found</p>`)

    const remainingPeople = storedPersons.filter((person) => person.id !== id)
    // Save new data:
    await fs.writeFile(
        './src/db/persons.json',
        JSON.stringify(remainingPeople, null, 2)
    )
    res.status(204).end()
}
module.exports = deletePerson
